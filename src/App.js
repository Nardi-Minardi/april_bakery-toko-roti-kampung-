import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { DataProvider } from './GlobalState';
import Routes from './config/Routes';

const App = () => {
    return (
        <DataProvider>
            <Router>
                <div className="App">
                    <Routes />
                </div>
            </Router>
        </DataProvider>
    )
}

export default App


