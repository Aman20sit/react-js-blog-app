import React from "react"; 
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar";
import Articles from "./pages/Article"
import Articleslist from "./pages/Articleslist";
function App() {
  return (
    <Router >
      <Navbar />
      <br />
      <br />
      <br />
    <div className="max-w-screen-md mx-auto pt-20"> 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='article/:name' element={<Articles />} />
            <Route path='articleslist' element={<Articleslist />} />
        </Routes>
        </div>
      </Router>
  );
};   

export default App;
