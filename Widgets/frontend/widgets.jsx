import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
// import Congrats from './congrats';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Clock />, root);
});
