import React from 'react';
//inorder to render react element into the reactDOM
import ReactDOM from 'react-dom/client';
//to import bootstrap and make it fully work
import "jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

//btn btn-danger is a predefined css class comes from bootstrap.css
var element = <button class="btn btn-info">Hello People!</button>
//element = Hello World!
// document.getElementByID("root") will select element that renders
//inoder to select the element by ID, use root since already predefined in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
// root.render(<h1>Welcome to my React App!</h1>)  //either hard-code or call the value

console.log(element)