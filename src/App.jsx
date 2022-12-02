import Form from "./components/Form";
import Header from "./components/Header";
import uniqid from "uniqid";

const emptyInfo = 
{
  firstName: "",
  lastName: "",
  title: "",
  photo: "",
  address: "",
  phone: "",
  email: "",
  desc: "",
}

const emptyExperience = {
  id: uniqid(),
  university: "",
  degree: "",
  startDate: "",
  endDate: "",
}


function App() {
  return (
    <div className="App">
      <Header />
      <div className="min-h-screen bg-gray-400">
        <Form />
        {/* <Rendered /> */}
      </div>
    </div>
  );
}

export default App;
export { emptyExperience, emptyInfo }
