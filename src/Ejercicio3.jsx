import React from 'react'
import { useState } from 'react';

export default function Ejercicio3() {
  const [elemList, setElemList] = useState({
    name1:"Informática Aplicada II",
    name2:"Programación II",
    name3:"Robótica",
    name4:"Matemática",
    name5:"Física"
  }
  );

  const handleChange=(event)=>{
    const{name}= event.target;
    setElemList({
      ...elemList,
      name
    });
  };
  const handleChange=(event)=>{
    setElemList(event.target.value);
  };
  
  return (
    <div>
      <h2>Ejercicio 3: Modularización</h2>
      <p>Algunas materias de quinto año:</p>
      <ul>
        {/* lista de materias */}
        <li>{elemList.name1}</li>
        <li>{elemList}</li>
      </ul>
    </div>
  )
}
