import { useState } from 'react'
import useTaskContext from '../contexts/TaskContext'

function Input() {
    const [todo, setTodo] = useState('')
    const { addTasks } = useTaskContext()

    const addTodo = (e) => {
        e.preventDefault()
        if (!todo) return

        addTasks({id:Date.now(),todo,completed:false})
        setTodo('')
    }
    
    return (
        <form onSubmit={addTodo}>
            <div className='flex flex-row items-center'>
                <div className='flex flex-col w-full'>
                    <input
                    placeholder='Add new tasks'
                        type="text"
                        className='bg-gray-800 text-lg py-1 outline-none px-3 text-white rounded-l-sm'
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" className='px-3 w-30 py-1 rounded-r-sm text-lg bg-green-400'>
                        Add
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Input