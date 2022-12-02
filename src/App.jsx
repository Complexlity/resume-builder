import Form from "./components/Form";
import Header from "./components/Header";

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
