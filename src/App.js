import "./App.css";
import Home from "./Pages/Home";
import Jokes from "./Pages/Jokes";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jokes" element={<Jokes />}></Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
