import Form from "./Form";
import Header from "./Header";
import uniqid from "uniqid";

const emptyInfo = {
  firstName: "",
  lastName: "",
  title: "",
  photo: "",
  address: "",
  phone: "",
  email: "",
  desc: "",
};

const emptyExperience = {
  id: uniqid(),
  position: "",
  company: "",
  city: "",
  startDate: "",
  endDate: "",
};

const emptyEducation = {
  id: uniqid(),
  university: "",
  city: "",
  degree: "",
  subject: "",
  startDate: "",
  endDate: "",
};

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-app bg-gray-300 py-6 px-4">
        <Form />
      </div>
    </div>
  );
}

export default App;
export { emptyExperience, emptyInfo, emptyEducation };
