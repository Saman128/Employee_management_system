import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome, Admin, Employee } from './Login/signin';
import './App.css';
import './Login/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;