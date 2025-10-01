import { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const newTask = {
      id: Date.now().toString() + Math.random().toString(36).slice(2),
      text: text.trim(),
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
    return tasks;
  }

  return (
    <div className='app-container'>
      <Header />
      <div>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
