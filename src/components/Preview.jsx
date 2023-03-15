import image from "../assets/avatar.jpg";
import formatDate from "../../utils/formatDate";

const Previewed = ({ personalInfo, experience, education, TogglePreview }) => {
  const { firstName, lastName, title, photo, address, phone, email, desc } =
    personalInfo;

  return (
    <>
      <div className="mx-auto max-w-[900px]">
        <button
          className="preview mx-auto mb-4 bg-yellow-600 hover:bg-yellow-500 hover:text-gray-900 hover:opacity-[.8]"
          onClick={TogglePreview}
        >
          Continue Editing
        </button>
        <button
          className="print mx-auto mb-4 bg-green-600 hover:bg-green-500 hover:text-gray-900 hover:opacity-[.8]"
          onClick={print}
        >
          Get Document
        </button>
        <div className="shadowed previewed flex min-h-[calc(70rem-8.25rem)] flex-col overflow-hidden rounded-lg bg-white ">
          <header className="header grid h-[8.25rem] gap-2 py-4 px-2 text-gray-300 sm:px-4">
            <h1 className="text-4xl font-bold sm:text-6xl">
              {firstName} {lastName}
            </h1>
            <h2 className="text-xl sm:text-2xl">{title}</h2>
          </header>
          <div className="content-grid grid flex-1">
            <div className="bg-gray-100 px-2 pt-4 text-sm sm:px-4 sm:text-base">
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
            <div className="bg-gray-300 px-2 pt-5 text-sm sm:px-4 sm:text-base">
              <img
                src={photo || image}
                alt={`${firstName || "Person"} ${lastName} image`}
                className="mx-auto aspect-square w-20 rounded-full object-cover sm:w-32 "
              />
              <h3 className="text-center">Personal Details</h3>
              <hr />
              <h4 className="mt-4">Address</h4>
              <p className="break-words">{address}</p>
              <h4 className="mt-4">Phone Number</h4>
              <p>{phone}</p>
              <h4 className="mt-4 ">Email</h4>
              <p className="break-words">{email}</p>
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
