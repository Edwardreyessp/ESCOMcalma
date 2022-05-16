import "./App.scss";
import Navbar from "./Components/Navbar";
import Inicio from "./routes/Inicio";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Inicio />
    </main>
  );
}

export default App;
