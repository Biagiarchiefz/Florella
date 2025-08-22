import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">

      <div className="min-h-[70hvh">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
