import { useState } from "react"
import React from 'react';
export default function Ejercicio1() {
  const [fromData,setFormData]=useState('');
  
  const handleChange=(event)=>{
    setFormData(event.target.value);
  };
  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione una fruta: </label>
      {/* Crear lista de selección */}
      <select onChange={handleChange}>
        <option value="manzana">Manzana</option>
        <option value="pera">Pera</option>
        <option value="naranja">Naranja</option>
        <option value="mandarina">Mandarina</option>
      </select>
      <p>Seleccionaste:{fromData}</p>
    </div>
  )
}
