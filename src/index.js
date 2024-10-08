import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
