import {useState, useContext} from "react"
import { providerContext } from "./Provider"

function Footer() {
  const [todos, setTodos] = useContext(providerContext)
  const [checkAll, setCheckAll] = useState(false)

  const handleCheckAll = () => {
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }
  const deleteTodos = () => {
    const newTodos = todos.filter(todo => {
      return todo.complete === false
    })
    setTodos(newTodos)
    setCheckAll(false)
  }
  return (
    <>
    <div className="row">
      <label htmlFor="all">
        <input type="checkbox" name="all" id="all"
        onChange={handleCheckAll} checked={checkAll}/>
        All
      </label>
      <button className="delete" onClick={deleteTodos}>Delete</button>
    </div>
    </>
  )
}

export default Footer;