import { initialState } from "./initialState";

export default async function getRandomPerson() {
  let randomPerson = {};

  let data = await fetch("https://random-data-api.com/api/users/random_user");
  if (!data.ok) {
    randomPerson.error = { message: "An error occured" };
    return randomPerson;
  }

  let res = await data.json();

  let newData = { ...initialState.emptyInfo };

  let adr = res.address;
  newData.title = res.employment.title;
  newData.address = `${adr.street_address}, ${adr.state} ${adr.country}`;
  let phoneNumber = res.phone_number;
  phoneNumber = phoneNumber.slice(0, phoneNumber.length - 6);
  newData.phone = phoneNumber;
  newData.desc = await getRandomQuote();

  data = await fetch("https://randomuser.me/api/");
  if (!data.ok) {
    newData.firstName = res.first_name;
    newData.lastName = res.last_name;
    newData.photo = res.avatar;
    newData.email = res.email;
    randomPerson.data = { ...newData };
    return randomPerson;
  }

  res = await data.json();
  res = res.results[0];
  newData.firstName = res.name.first;
  newData.lastName = res.name.last;
  newData.photo = res.picture.large;
  newData.email = res.email;
  randomPerson.data = { ...newData };
  return randomPerson;
}

function randomCategory() {
  let array = [
    "happiness",
    "intelligence",
    "knowledge",
    "success",
    "leadership",
    "experience",
  ];
  return array[Math.floor(Math.random() * array.length)];
}

async function getRandomQuote() {
  let category = randomCategory();
  let url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  let data = await fetch(url, {
    method: "GET",
    headers: { "X-Api-Key": import.meta.env.VITE_QUOTE_API_KEY },
  });
  if (!data.ok)
    return "I am some random quote added here because the api returned an error";
  let res = await data.json();
  return res[0].quote;
}
