import { useState } from "react";
import { emptyExperience, emptyInfo } from "../App";
import uniqid from "uniqid";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

const Form = () => {
  const [personalInfo, setPersonalInfo] = useState(emptyInfo);
  const [experience, setExperience] = useState([{...emptyExperience}]);

  function addExperience(e) {
    e.preventDefault();
    let newData = {...emptyExperience}
    newData.id = uniqid()
    let newExpList = [...experience, newData];
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

  function resetAll(e){
    e.preventDefault()
    setPersonalInfo(emptyInfo)
    emptyExperience.id = uniqid()
    setExperience([emptyExperience])
  }

  function setInfo(obj){
    setPersonalInfo(obj)  
  }

  return (
    <form className="form-element mx-auto grid w-full max-w-[900px] gap-8 p-4">
      <div className="personal grid gap-2">
        <h2>Personal Information</h2>
        <PersonalInfo data={personalInfo} setInfo={setInfo} />
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
        <button className="bg-gray-800 text-white" onClick={resetAll}>Reset</button>
      </div>
    </form>
  );
};

export default Form;
