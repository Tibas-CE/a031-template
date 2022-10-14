import React from "react";
import "./App.css";
import Footer from "./Footer";
import Garagem from "./Garagem";
import Header from "./Header";
import logo from "./img/logo.png";

export default function App() {
  

  return (
    <div className="App">
      <Header/>
      <h1>Aula - Componentes React</h1>
      <Garagem/>
      <Footer/>
    </div>
  );
}
