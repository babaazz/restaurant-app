import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className=" mt-24 p-8 w-full">Main container</main>
    </div>
  );
}

export default App;
