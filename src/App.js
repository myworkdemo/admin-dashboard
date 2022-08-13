import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import SaleProduct from "./components/sale-product/SaleProduct";
import AllRecords from "./components/sale-product/AllRecords";

function App() {
  return (
    <div className="App">
      <Sidebar >

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sale-product" element={<SaleProduct />}></Route>
        <Route path="/all-sale-products" element={<AllRecords />}></Route>
      </Routes>

      </Sidebar>
    </div>
  );
}

export default App;
