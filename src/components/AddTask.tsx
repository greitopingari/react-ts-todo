import React, { useState } from "react";
import Button from "./Button"
import { AddTaskProps, Task } from "../types";
import { appendTaskToLocalStorage, getTasksFromLocalStorage } from "../utils";

const AddTask = ({ hideForm, setTasks }: AddTaskProps) => {

    const [taskData, setTaskData] = useState<Task>({
        text: "",
        day: "",
        status: "To Do"
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;

        setTaskData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tasks = getTasksFromLocalStorage();
        tasks.push({ ...taskData, id: tasks.length + 1 });
        setTasks(tasks);
        appendTaskToLocalStorage(tasks);
        resetTaskAddFields();
        hideForm(false);
    }

    function resetTaskAddFields() {
        setTaskData((prev) => ({
            ...prev,
            text: "",
            day: ""
        }))
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-6 w-full'>
            <div className='flex flex-col gap-2 w-1/3 mx-auto'>
                <label htmlFor="text">Title</label>
                <input
                    type='text'
                    name="text"
                    id="text"
                    value={taskData?.text}
                    className='bg-primary p-4 outline-none text-black placeholder:text-black'
                    required
                    onChange={handleChange}
                />
            </div>
            <div className='flex flex-col gap-2 w-1/3 mx-auto'>
                <label htmlFor="day">Date</label>
                <input
                    type='date'
                    name="day"
                    id="day"
                    value={taskData?.day}
                    className='bg-primary p-4 outline-none text-black placeholder:text-black'
                    required
                    onChange={handleChange}
                />
            </div>
            <Button
                title="Submit"
                btnType="submit"
                containerStyles="bg-primary rounded-md hover:transition-all hover:opacity-80 w-1/3 mx-auto"
                textStyles="text-black font-semibold"
            />
        </form>
    )
}

export default AddTask