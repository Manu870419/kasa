// react framework
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import StyledNavbar from './components/StyledNavbar';

import "./main.css";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return(
        <div>
            <div className='App'>
                <Router>
                    <StyledNavbar />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="about" element={ <About />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default App;
