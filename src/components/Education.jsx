// Takes as props the education data as well as functions to edit and update the data globally
const Education = ({ data, deleteEducation, setEdu }) => {
  // De-structures the education data structure and puts them in variables
  const { id, university, city, degree, subject, startDate, endDate } = data;

  // Prevents page reload associated with form submission
  const removeComponent = (e) => {
    e.preventDefault();
    deleteEducation(id);
  };

  return (
    <>
      {/*The input types updates the global data while the delete button removes the particular component from the globals structure entirely  */}
      <input
        value={university}
        type="text"
        placeholder="University name"
        onChange={(e) => setEdu({ ...data, university: e.target.value })}
      />
      <input
        value={city}
        type="text"
        placeholder="City"
        onChange={(e) => setEdu({ ...data, city: e.target.value })}
      />
      <input
        value={degree}
        type="text"
        placeholder="Degree"
        onChange={(e) => setEdu({ ...data, degree: e.target.value })}
      />

      <input
        value={subject}
        type="text"
        placeholder="Subject (Sciences, Commerce, Politics,...)"
        onChange={(e) => setEdu({ ...data, subject: e.target.value })}
      />

      <input
        value={startDate}
        placeholder="Start Date"
        onFocus={(e) => (e.target.type = "date")}
        onChange={(e) => {
          setEdu({ ...data, startDate: e.target.value });
        }}
      />

      <input
        value={endDate}
        placeholder="End Date"
        onFocus={(e) => (e.target.type = "date")}
        onChange={(e) => setEdu({ ...data, endDate: e.target.value })}
      />
      <button
        onClick={removeComponent}
        className="delete rounded-md bg-red-700 py-2 hover:bg-red-800 focus:bg-red-800"
      >
        DELETE
      </button>
    </>
  );
};
export default Education;
