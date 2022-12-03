const Education = ({ data, deleteEducation, setEdu }) => {
  const { id, university, city, degree, subject, startDate, endDate } = data;

  const removeComponent = (e) => {
    e.preventDefault();
    deleteEducation(id);
  };

  return (
    <>
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
        className="delete rounded-md bg-red-800 py-2"
      >
        DELETE
      </button>
    </>
  );
};
export default Education;
