import { useState } from "react";
import { emptyExperience, emptyInfo, emptyEducation } from "./App";
import uniqid from "uniqid";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Preview from "./Preview";
import Education from "./Education";

const Form = () => {
  const [personalInfo, setPersonalInfo] = useState({ ...emptyInfo });
  const [experience, setExperience] = useState([{ ...emptyExperience }]);
  const [education, setEducation] = useState([{ ...emptyEducation }]);
  const [isPreviewed, setIsPreviewed] = useState(true);

  // General Styles
  function resetAll(e) {
    e.preventDefault();
    setPersonalInfo(emptyInfo);
    emptyExperience.id = uniqid();
    setExperience([emptyExperience]);
  }

  function TogglePreview() {
    setIsPreviewed(!isPreviewed);
  }

  // Personal Info Function
  function setInfo(obj) {
    setPersonalInfo(obj);
  }

  // Experience functions
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
  function setExp(obj) {
    let experienceCopy = [...experience];
    let experienceList = experienceCopy.filter((exp) => exp.id !== obj.id);
    setExperience([...experienceList, obj]);
  }

  // Education Functions
  function addEducation(e) {
    e.preventDefault();
    let newData = { ...emptyEducation };
    newData.id = uniqid();
    let newEduList = [...education, newData];
    setEducation(newEduList);
  }

  function deleteEducation(id) {
    let educationCopy = [...education];
    let educationList = educationCopy.filter((edu) => edu.id !== id);
    setEducation(educationList);
  }
  function setEdu(obj) {
    let educationCopy = [...education];
    let educationList = educationCopy.filter((edu) => edu.id !== obj.id);
    setEducation([...educationList, obj]);
  }

  return (
    <>
      {!isPreviewed && (
        <form className="form-element mx-auto grid w-full max-w-[900px] gap-8 p-4">
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
            <button className="bg-gray-800" onClick={addEducation}>
              ADD
            </button>
          </div>

          <div className="grid gap-2">
            <button className="bg-gray-800" onClick={TogglePreview}>
              Preview
            </button>
            <button className="bg-gray-800">Load Example</button>
            <button className="bg-gray-800 text-white" onClick={resetAll}>
              Reset
            </button>
          </div>
        </form>
      )}
      {isPreviewed && (
        <Preview
          personalInfo={personalInfo}
          experience={experience}
          TogglePreview={TogglePreview}
        />
      )}
    </>
  );
};

export default Form;
