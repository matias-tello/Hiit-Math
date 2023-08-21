import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './Todo';
import Formulario from './Formulario';
import Servicios from './Servicios';
import Equipo from './Equipo';
import Conocenos from './Conocenos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/servicios"  element={<Servicios/>}  />
        <Route path="/equipo" element={<Equipo/>}  />
        <Route path="/conocenos" element={<Conocenos/>}  />
      </Routes>
    </Router>
  );
}

export default App;
