// react framework
import React from 'react';
import { BrowserRouter as Router,  } from 'react-router-dom';
import StyledNavbar from './components/StyledNavbar';

import Home from "./pages/Home";

function App() {
    return(
        <div>
            <div className='App'>
                <Router>
                    <StyledNavbar />
                </Router>
            </div>
        </div>
    )
}

export default App;
