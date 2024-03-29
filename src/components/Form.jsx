import { useState } from "react";
import uniqid from "uniqid";
import { initialState } from "../../utils/initialState";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Preview from "./Preview";
import Education from "./Education";
import getRandomPerson from "../../utils/getRandomPerson";

const Form = () => {
  const { emptyExperience, emptyInfo, emptyEducation } = initialState;
  const [personalInfo, setPersonalInfo] = useState({ ...emptyInfo });
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [isPreviewed, setIsPreviewed] = useState(false);

  // General Functions
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

  function TogglePreview() {
    setIsPreviewed(!isPreviewed);
    window.scrollTo(0, 0);
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

  // For Image Preview
  function showImage(e) {
    let file = URL.createObjectURL(e.target.files[0]);
    const alerted = personalInfo.photo
      ? "Image Update Succesful"
      : "Image Added";
    let info = { ...personalInfo, photo: file };
    setInfo(info);
    alert(alerted);
  }

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

  // Get Random Person
  async function loadRandomPerson(e) {
    e.preventDefault();
    toggleLoader(e);
    const { data, error } = await getRandomPerson();
    if (error) {
      alert(error.message);
    } else setInfo(data);
    setTimeout(() => toggleLoader(e, false), 500);
  }

  return (
    <>
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
