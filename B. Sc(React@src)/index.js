import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetAll from './Components/GetAll';
import GetById from './Components/GetById';
import Insert from './Components/Insert';
import Update from './Components/Update';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<GetAll />}/>
        <Route path='/home/:id' element={<GetById />}/>
        <Route path='/home/update/:id' element={<Update />} />
        <Route path='/home/add' element={<Insert />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
