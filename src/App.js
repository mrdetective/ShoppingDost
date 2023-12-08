import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/Login/login";
import "./App.css";
import Landing from "./Pages/Landing/landing";
import Trendingproducts from "./Pages/TrendingProducts/trendingproducts";
import Categorywiseproducts from "./Pages/Categorywiseproducts/Categorywiseproducts";
import ProductDetails from "./Pages/ProductDetails/productDetails";
import Verifyotp from "./Pages/VerifyOtp/verifyotp";
import SearchProduct from "./Pages/Search/searchProduct";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer style={{position: "absolute"}} />
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
          <Route path="/search" element={<SearchProduct />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
