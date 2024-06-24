import { useState } from "react"

export default function Ejercicio2() {
  const [fromData,setFormData]=useState({
    nombre:'',
    edad:''
  });
  
  const handleChange=(event)=>{
    const{name, value}= event.target;
    setFormData({
      ...fromData,
      [name]:value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(fromData.edad < 18){
      window.alert('Eres menor de edad!');
    }
    if(fromData.edad >=18){
      window.alert('Eres mayor de edad!');
    }

    };

  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      {/* Crear formulario */}
      <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input
      type="text"
      id="nombre"
      name="nombre"
      value={fromData.nombre}
      onChange={handleChange}
      />
      <input
      type="number"
      id="edad"
      name="edad"
      value={fromData.edad}
      onChange={handleChange}
      />
      <p>{fromData.nombre} tiene {fromData.edad} años</p>
      <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
