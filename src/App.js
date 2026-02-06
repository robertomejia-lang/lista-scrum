import { useState } from "react";
import './App.css';

function App() {

  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const agregarTarea = () => {
    if(tarea !== ""){
      setLista([...lista, tarea]);
      setTarea("");
    }
  }

  return (
    <div className="App">
      <h1>Lista SCRUM</h1>

      <h2>Product Backlog</h2>

      <input
        value={tarea}
        onChange={(e)=> setTarea(e.target.value)}
        placeholder="Nueva tarea..."
      />

      <button onClick={agregarTarea}>
        Agregar
      </button>

      <ul>
        {lista.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
