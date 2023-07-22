import { useState } from 'react';
import ListOfTasks from './components/ListOfTasks';
import { Task } from './types';


function App() {

  const [tasks, setTasks] = useState<Task[]>(() => {
    const list_of_tasks = localStorage.getItem('tasks_list');
    return list_of_tasks ? JSON.parse(list_of_tasks) : [];
  })

  return (
    <ListOfTasks tasks={tasks} setTasks={setTasks} />
  );
}

export default App;
