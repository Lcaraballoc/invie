import React from 'react';
/* import logo from './logo.svg'; */
import './css/invie.css';
import Portada from "./components/Portada.jsx";
import Guitarras from "./components/Guitarras.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="Invie">
      <Portada/>
      <Guitarras/>
      <Footer/>
    </div>
  );
}

export default App;
