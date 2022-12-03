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
  const [isPreviewed, setIsPreviewed] = useState(false);

  // General Styles
  function resetAll(e) {
    e.preventDefault();
    if(confirm('Are you sure you want to clear all information?')){
    setPersonalInfo(emptyInfo);
    emptyExperience.id = uniqid();
    setExperience([emptyExperience]);
    emptyEducation.id = uniqid()
    setEducation([emptyEducation])
    setTimeout(() => alert('Reset Success'), 500)
  }
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
    setExperience(experienceList);
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

  function showImage(e) {
    let file = URL.createObjectURL(e.target.files[0]);
    const alerted = personalInfo.photo
      ? "Image Update Succesful"
      : "Image Added";
    let info = { ...personalInfo, photo: file };
    setInfo(info);
    alert(alerted);
  }

  return (
    <>
      {!isPreviewed && (
        <form className="form-element mx-auto grid w-full max-w-[800px] gap-8 rounded-md bg-gray-200 p-4 shadow-sm shadow-slate-200">
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
            <button className="bg-green-600" onClick={addExperience}>
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
            <button className="bg-green-600" onClick={addEducation}>
              ADD
            </button>
          </div>

          <div className="grid gap-2">
            <button className="bg-yellow-600 hover:bg-yellow-500 hover:text-gray-900 hover:opacity-[.8]" onClick={TogglePreview}>
              Preview
            </button>

            {/* 
            // Todo: Fetch random person from randompersongenerator api
            <button className="bg-gray-800">Load Example</button> */}
            <button className="bg-red-600 hover:bg-red-500 text-white" onClick={resetAll}>
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
