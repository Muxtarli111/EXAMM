import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/HomePage/Homepage";
import Navbar from "./layout/Navbar";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route index element={<Navbar />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
