import { useEffect, useState, createContext } from "react";

const providerContext = createContext()

function Provider({children}) {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem('todoStore'))
    if(todoStore) setTodos(todoStore)
  }, [])
  useEffect(() => {
    localStorage.setItem('todoStore', JSON.stringify(todos))
  }, [todos])

  return(
    <>
    <providerContext.Provider value={[todos, setTodos]}>
      {children}
    </providerContext.Provider>
    </>
  )
}

export {
  Provider,
  providerContext
}