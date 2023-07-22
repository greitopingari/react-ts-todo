import { Task } from "../types";

const STORAGE_KEY = 'tasks_list'

export const getTasksFromLocalStorage = (): Task[] => {
    const list_of_tasks = localStorage.getItem(STORAGE_KEY);
    return list_of_tasks ? JSON.parse(list_of_tasks) : [];
}

export const appendTaskToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}