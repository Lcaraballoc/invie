import React from 'react'
import ReactDOM from 'react-dom'
import Invie from './Invie.js'
import "./css/invie.css"
import "./css/animation.css"
import cheet from "cheet.js"
import logoPortada from "./images/invie.png"
import logoPlatzi from "./images/platzi.png"
import acustica from "./images/invie-acustica.png"
import clasica from "./images/invie-classic.png"
import easterA from "./images/easter-a.png"
import easterB from "./images/easter-b.png"
import {Provider} from "react-redux"
import {createStore} from "redux"
import * as serviceWorker from './serviceWorker'


const intialState = {
    isAnimated: false,

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
      /* {
          href: "hola.html",
          title: "Don't click me",
      } */
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
  }

function reducer(state, action){
    switch(action.type){
        case "UPDATE_PROPS":{
            const newProps= action.payload.props;
            return{...state, ...newProps}
        }
        default:
            return state
    }
}

const store = createStore(reducer, intialState);

const easter = {
    isAnimated: "is-animated",
    menu: [
        
      ],
      logoPortada : logoPlatzi,
      guitarras: [
        {
            image: easterA,
            alt: "Guitarra Padre de Familia",
            name: "Invie Familiar",
            features: [
                "Lista para copiar a los Simpsons",
                "Aire Puro",
                "Chistes Malos"
            ]
        },
        {
          image: easterB,
          alt: "Guitarra Invie Clasica",
          name: "Invie Clasica",
          features: [
              "Estilo vingate",
              "Liviana",
              "Inicia tu camino como Rockstar"
          ]
      }
    ]
}

cheet("i n v i e", ()=> {
    store.dispatch({
        type: "UPDATE_PROPS",
        payload: {
            props: easter
        }
    });
    /* console.log("Lo lograste, descrubiste el easter egg"); */
  })
  
  cheet("g o b a c k", ()=>{
    store.dispatch({
        type: "UPDATE_PROPS",
        payload: {
            props: intialState,
        }
    });
    /* console.log("regresaste a tu estado inicial"); */
  })

  
ReactDOM.render(
    <Provider store={store}>
        <Invie />
    </Provider>,
     document.getElementById('root')
     );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
