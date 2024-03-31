import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './Components/home';
import { Ques } from './Components/ques';
import { Quiz } from './Components/quiz';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='quiz' element={<Quiz/>}/>
        <Route path='ques/:id' element= {<Ques/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
