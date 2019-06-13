import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';
import cheet from "cheet.js"
import logoPortada from "./images/invie.png";
import acustica from "./images/invie-acustica.png"
import clasica from "./images/invie-classic.png"
import {Provider} from "react-redux";
import {createStore} from "redux";


const intialState = {
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
    menu: [
        {
            href: "index.html",
            title: "Home",
        },
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
