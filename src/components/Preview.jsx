import image from "../assets/avatar.jpg";

function formatDate(date) {
  let arr = date.split("-");
  if (!date) return "";
  return `${arr[1]}/${arr[0]}`;
}

const Previewed = ({ personalInfo, experience, education, TogglePreview }) => {
  const { firstName, lastName, title, photo, address, phone, email, desc } =
    personalInfo;

  return (
    <>
    
    <div className="mx-auto max-w-[900px]">
    <button className="preview bg-yellow-600 hover:bg-yellow-500 hover:text-gray-900 hover:opacity-[.8] mb-4 mx-auto" onClick={TogglePreview}>
          Continue Editing
        </button><button className="print bg-green-600 hover:bg-green-500 hover:text-gray-900 hover:opacity-[.8] mb-4 mx-auto" onClick={print}>
          Get Document
        </button>
      <div className="shadowed previewed flex min-h-[calc(70rem-8.25rem)] flex-col bg-white rounded-lg overflow-hidden ">
        <header className="text-gray-300 header grid h-[8.25rem] gap-2 p-4">
          <h1 className="text-6xl font-bold">
            {firstName} {lastName}
          </h1>
          <h2 className="text-2xl">{title}</h2>
        </header>
        <div className="content-grid grid flex-1">
          <div className="px-6 pt-4 bg-gray-100">
            <h3>Description</h3>
            <hr />
            <p className="break-words italic">{desc} </p>
            <h3>Experience</h3>
            <hr />
            {experience.map((obj) => (
              <Experience key={obj.id} data={obj} />
            ))}
            <h3>Education</h3>
            <hr></hr>
            {education.map((obj) => (
              <Education key={obj.id} data={obj} />
            ))}
          </div>
          <div className="bg-gray-300 px-6 pt-5">
            <img src={photo || image} alt="nothing" className="mx-auto rounded-full aspect-square"  />
            <h3>Personal Details</h3>
            <hr />
            <h4 className="mt-4">Address</h4>
            <p className="break-words">{address}</p>
            <h4 className="mt-4">Phone Number</h4>
            <p>{phone}</p>
            <h4 className="mt-4">Email</h4>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

function Experience({ data }) {
  const { position, company, city, startDate, endDate } = data;
  return (
    <div className="mb-4 flex gap-6">
      <div>
        {formatDate(startDate)}
        <span> - </span> {formatDate(endDate)}
      </div>
      <div>
        <h4>{position}</h4>
        <p className="break-words">
          {company}, {city}
        </p>
      </div>
    </div>
  );
}

function Education({ data }) {
  const { university, city, degree, subject, startDate, endDate } = data;
  return (
    <div className="mb-4 flex gap-6">
      <p className="min-w-fit">
        {formatDate(startDate)}
        <span> - </span> {formatDate(endDate)}{" "}
      </p>
      <div>
        <h4>
          {university}, {city}
        </h4>
        <div className="degree">
          <p>Degree:</p>
          <p className="break-words">{degree}</p>
        </div>
        <div className="degree">
          <p>Subject</p>
          <p className="break-words">{subject}</p>
        </div>
      </div>
    </div>
  );
}

export default Previewed;
