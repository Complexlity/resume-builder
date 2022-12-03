const Experience = ({ data, deleteExperience, setExp }) => {
  const { id,position, company, city, startDate, endDate } = data;

  const removeComponent = (e) => {
    e.preventDefault();
    deleteExperience(id);
  };

  return (
    <>
    
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
        className="delete rounded-md bg-red-800 py-2"
      >
        DELETE
      </button>
    </>
  );
};
export default Experience;
