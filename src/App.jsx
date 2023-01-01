import React from 'react';
import { BrowserRouter as Router,  } from 'react-router-dom';
import StyledNavbar from './components/StyledNavbar';

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
