import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home/Home";
import AboutMe from "./About-me/page";
import './index.css'
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import LandingPage from "./e-commerce/Landing-Page";
import HomeIcon from './assets/home.png'

function App() {
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/About-me" element={<AboutMe />} />
                <Route path="/E-Commerce" element={<LandingPage />} />
            </Routes>
    )
}

function DashboardButton() {
    return (
        <a href="/"><img src={HomeIcon} className="dashboard-button" alt="Home Icon" /></a>
    )
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <DashboardButton />
            <App />
        </BrowserRouter>
    </StrictMode>
);