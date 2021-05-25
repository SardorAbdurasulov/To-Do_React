import { useState, useContext } from "react";
import { providerContext } from "./Provider";

function FormInput() {
  const [todos, setTodos] = useContext(providerContext)
  const [todoTitle, setTodoTitle] = useState('')
  const addTodo = e => {
    e.preventDefault()
    setTodos([...todos, {title: todoTitle, complete: false}])
    setTodoTitle('')
  }
  return (
    <>
      <form autoComplete="off" onSubmit={addTodo}>
        <input type="text" name="todos" id="todos" required placeholder="What  needs to be done?" value={todoTitle}
        onChange={e => setTodoTitle(e.target.value.trim())}/>
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default FormInput;