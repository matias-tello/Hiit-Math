import React from "react";
import './servicios.css';
import servicioHiit from './servicio hiit.png'
import { Link } from 'react-router-dom';

function Servicios(){

return(

   
<div className="cont-servicio">

    <h1> NUESTRO SERVICIO </h1>

<img src={servicioHiit} className="img-servicio" />

<p className="descripcion-servicio"> En este servicio vamos a enseñar al cliente, desde los fundamentos básicos de por qué y para que trabajamos de esta forma.

Vamos a realizar reportes y feedback continuos con el cliente para empaparnos de cada caso en concreto, así desarrollar la mejor estrategia para alcanzar los objetivos en la brevedad posible.<br/> <br/>

Garantizamos cambios con nuestros sistema , siempre que el compromiso por parte del cliente sea real .

Estamos a tu disposición para empezar tu cambio. <br/> <br/>

<h3> PLAZAS LIMITADAS </h3>
<span>20 plazas disponibles para poder dar el mejor servicio a cada uno de nuestros clientes</span>  <br/>

Contactanos:  <button className="btn-form-servicio"><Link to="/formulario">Formulario</Link></button>    </p>





<footer>


<img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Paypal.png" className="img-pagos"/>
<button>  <a href="https://www.paypal.me/matiastello17">  Nuestro Paypal </a> </button>

</footer>

</div>


)

}

export default Servicios;