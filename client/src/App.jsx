import { useState , useRef, useEffect} from "react"
import TodoList from "./TodoList"
import { v4 as uuidv4 } from 'uuid'
import { Link } from "react-router-dom"


const local_key = "todokey"
function App() {
  const [todos, setTodos] = useState([])
  const todoRefName = useRef()

  useEffect( ()=> {
    const stored_todos = JSON.parse(localStorage.getItem(local_key))
    if (stored_todos) setTodos(stored_todos)
  },[])


  useEffect( () => {
    localStorage.setItem(local_key,JSON.stringify(todos))
  }, [todos]
  )

  function handleAddTodo(e) {
    const name = todoRefName.current.value
    if (name == "") return 
    setTodos( prevTodos => {
      return [...prevTodos, {id:uuidv4(), name: name, complete: false} ]
    })
    todoRefName.current.value = null
  }

  function toggleTodo(id) {
    const newtodos = [...todos]
    const todo = newtodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newtodos)
  }

  function clearFunction() {
    setTodos(todos.filter(todo => !todo.complete))
  }
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoRefName} type="text" />
      <button onClick={handleAddTodo}> Add Todo </button>
      <button onClick={clearFunction}> Clear</button>
      <div> {todos.filter(todo => !todo.complete).length} Left To Do </div>

      <Link to="/page2">
        Page2
      </Link>
      <Link to="/page3">
        Page3
      </Link>
    </>
  )
}

export default App
