import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Header from './Header'; // Import your Header component
import Products from './Products'; // Import your Products component
// Import other components
import Card from './Card'; // Import your Card component

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Card/>} /> {/* Define your Home component */}
          <Route path="/Products" element={<Products/>} />
          {/* Define other routes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;