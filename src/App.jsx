import { useState } from "react";
import "./App.css"
import InputContainer from "./component/InputContainer.jsx"
import TodoContainer from "./component/TodoContainer.jsx";
function App() {
  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState([])

  function writeTodo(e) {
    setInputVal(e.target.value)
  }

  function addTodo() {
    if (inputVal != '') {
      setTodos((prevTodos) => [...prevTodos, inputVal])
      setInputVal('')
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) => prevTodos.filter((prevTodos, prevTodosIndex) => {
      return prevTodosIndex != todoIndex
    })
    )
  }

  return (
    <main>
      <h1> YOUR TO DO LIST </h1>
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
      <TodoContainer todos={todos} delTodo={delTodo}  />
    </main>
  )
}

export default App
