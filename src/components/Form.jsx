const Form = () => {
  return (
    <form className="w-[900px] mx-auto bg-red-300 min-h-screen p-10">
      <div className="personal">
        <h2>Personal Information</h2>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="Title" />
        <label>
          Photo
          <input type="file" name="Picture or ID" />
        </label>
        <input type="text" placeholder="Address" />
        <input type="number" placeholder="Phone number" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Description"></textarea>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        <input type="text" placeholder="University name" />
        <input type="text" placeholder="Degree" />
        <input type="text" placeholder="Start Date" />
        <input type="text" placeholder="End Date" />
        <button className="delete">DELETE</button>
      </div>

      <div className="actions">
        <button>Generate Document</button>
        <button>Load Example</button>
        <button>Reset</button>
      </div>
    </form>
  );
};

export default Form;
