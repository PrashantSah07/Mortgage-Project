import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from "./App";
import About from "./About";
import Start from './Start';
import Calculator from './Calculator'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/start" element={<Start />} />
    </Routes>
  </BrowserRouter>
)
