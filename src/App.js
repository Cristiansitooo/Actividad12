import React from "react";
import "./styles.css";
import Encabezado from "./Funciones/Encabezado"
import Filtrar from "./Funciones/Filtrar";
import ImagenTitulo from "./Clases/ImagenTitulo";
import Lista from "./Clases/Lista";

export default function App() {
  return (

  
 <div className="App">
<Encabezado/>

<ImagenTitulo/>

<Filtrar/>

<Lista/>

<br />


<hr />
<div align="center" id="creditos">
Copyright @ 2020 | Medellin - Antioquia, Colombia |
<a href="https://github.com/"><img id="imggithub"src="https://image.flaticon.com/icons/png/512/37/37318.png"/></a>|
<a href="https://es-la.facebook.com/"><img id="imgfacebok"src="https://image.flaticon.com/icons/png/512/25/25305.png"/></a>|
<a href="https://twitter.com/?lang=es"><img id="imgtwitter"src="https://image.flaticon.com/icons/png/512/39/39552.png"/></a>
  </div>  
</div>

  );

}
