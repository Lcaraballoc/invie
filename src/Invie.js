import React from 'react';
/* import logo from './logo.svg'; */
import './css/invie.css';
import Portada from "./components/Portada.jsx";
import Guitarras from "./components/Guitarras.jsx";
import Footer from "./components/Footer.jsx";


/* const data = {
  menu: [
    {
        href: "index.html",
        title: "Home",
    },
    {
        href: "#guitarras",
        title: "Guitarras",
    },
    {
        href: "precio.html",
        title: "Precios",
    },
  ],
  logoPortada : logoPortada,
  
  guitarras: [
    {
        image: acustica,
        alt: "Guitarra Invie Acustica",
        name: "Invie Acustica",
        features: [
            "Estilo vingate",
            "Madera Pura",
            "Incluye estuche invisible de aluminio"
        ]
    },
    {
      image: clasica,
      alt: "Guitarra Invie Clasica",
      name: "Invie Clasica",
      features: [
          "Estilo vingate",
          "Liviana",
          "Inicia tu camino como Rockstar"
      ]
  }
]
} */



function App() {
  return (
    <div className="Invie">
      {/* <Portada menu={data.menu} logo={data.logoPortada}/> */}
      <Portada/>
      {/* <Guitarras guitarras={data.guitarras}/> */}
      <Guitarras/>
      <Footer/>
    </div>
  );
}

export default App;
