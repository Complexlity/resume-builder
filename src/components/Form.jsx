import { useState } from "react";
import { emptyExperience, emptyInfo } from "../App";
import uniqid from "uniqid";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Preview from "./Preview";

const Form = () => {
  const [personalInfo, setPersonalInfo] = useState(emptyInfo);
  const [experience, setExperience] = useState([{ ...emptyExperience }]);
  const [isPreviewed, setIsPreviewed] = useState(false)

  function addExperience(e) {
    e.preventDefault();
    let newData = { ...emptyExperience };
    newData.id = uniqid();
    let newExpList = [...experience, newData];
    setExperience(newExpList);
  }

  function deleteExperience(id) {
    let experienceCopy = [...experience];
    let experienceList = experienceCopy.filter((exp) => exp.id !== id);
    if (experienceList.length) setExperience(experienceList);
    else {
      alert("Must have at least one experience section");
      return;
    }
  }

  function resetAll(e) {
    e.preventDefault();
    setPersonalInfo(emptyInfo);
    emptyExperience.id = uniqid();
    setExperience([emptyExperience]);
  }

  function setInfo(obj) {
    setPersonalInfo(obj);
  }

  function setExp(obj) {
    let experienceCopy = [...experience];
    let experienceList = experienceCopy.filter((exp) => exp.id !== obj.id);
    setExperience([...experienceList, obj])
  }

  function TogglePreview(){
    setIsPreviewed(!isPreviewed)
  }

  return (
    <>
    {!isPreviewed && <form className="form-element mx-auto grid w-full max-w-[900px] gap-8 p-4">
      <div className="personal grid gap-2">
        <h2>Personal Information</h2>
        <PersonalInfo data={personalInfo} setInfo={setInfo} />
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
        <button className="bg-gray-800" onClick={addExperience}>
          ADD
        </button>
      </div>

      <div className="grid gap-2">
        <button className="bg-gray-800" onClick={TogglePreview}>Preview</button>
        <button className="bg-gray-800">Load Example</button>
        <button className="bg-gray-800 text-white" onClick={resetAll}>
          Reset
        </button>
      </div>
    </form>
    }
    {isPreviewed && <Preview personalInfo={personalInfo} experience={experience} TogglePreview={TogglePreview} />}
    </>
  );
};

export default Form;
