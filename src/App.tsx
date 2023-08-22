import React from 'react';
import Header from './components/Header/Header';

import './App.css';
import UserContent from './components/UserContent/UserContent';

function App() {
    return (
        <div className="app">
            <Header />
            <UserContent />
        </div>
    );
}

export default App;
