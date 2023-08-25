import React from 'react';
import Header from './components/Header/Header';

import './App.css';
import UserContent from './components/UserContent/UserContent';
import AppProvider from './context/AppProvider';

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
