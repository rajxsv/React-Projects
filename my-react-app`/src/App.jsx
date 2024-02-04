import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './components/Main';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element = { <Main/>} />
      <Route path='/one' element = {<Page1/>} />
      <Route path='/two' element = {<Page2/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App
