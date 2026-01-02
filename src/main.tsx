import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home/page";
import AboutMe from "./About-me/page";
import './index.css'
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

function App() {
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/About-me" element={<AboutMe />} />
            </Routes>
    )
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);