import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/Login/login";
import "./App.css";
import Landing from "./Pages/Landing/landing";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/" element={<Landing />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
