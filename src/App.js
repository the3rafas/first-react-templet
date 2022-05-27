import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componant/Navbar';
import Home from './componant/Pages/Home';
import Footer from './componant/Footer';
import About from './componant/Pages/About';
import Blog from './componant/Pages/Blog';
import Page from './componant/Pages/Page';
import Contact from './componant/Pages/Contact';



function App() {

  var x = document.querySelectorAll("div");
  x.forEach((e) => {
    e.classList.add("drop");
  })
  return (
    <Router >
      <Navbar />




      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/pages" exact element={<Page />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/contact" element={<Contact />} />




      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
