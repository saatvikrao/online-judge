import React, { useState } from 'react';
import './App.css';  

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"; 

// components
import Doubts from "./pages/Doubts"; 
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <main className="py-1">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/doubts" element={<Doubts/>} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;

// to do: 
// choosing language changes the syntax hihglighting 
