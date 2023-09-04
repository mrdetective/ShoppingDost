import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./components/login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
