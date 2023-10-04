import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Header from './components/Header';
import HotelList from './components/HotelList';
import PropertyPage from './components/PropertyPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HotelList />} />
        <Route path="/property/:id" element={<PropertyPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
