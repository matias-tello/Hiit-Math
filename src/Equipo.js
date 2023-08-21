import React from "react";
import './equipo.css';
import imgJose from './img-jose.png';
import yoblanconegro from './yoblancoynegro.jpeg';

function Equipo(){

return(

   


<div>


 <h1 className="titulo-equipo"> ESTE ES NUESTRO EQUIPO INICIAL </h1>


    <div className="presentacion-jose">

    <h1>  Jose Costas </h1>
    <h4>  CEO Hiit-Math </h4>
    <img src={imgJose} className="img-jose" />
    <p> 
        
        Mi nombre es José Costas, creo este nuevo proyecto hiit Math , con la intención de exportar la experiencia adquirida en mis mas de 10 años como preparador físico en clases presenciales en Pontevedra ciudad (España)

    Especialista en :

    Pilates.

    Entrenamiento funcional.

    Calistenia

    Streetlifitng.

    En todas estas especialidades dispongo de los títulos y certificados por sus respectivas federaciones deportivas.

    Soy juez nacional en la disciplina de streetlifitng.

    Pero lo mas importante, me avalan 10 años de experiencia tratando con todo tipo de clientes , de cualquier edad y condición física, he trabajado con clientes de todos los niveles y he conseguido mejorar su calidad de vida y condición física.

    Sus reseñas en Google en mi centro deportivo, avalan y respaldan mi trabajo, mejor que cualquier presentación.  Estaré encantado de poder atenderle e intentar juntos conseguir su mejor versión.

    Si desea informarse por favor rellene el formulario y nos podremos en contacto con usted.

    Valoraré su caso sin compromiso alguno
    </p>


    </div>

    <div className="presentacion-matias">

<h1>Matias Tello</h1>
<h4>SEO Hiit-Math</h4>

<img src={yoblanconegro} className="img-mati" />

<p>

Hola! Soy Matías Tello, un apasionado desarrollador web con sede en Argentina. A lo largo de mi trayectoria,
 he adquirido una sólida experiencia en la creación de soluciones digitales innovadoras. Mi enfoque se centra
 en fusionar la creatividad con la funcionalidad, brindando a mis clientes sitios web atractivos y altamente funcionales.
 

</p>

    </div>


</div>

)

}

export default Equipo;