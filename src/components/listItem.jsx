import {useState, useContext} from "react"
import { providerContext } from "./Provider"

function ListItem({title, id, checkComplete, hanldeEditTodos}) {
  const [todos, setTodos] = useContext(providerContext)
  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(title.title)

  const handleOnEdit = () => {
    setOnEdit(true)
  }
  const handleSave = id => {
    setOnEdit(false)
    if(editValue){
      hanldeEditTodos(editValue, id)
    } else {
      setEditValue(title.title)
    }
  }

  if(onEdit){
    return(
      <>
      <li>
          <input type="text" id="editValue" name="editValue" value={editValue}
          onChange={e => setEditValue(e.target.value.trim())}/>
        <div>
        <button className="edit" onClick={() => handleSave(id)}>Save</button>
        </div>
      </li>
      </>
    )
  }
  else{
    return(
      <>
      <li>
        <label htmlFor={id} className={title.complete ? "active" : ""}>
          <input type="checkbox" id={id} checked={title.complete} onChange={() => checkComplete(id)}/>
          {title.title}
        </label>
        <div>
        <button className="edit" disabled={title.complete} onClick={handleOnEdit}>Edit</button>
        </div>
      </li>
      </>
    )
  }
}

export default ListItem