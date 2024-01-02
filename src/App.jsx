import "./styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
//import { useState } from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
