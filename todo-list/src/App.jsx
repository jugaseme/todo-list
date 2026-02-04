import './App.css'
import { useState} from 'react'
function App() {


  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState('')
  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTask(prev => [...prev, newTask])
    setNewTask('')
    console.log(task);
  }
const handleDeleteTask = (indexToDelete) => {
  setTask(prev => prev.filter((_, index) => index !== indexToDelete))
}

  
 
  return (
    <>
     <h1>My To-Do</h1>
     <input type="text"
     placeholder='nueva tarea'
     value={newTask}
     onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={handleAddTask} disabled={task.length >= 10}>{task.length >= 10 ? "Límite alcanzado" : "Agregar tarea"}</button>

      <ul >
        {task.length === 0 && <p>No hay tareas pendientes</p>}
        {task.length >= 10 && <p>¡Tienes muchas tareas!</p>}
        {task.map((tarea, index)=>(

          <li key={index}>{tarea} <button onClick={() => handleDeleteTask(index)}>x</button></li>
        ))}
      </ul>


    </>
  )
}

export default App
