import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/Login/login";
import "./App.css";
import Landing from "./Pages/Landing/landing";
import Navbar from "./components/navbar/navbar";
import Trendingproducts from "./Pages/TrendingProducts/trendingproducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/trending-products"
            element={<Trendingproducts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
