import { useContext } from "react"
import { providerContext } from "./Provider"
import ListItem from "./listItem"
function List() {
  const [todos, setTodos] = useContext(providerContext)
  const switchComplete = id => {
    const newTodos = [...todos]
    newTodos.forEach((todo, i) => {
      if(i === id) {
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos)
  }
  const hanldeEditTodos = (editvalue, id) => {
    const newTodos = [...todos]
    newTodos.forEach((todo, i) => {
      if(i === id){
        todo.title = editvalue
      }
    })
    setTodos(newTodos)
  }
  return(
    <>
    <ul>
      {
        todos.map((title, i) => (
          <ListItem title={title} key={i} id={i}
          checkComplete={switchComplete} hanldeEditTodos={hanldeEditTodos}/>
        ))
      }
    </ul>
    </>
  )
}

export default List