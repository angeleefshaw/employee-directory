import Employee from "./components/employee";
import Header from "./components/Header"


function App() {
  return (
    <div className="App">
      <Header />
      <Employee unique ={"foobar"} />  
    </div>
  );
}

export default App;
