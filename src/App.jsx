// react framework
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import House from './pages/Houses';
import Error from "./pages/Error";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* path="*" permet de renvoyé vers la page 404 ou vers une page prédéfinit
      si l'utilisateur se "perd" */}
                <Route path="/About" element={<About />} />
                <Route path="/Houses/:id" element={<House />} />
                <Route path="/kasa" element={<Navigate to="/" replace />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />


        </ BrowserRouter>
    )
}

export default App;
