import React from "react";
import './conocenos.css';
import imgHistoria from './img-historia.jpg';
import comentario1 from './comentario1.png'
import comentario2 from './comentario2.png'
import comentario3 from './comentario3.png'
import comentario4 from './comentario4.png'
import comentario5 from './comentario5.png'
import comentario6 from './comentario6.png'



function Conocenos() {
  return (
    <div className="cont-conocenos">
 
<h1> Esta es nuestra historia </h1>

<div className="historia-img">

<p>

<span>HIIT MATH:</span>

El proyecto hiit Math, nace al aplicar las matemáticas  al entrenamiento, pues cualquier objetivo lo tomamos cómo un problema X a desbloquear como si de una ecuación con diferentes factores se tratará para llegar a un resultado concreto.

Ya sea subir peso , tonificar, ganar masamuscular , adelgazar... Todo requiere de unos parámetros y cantidades a tener en cuenta.

Por ejemplo, en el caso más común de querer adelgazar, debemos ingerir menos calorías de las que gastamos, y llegar a desbloquear esto se trata y plantea como un problema matemático, único y personalizado a cada cliente, pues cada persona tiene una carga de trabajo, un estrés metabólico, N.E.A.T, y otros factores diferentes y únicos.


Es por esto que personalizamos todo a cada caso , nos adaptamos a cada objetivo concreto , y siempre desde un planteamiento lógico , un planteamiento matemático de cada caso.



</p>


<img src={imgHistoria} className="img-historia"/>

</div>

<h2>Te invitamos a conocer algunas de las reseñas de nuestros clientes</h2>


<div className="reseñas">

<img src={comentario1} className="img-reseñas"/>
<img src={comentario2} className="img-reseñas"/>
<img src={comentario3} className="img-reseñas"/>
<img src={comentario4} className="img-reseñas"/>
<img src={comentario5} className="img-reseñas"/>
<img src={comentario6} className="img-reseñas"/>



</div>

    </div>
  );
}

export default Conocenos;
