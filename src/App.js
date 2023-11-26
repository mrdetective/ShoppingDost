import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/Login/login";
import "./App.css";
import Landing from "./Pages/Landing/landing";
import Navbar from "./components/navbar/navbar";
import Trendingproducts from "./Pages/TrendingProducts/trendingproducts";
import Categorywiseproducts from "./Pages/Categorywiseproducts/Categorywiseproducts";
import ProductDetails from "./Pages/ProductDetails/productDetails";
import Verifyotp from "./Pages/VerifyOtp/verifyotp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/trending-products"
            element={<Trendingproducts />}></Route>
          <Route path="/products">
            <Route path="category">
              <Route
                path=":categoryname"
                element={<Categorywiseproducts />}></Route>
            </Route>
            <Route path=":id" element={<ProductDetails />}></Route>
          </Route>
          <Route path="/verify-otp" element={<Verifyotp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
