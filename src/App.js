import "./App.css";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header/Header";

function App() {
  return (
    <AnimatePresence>
      <div className="App">
        <Header />
      </div>
    </AnimatePresence>
  );
}

export default App;
