import Form from "./Form";
import Header from "./Header";

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
