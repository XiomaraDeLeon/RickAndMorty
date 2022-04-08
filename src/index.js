import React from 'react';
import ReactDOM from 'react-dom';
import BotonPersonajes from './components/boton';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonajesList from "./components/listPersonajes"

ReactDOM.render(
  <React.StrictMode>
    <BotonPersonajes />
    <PersonajesList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
