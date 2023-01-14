// Takes as props the experience data as well as functions to edit and update the data globally
const Experience = ({ data, deleteExperience, setExp }) => {
  // De-structures the education data structure and puts them in variables
  const { id, position, company, city, startDate, endDate } = data;

  // Prevents page reload associated with form submission
  const removeComponent = (e) => {
    e.preventDefault();
    deleteExperience(id);
  };

  return (
    <>
      {/*The input types updates the global data while the delete button removes the particular component from the globals structure entirely  */}
      <input
        value={position}
        type="text"
        placeholder="Position"
        onChange={(e) => setExp({ ...data, position: e.target.value })}
      />

      <input
        value={company}
        type="text"
        placeholder="Company"
        onChange={(e) => setExp({ ...data, company: e.target.value })}
      />
      <input
        value={city}
        type="text"
        placeholder="City"
        onChange={(e) => setExp({ ...data, city: e.target.value })}
      />

      <input
        value={startDate}
        placeholder="Start Date"
        onFocus={(e) => (e.target.type = "date")}
        onChange={(e) => {
          setExp({ ...data, startDate: e.target.value });
        }}
      />

      <input
        value={endDate}
        placeholder="End Date"
        onFocus={(e) => (e.target.type = "date")}
        onChange={(e) => setExp({ ...data, endDate: e.target.value })}
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
export default Experience;
