import { ListOfTasksProps } from "../types/index";
import TaskItem from './TaskItem';
import Button from './Button';
import { useState } from "react";
import AddTask from "./AddTask";


const ListOfTasks = ({ tasks, setTasks }: ListOfTasksProps) => {

    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <div className={`grid grid-rows-${showForm ? '3' : '2'} justify-items-center`}>
            <div className='ml-auto my-8 mr-24'>
                <Button
                    title={showForm ? 'Cancel' : 'Add'}
                    btnType="button"
                    containerStyles='bg-primary text-gray-800 rounded-full transition-all hover:opacity-80'
                    textStyles="font-semibold"
                    handleClick={() => setShowForm((prev) => !prev)}
                />
            </div>
            {showForm && (
                <AddTask setTasks={setTasks} hideForm={setShowForm} />
            )}
            {tasks && tasks.length > 0 ?
                (
                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-24 my-12'>
                        {tasks?.map((task, id) => <TaskItem key={id} task={task} setTasks={setTasks} />)}
                    </div>
                )
                :
                (
                    showForm ? null : <p className='text-lg text-gray-700'>You don't have any task yet. Click <span className="font-bold">Add</span> button to Add a new Task {":)"}</p>
                )
            }

        </div >

    )
}

export default ListOfTasks