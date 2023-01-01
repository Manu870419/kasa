// react framework
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import "./main.css";

import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from './pages/Singleproduct';
import PageNotFound from "./pages/PageNotFound";

import StyledNavbar from './components/StyledNavbar';
import Footer from './components/Footer';

function App() {
    return(
        <div>
            <div className='App'>
                <Router>
                    <StyledNavbar />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="about" element={ <About />} />
                        <Route path="products/:productId" element={<SingleProduct />} />
                        <Route path="/kasa" element={<Navigate to="/" replace />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </div>
    )
}

export default App;
