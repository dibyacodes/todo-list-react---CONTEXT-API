import { useEffect, useState } from 'react'
import { TaskContextProvider } from './contexts/TaskContext'
import Input from './components/Input'
import TaskCard from './components/TaskCard'

function App() {
  const [todo, setTodo] = useState([])

  function addTasks(todo) {
    setTodo((prev) => [{ ...todo }, ...prev])
  }

  function updateTasks(id, newTodo) {
    setTodo((prev) => prev.map((item) => (item.id === id ? {...item, todo:newTodo} : item)))
  }

  // .filet is a functionality that filetrs out all the values except/only the values that are specified. In simple words, .filter filters the value or values that specified to be filtered in the array and then creates a new array containing the filtered array.
  function deleteTask(id) {
    setTodo((prev) => prev.filter((items) => items.id !== id))
  }

  function check(id) {
    // accessed the already existing array/value, loop through all the element and then access the element where the id present in the element is equal to the id passed as the argument, then spread the ITEM that has the matching id and change the individual value that you are looking to change and then overwrite the existing value.
    setTodo((prev) => prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('user_tasks'))

    if (todos && todos.length > 0) {
      setTodo(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('user_tasks', JSON.stringify(todo))
  }, [todo])

  return (
    <TaskContextProvider value={{ todo, addTasks, updateTasks, deleteTask, check }}>
      <div className='bg-gray-950 h-screen pt-[5%] flex flex-col'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-[50%] flex flex-col gap-10'>
            <div className='flex flex-col w-full'>
              <Input />
            </div>
            <div className='flex flex-col gap-4'>
              {
                todo.map((items) => (
                  <div key={items.id}>
                    <TaskCard key={items.id} taskID={items.id} taskName={items.todo} isChecked={items.completed} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        {/* input */}
        {/* taskList */}
      </div>
    </TaskContextProvider>
  )
}

export default App