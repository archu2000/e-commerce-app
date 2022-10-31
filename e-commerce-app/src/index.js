import React from 'react';
import ReactDOM from 'react-dom/client';
import "jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
//since index.css is a local file inside same folder, do
import "./index.css"
//import the class in another file
//since class exported default {} aren't required
import NavBar from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));
//for components use self-closing tags
//here rendering NavBar Component
root.render(<NavBar />);
