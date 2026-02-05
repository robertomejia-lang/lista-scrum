import React, { useState } from "react";

function App() {

  const [tarea, setTarea] = useState("");
  const [pendiente, setPendiente] = useState([]);
  const [proceso, setProceso] = useState([]);
  const [terminado, setTerminado] = useState([]);

  const agregarTarea = () => {
    if(tarea !== ""){
      setPendiente([...pendiente, tarea]);
      setTarea("");
    }
  };

  const mover = (index, origen, destino) => {
    const nuevaOrigen = origen.filter((_, i)=> i !== index);
    destino.push(origen[index]);

    if(origen === pendiente) setPendiente([...nuevaOrigen]);
    if(origen === proceso) setProceso([...nuevaOrigen]);
    if(destino === proceso) setProceso([...destino]);
    if(destino === terminado) setTerminado([...destino]);
  };

  return (
    <div style={{display:"flex", gap:"40px", justifyContent:"center"}}>

      <div>
        <h3>Pendiente</h3>
        <input value={tarea} onChange={(e)=>setTarea(e.target.value)} />
        <button onClick={agregarTarea}>Agregar</button>

        {pendiente.map((t,i)=>(
          <div key={i}>
            {t}
            <button onClick={()=>mover(i, pendiente, proceso)}>→</button>
          </div>
        ))}
      </div>

      <div>
        <h3>En proceso</h3>
        {proceso.map((t,i)=>(
          <div key={i}>
            {t}
            <button onClick={()=>mover(i, proceso, terminado)}>→</button>
          </div>
        ))}
      </div>

      <div>
        <h3>Terminado</h3>
        {terminado.map((t,i)=>(
          <div key={i}>{t}</div>
        ))}
      </div>

    </div>
  );
}

export default App;
