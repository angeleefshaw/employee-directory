import Employee from "./components/employee";
import Header from "./components/Header"


function App() {
  return (
    <div className="App">
      <Header />
      <Employee unique ={"foobar"} />
      <Employee unique = {"foo"}/>
      <Employee unique = {"gale"} />
      <Employee unique = {"boot"} />
      <Employee unique = {"wham"} />
     
    </div>
  );
}

export default App;
