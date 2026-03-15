import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Project from "./pages/Project";
import Navbar from "./Navigation/Navbar";
import FullScreenNav from "./Navigation/FullScreenNav";
import CustomCursor from "./components/home/common/CustomCursor";

const App = () => {
  return (
    <div>

      {/* Custom Cursor */}
      {/* <CustomCursor /> */}

      {/* Navigation */}
      <Navbar />
      <FullScreenNav />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/project" element={<Project />} />
      </Routes>

    </div>
  );
};

export default App;