import { useState } from 'react'
import useTaskContext from '../contexts/TaskContext'

function TaskCard({ taskID, taskName, isChecked }) {

  const [newTodo, setNewTodo] = useState(taskName)

  const [updateTaskHidden, setUpdateTaskHidden] = useState(true)

  const { check, updateTasks,deleteTask } = useTaskContext()

  const onCheck = () => {
    check(taskID)
  }

  const editTask = () => {

    updateTasks(taskID,newTodo)
  }

  return (
    <div className='flex gap-8 flex-row items-end'>
      <div>
        <input onChange={onCheck} type="checkbox" checked={isChecked} className={`accent-green-400 w-4 h-4`} />
      </div>

      <div className={`text-white text-lg border-b-2 border-gray-700 w-full flex items-center flex-wrap justify-between`}>
        <div className={`w-[80%] ${isChecked ? 'line-through transition-all' : ''}`}>
          <form onSubmit={editTask}>
            <input type="text"
              placeholder='update'
              value={newTodo}
              onChange={(e) => { setNewTodo(e.target.value) }}
              hidden={updateTaskHidden} 
              className='bg-gray-800 w-full text-wrap'/>
          </form>

          <h1 hidden={!updateTaskHidden}>
            {taskName}
          </h1>
        </div>
        <div className='flex flex-row flex-wrap gap-5'>
          {/* edit the task button */}
          <button disabled={isChecked} onClick={()=>setUpdateTaskHidden(false)} className={`${isChecked ? 'fill-gray-500' : 'fill-gray-300'}`}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
            </span>
          </button>
          <button onClick={()=>deleteTask(taskID)} className={`fill-gray-300`}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" /></svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard