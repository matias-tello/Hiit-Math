import React from "react";
import './formulario.css';
import logoNegro from './logo-hiit-math-negro2.png'



function Formulario(){


return(



<div className="cont-form">

     <nav className="navbar">

          <div className="titulo-img">

               
               <img src={logoNegro} alt="Hiit-Math" className="logo-nav" />

          </div>

          <h4> Completa el formulario y nos pondremos en contacto contigo </h4>

     </nav>


<form action="https://formsubmit.co/tellomatias17@gmail.com" method="POST">
  
     <input type="text" name="nombre" required    placeholder="Nombre" />
     <input type="text" name="apellido" required  placeholder="Apellido" />
     <input type="number" name="edad" required  placeholder="Edad" />
     <input type="number" name="telefono" required placeholder="Telefono" />
     <input type="email" name="gmail" required   placeholder="Gmail" />

       <h2> Queremos Conocerte  </h2>
       <input type="text" name="objetivo" required    placeholder="Que objetivos tienes" />
       <input type="text" name="lesiones" required    placeholder="Lesiones de relevancia" />
       <input type="text" name="trabajo" required    placeholder="Trabajo activo o pasivo" />
       <input type="text" name="vida" required    placeholder="Tienes vida intensa" />
       <input type="text" name="actividad" required    placeholder="Que actividad realizas" />
       <input type="text" name="quebuscas" required    placeholder="Que buscas de un servicios de personal training" />

     
       <h2>Dias de entrenamiento semanal</h2>

       <input type="text" name="dias" required placeholder="Cuantos dias estas dispuesto a entrenar?"/>

       <h2> Lugar de entrenamiento </h2>

       <input type="text" name="lugar" required placeholder="Entrenas en un centro deportivo?"/>




    
  

     <input type="submit" name="enviar"/>



</form>








</div>



)

}


export default Formulario;