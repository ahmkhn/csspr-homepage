import './App.css'
import CSSPRHomepagePrototype from "./components/CSSPRHomepagePrototype";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CSSPRAboutPage from './components/CSSPRAboutPage';

function App() {
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<CSSPRHomepagePrototype />} />
        <Route path="/about" element={<CSSPRAboutPage />} />
      </Routes>
    </BrowserRouter>)
}

export default App
