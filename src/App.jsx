import Header from "./components/Header"
import { Task } from "./components/Task"
import { TaskList } from "./components/TaskList"


const tasks = [
  {name: "hacer tareas"},
  {name: "cocinar"},
  {name: "Lavar ropa"},
  
]

function App() {
    return (
    <>
      <div className="App">
        <Header />
        <TaskList list = {tasks}/>
      </div>
    </>
  )
}

export default App
