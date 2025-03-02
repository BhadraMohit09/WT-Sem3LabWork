import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS styles
import About from './Components/About'; // Import About component
import Contact from './Components/Contact'; // Import Contact component
import Layout from './Components/Layout'; // Import Layout component
import reportWebVitals from './reportWebVitals'; // Import performance reporting function
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import routing components
import GetAll from './Components/GetAll'; // Import component to fetch all data
import GetById from './Components/GetById'; // Import component to fetch data by ID
import Insert from './Components/Insert'; // Import component to insert new data
import Update from './Components/Update'; // Import component to update existing data
  
// Create a root ReactDOM element and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Enables routing in the app */}
    <Routes>
      {/* Layout component serves as a wrapper for nested routes */}
      <Route path='/' element={<Layout />}>
        <Route path='/about' element={<About />}/> {/* Route for About page */}
        <Route path='/contact' element={<Contact />} /> {/* Route for Contact page */}
        <Route path='/home' element={<GetAll />}/> {/* Route to display all records */}
        <Route path='/home/:id' element={<GetById />}/> {/* Route to fetch record by ID */}
        <Route path='/home/update/:id' element={<Update />} /> {/* Route to update record by ID */}
        <Route path='/home/add' element={<Insert />}/> {/* Route to insert a new record */}
      </Route>
    </Routes>
  </BrowserRouter>
);

// Measure and report performance metrics of the app
// Pass a function to log results (e.g., reportWebVitals(console.log))
// or send to an analytics endpoint: https://bit.ly/CRA-vitals
reportWebVitals();
