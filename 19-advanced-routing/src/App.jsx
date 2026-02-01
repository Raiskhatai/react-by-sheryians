import { Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notfound from "./pages/404";
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import Kids from "./pages/Kids";
import Detail from "./pages/Courses-detail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="w-screen bg-gray-950 h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<Detail />} />
        <Route path="/product" element={<Product />}>
          <Route path="/product/man" element={<Man />} />
          <Route path="/product/woman" element={<Woman />} />
          <Route path="/product/kid" element={<Kids />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Navbar2 />
      <Footer />
    </div>
  );
};

export default App;
