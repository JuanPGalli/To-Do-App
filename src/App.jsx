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

  function toggleComplete(id) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className='app-container'>
      <Header />
      <main className='main'>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} onToggle={toggleComplete} onDelete={deleteTask} />
      </main>
    </div>
  );
};

export default App;
