import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { DetailPage } from "./pages/DetailPage";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto mt-10">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/image/:name/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
