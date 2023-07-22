import { Task, TaskItemProps } from '../types'
import { appendTaskToLocalStorage, getTasksFromLocalStorage } from '../utils';


const TaskItem = ({ task, setTasks }: TaskItemProps) => {

    const tasks = getTasksFromLocalStorage();

    const changeStatus = (task: Task) => {

        tasks.forEach(__task => {
            if (__task.id === task.id) __task.status = __task.status === 'Done' ? 'To Do' : 'Done'
        })

        setTasks(tasks);
        appendTaskToLocalStorage(tasks);
    }

    const deleteTask = (task: Task) => {

        const new_tasks = tasks.filter(t => t.id !== task.id);

        setTasks(new_tasks);
        appendTaskToLocalStorage(new_tasks);
    }

    return (
        <div className='flex flex-col gap-4'>
            <div onDoubleClick={() => changeStatus(task)} className={`${task.status === 'To Do' ? 'bg-primary text-gray-800' : 'bg-blue-400 text-white'}   rounded-md justify-between flex flex-col w-[250px] h-[150px] p-4 cursor-pointer transition-all ease-in-out select-none`}>
                <div className='flex flex-row justify-between items-center'>
                    <p className='font-bold truncate'>{task.text}</p>
                    <button className='text-xl font-bold p-2' onClick={() => deleteTask(task)}>x</button>
                </div>

                <div className='flex items-center justify-between'>
                    <p className='text-sm'>Status: <span className='font-bold text-[14px]'>{task.status}</span></p>
                    <p className='text-xs font-bold'>{task.day}</p>
                </div>
            </div>
            <p className='text-xs text-gray-400'>Double Click on card to change the status!</p>
        </div>
    )
}

export default TaskItem