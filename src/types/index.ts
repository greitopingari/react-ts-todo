import { MouseEventHandler } from "react";

export interface Task {
    id?: number;
    text: string;
    day: string;
    completed: boolean;
}

export interface ListOfTasksProps {
    tasks: Task[] | null;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface TaskItemProps {
    task: Task;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface AddTaskProps {
    hideForm: React.Dispatch<React.SetStateAction<boolean>>;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}
