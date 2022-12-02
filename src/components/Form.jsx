import Experience from "./Experience";
import { useState } from "react";
import uniqid from "uniqid";

const Form = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    photo: "",
    address: "",
    phone: "",
    email: "",
    desc: "",
  });
  const [experience, setExperience] = useState([
    {
      id: uniqid(),
      university: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ]);

  function addExperience(e) {
    e.preventDefault();
    let newObj = {
      id: uniqid(),
      university: "",
      degree: "",
      startDate: "",
      endDate: "",
    };
    let newExpList = [...experience, newObj];
    setExperience(newExpList);
  }

  function deleteExperience(id) {
    let experienceCopy = [...experience]
    let experienceList = experienceCopy.filter((exp) => exp.id !== id);
    if(experienceList.length) setExperience(experienceList)
    else {
      alert('Must have at least one experience section')
      return
    }
  }

  return (
    <form className="form-element mx-auto grid w-full max-w-[900px] gap-8 p-4">
      <div className="personal grid gap-2">
        <h2>Personal Information</h2>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="Title" />
        <label className="rounded-md bg-gray-200 px-2 py-2 hover:bg-white">
          Photo
          <input className="hidden" type="file" name="Picture or ID" />
        </label>
        <input type="text" placeholder="Address" />
        <input type="number" placeholder="Phone number" />
        <input type="email" placeholder="Email" />
        <textarea
          className="resize-none px-4"
          placeholder="Description"
        ></textarea>
      </div>
      <div className="experience grid gap-2">
        <h2>Experience</h2>
        <div className="grid gap-2">
        {experience.map(obj => <Experience key={obj.id} id={obj.id} deleteExperience={deleteExperience} />)}
        </div>
        <button className="add bg-gray-800" onClick={addExperience}>
          ADD
        </button>
      </div>

      <div className="actions grid gap-2">
        <button className="bg-gray-800">Generate</button>
        <button className="bg-gray-800">Load Example</button>
        <button className="bg-gray-800 text-white">Reset</button>
      </div>
    </form>
  );
};

export default Form;
