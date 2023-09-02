import React from 'react';
import Header from './components/Header/Header';

import './App.css';
import AppProvider from './context/AppProvider';

import UserContent from './components/UserContent/UserContent';

function App() {
    return (
        <AppProvider>
            <div className="app">
                <Header />
                <UserContent />
            </div>
        </AppProvider>
    );
}

export default App;
