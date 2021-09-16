import { useState } from 'react'
import { StoreProvider } from '../context/ToDoCrudContext'
import ToDoList from './ToDoList'

const initialDb = [
  {
    id: 1,
    toDo: 'TRAINING',
    toDoList: 111,
  },
  {
    id: 1,
    toDo: 'OPERACIONES',
    toDoList: 222,
  },
]

const ToDo = () => {
  const [db, setDb] = useState(initialDb)

  return (
    <div>
			<form action="">
				<input type="text" />
				<button>Nueva Lista</button>
			</form>
      {db && db.map((el) => <StoreProvider> <ToDoList key={el.id} el={el} /></StoreProvider>)}
    </div>
  )
}

export default ToDo
