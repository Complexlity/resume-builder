import uniqid from "uniqid";
export const initialState = {
  emptyInfo: {
    firstName: "",
    lastName: "",
    title: "",
    photo: "",
    address: "",
    phone: "",
    email: "",
    desc: "",
  },

  emptyExperience: {
    id: uniqid(),
    position: "",
    company: "",
    city: "",
    startDate: "",
    endDate: "",
  },

  emptyEducation: {
    id: uniqid(),
    university: "",
    city: "",
    degree: "",
    subject: "",
    startDate: "",
    endDate: "",
  },
};
