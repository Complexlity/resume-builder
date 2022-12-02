const Experience = ({ data, deleteExperience, setExp }) => {
  const { id, university, degree, startDate, endDate } = data;

  const removeComponent = (e) => {
    e.preventDefault();
    deleteExperience(id);
  };

  return (
    <>
      <input
        type="text"
        placeholder="University name"
        onChange={(e) => setExp({ ...data, university: e.target.value })}
      />
      <input
        type="text"
        placeholder="Degree"
        onChange={(e) => setExp({ ...data, degree: e.target.value })}
      />

      <input
        placeholder="Start Date"
        onFocus={(e) => (e.target.type = "date")}
        onChange={(e) => {
          console.log(e.target.value);
          setExp({ ...data, startDate: e.target.value });
        }}
      />

      <input
        placeholder="End Date"
        onFocus={(e) => (e.target.type = "date")}
        onChange={(e) => setExp({ ...data, endDate: e.target.value })}
      />
      <button
        onClick={removeComponent}
        className="delete rounded-md bg-gray-800 py-2"
      >
        DELETE
      </button>
    </>
  );
};
export default Experience;
