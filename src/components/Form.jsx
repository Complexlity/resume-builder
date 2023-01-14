import { useState } from "react";
import { emptyExperience, emptyInfo, emptyEducation } from "./App";
import uniqid from "uniqid";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Preview from "./Preview";
import Education from "./Education";

// This is the 'main' component where all the components get their state data and functions from
const Form = () => {
  // Initializes all the used state data
  const [personalInfo, setPersonalInfo] = useState({ ...emptyInfo });
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [isPreviewed, setIsPreviewed] = useState(false);

  /*-----------------------
   General functions
  -----------------------*/

  // This clears all the information(and image) entered in the form
  function resetAll(e) {
    e.preventDefault();
    if (confirm("Are you sure you want to clear all information?")) {
      setPersonalInfo(emptyInfo);
      emptyExperience.id = uniqid();
      setExperience([]);
      emptyEducation.id = uniqid();
      setEducation([]);
      setTimeout(() => alert("Reset Success"), 500);
    }
  }

  // This solves the bug where the preview section does not show from the top when the component mounts
  function TogglePreview() {
    setIsPreviewed(!isPreviewed);
    window.scrollTo(0, 0);
  }

  //-------------------------------------------//

  /*-----------------------
   Personal Info functions
  -----------------------*/

  // This only shortens the function to update personal infomation section
  function setInfo(obj) {
    setPersonalInfo(obj);
  }

  // For Image Preview
  // Creates a temporary url object to take the image and display it in the same document
  function showImage(e) {
    let file = URL.createObjectURL(e.target.files[0]);
    const alerted = personalInfo.photo
      ? "Image Update Succesful"
      : "Image Added";
    let info = { ...personalInfo, photo: file };
    setInfo(info);
    alert(alerted);
  }

  //-------------------------------------------//

  /*-----------------------
   Experience Section Functions
  -----------------------*/

  // Function to add a new form group to the experience section
  function addExperience(e) {
    e.preventDefault();
    let newData = { ...emptyExperience };
    newData.id = uniqid();
    let newExpList = [...experience, newData];
    setExperience(newExpList);
  }

  // Function to remove a particular form group from the experience section
  function deleteExperience(id) {
    let experienceCopy = [...experience];
    let experienceList = experienceCopy.filter((exp) => exp.id !== id);
    setExperience(experienceList);
  }

  // Function to update the experience section data
  function setExp(obj) {
    let experienceCopy = [...experience];
    let experienceList = experienceCopy.filter((exp) => exp.id !== obj.id);
    setExperience([...experienceList, obj]);
  }

  //-------------------------------------------//

  /*-----------------------
   Education Section Functions
  -----------------------*/

  // Function to add a new form group to the education section
  function addEducation(e) {
    e.preventDefault();
    let newData = { ...emptyEducation };
    newData.id = uniqid();
    let newEduList = [...education, newData];
    setEducation(newEduList);
  }

  // Function to remove a particular form group from the education section
  function deleteEducation(id) {
    let educationCopy = [...education];
    let educationList = educationCopy.filter((edu) => edu.id !== id);
    setEducation(educationList);
  }

  // Function to update the experience section data
  function setEdu(obj) {
    let educationCopy = [...education];
    let educationList = educationCopy.filter((edu) => edu.id !== obj.id);
    setEducation([...educationList, obj]);
  }

  //-------------------------------------------//

  /*-----------------------
   API functions
  -----------------------*/

  // Function to display circular progress when data fetch is on-going
  // More info about how to add in your code here: https://loading.io/ and https://loading.io/button/
  function toggleLoader(e, adding = true) {
    if (adding) {
      e.target.style.opacity = "0.9";
      e.target.innerText = "";
      e.target.innerHTML = `<span className="loader ld-ext-right running" style="display:flex; align-items:center;">Fetching <span class="ld ld-ring ld-spin ml-2"></span> </span>`;
    } else {
      e.target.innerHTML = "Load Example";
      e.target.style.opacity = "1";
    }
  }

  // Function to load a random user
  async function loadRandomPerson(e) {
    e.preventDefault();
    toggleLoader(e); // Adds the loader
    let data;

    // Loads the first random person api
    try {
      data = await fetch("https://random-data-api.com/api/users/random_user");
    } catch (error) {
      alert("Could not connect please try again");
      return;
    }
    if (!data.ok) {
      alert("An error occured");
      return;
    }
    let res = await data.json();

    let newData = { ...emptyInfo };

    let adr = res.address;
    newData.title = res.employment.title;
    newData.address = `${adr.street_address}, ${adr.state} ${adr.country}`;
    let phoneNumber = res.phone_number;
    phoneNumber = phoneNumber.slice(0, phoneNumber.length - 6);
    newData.phone = phoneNumber;

    newData.desc = await getRandomQuote();

    // Fetches the second person api.
    //The reason for having two is, the first one does not have a cool avatar and the second one does not have an employment title.
    //And it is important that the avatar and the name has the same gender. As well as having an email associated with the name

    data = await fetch("https://randomuser.me/api/");
    if (!data.ok) {
      newData.firstName = res.first_name;
      newData.lastName = res.last_name;
      newData.photo = res.avatar;
      newData.email = res.email;
      return;
    }

    res = await data.json();
    res = res.results[0];
    newData.firstName = res.name.first;
    newData.lastName = res.name.last;
    newData.photo = res.picture.large;
    newData.email = res.email;
    setInfo(newData);
    setTimeout(() => toggleLoader(e, false), 500); // Removes the loader
  }

  // Uses the result of this random picking to query the random quote api
  function getRandomCategory() {
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

  // Function to fetch a cool quote which is added as the description of the previewed section
  async function getRandomQuote() {
    let category = getRandomCategory();
    let defaultQuote =
      "I am some random quote added here because the api returned an error";
    let url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    let data;
    try {
      data = await fetch(url, {
        method: "GET",
        headers: { "X-Api-Key": import.meta.env.VITE_QUOTE_API_KEY },
      });
    } catch (error) {
      return defaultQuote;
    }
    if (!data.ok) return defaultQuote;
    let res = await data.json();
    return res[0].quote;
  }

  return (
    <>
      {/* Conditional rendering here to toggle between the form and the preview section */}

      {!isPreviewed && (
        <form className="form-element shadowed mx-auto grid w-full max-w-[800px] gap-8 rounded-md bg-gray-200 p-6 ">
          <div className="personal grid gap-2">
            <h2>Personal Information</h2>
            <PersonalInfo
              data={personalInfo}
              setInfo={setInfo}
              showImage={showImage}
            />
          </div>

          <div className="experience grid gap-2">
            <h2>Experience</h2>
            <div className="grid gap-2">
              {experience.map((obj) => (
                <Experience
                  key={obj.id}
                  data={obj}
                  deleteExperience={deleteExperience}
                  setExp={setExp}
                />
              ))}
            </div>
            <button
              className="bg-green-600 hover:bg-green-500 focus:bg-green-500"
              onClick={addExperience}
            >
              ADD
            </button>
          </div>

          <div className="education grid gap-2">
            <h2>Education</h2>
            <div className="grid gap-2">
              {education.map((obj) => (
                <Education
                  key={obj.id}
                  data={obj}
                  deleteEducation={deleteEducation}
                  setEdu={setEdu}
                />
              ))}
            </div>
            <button
              className="bg-green-600 hover:bg-green-500 focus:bg-green-500"
              onClick={addEducation}
            >
              ADD
            </button>
          </div>

          <div className="grid gap-2">
            <button
              className="bg-yellow-600 hover:bg-yellow-500 hover:text-gray-900 hover:opacity-[.8]"
              onClick={TogglePreview}
            >
              Preview
            </button>
            <button
              className="flex items-center justify-center bg-blue-800 text-gray-200 hover:bg-blue-600 hover:text-gray-900 focus:bg-blue-700"
              onClick={loadRandomPerson}
            >
              Load Example
            </button>
            <button
              className="bg-red-600 text-white hover:bg-red-500"
              onClick={resetAll}
            >
              Reset
            </button>
          </div>
        </form>
      )}
      {isPreviewed && (
        <Preview
          personalInfo={personalInfo}
          experience={experience}
          education={education}
          TogglePreview={TogglePreview}
        />
      )}
    </>
  );
};

export default Form;
