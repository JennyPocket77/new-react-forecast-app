import React from "react";
import Weather from "./Weather.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">

<Weather defaultCity="New York" />

 <footer>This project was coded by <a href="https://objective-cori-203d1a.netlify.app/index.html" target="_blank" rel="noreferrer">
 Jennifer Ann Gonzalez</a> and is open-sourced on <a href="https://github.com/JennyPocket77/new-react-forecast-app" target="_blank" rel="noreferrer"> GitHub</a> and hosted on <a href="https://storied-nasturtium-8926c9.netlify.app/"> Netlify 
 </a>
 </footer>
    </div>
    </div>
  );
}
