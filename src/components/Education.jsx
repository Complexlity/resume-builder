const Education = ({ data, deleteEducation, setEdu }) => {
  const { id, universit, city, degree, subject, startDate, endDate } = data;

  const removeComponent = (e) => {
    e.preventDefault();
    deleteEducation(id);
  };

  return (
    <>
      <input
        type="text"
        placeholder="University name"
        onChange={(e) => setEdu({ ...data, university: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        onChange={(e) => setEdu({ ...data, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="Degree"
        onChange={(e) => setEdu({ ...data, degree: e.target.value })}
      />

      <input
        type="text"
        placeholder="Subject"
        onChange={(e) => setEdu({ ...data, degree: e.target.value })}
      />

      <input
        placeholder="Start Date"
        onFocus={(e) => (e.target.type = "date")}
        onChange={(e) => {
          console.log(e.target.value);
          setEdu({ ...data, startDate: e.target.value });
        }}
      />

      <input
        placeholder="End Date"
        onFocus={(e) => (e.target.type = "date")}
        onChange={(e) => setEdu({ ...data, endDate: e.target.value })}
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
export default Education;
