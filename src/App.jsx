import { useEffect, useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const STORAGE_KEY = 'tasksLocalKey';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setTasks(JSON.parse(raw));
      }
    } catch (error) {
      console.error('Error reading LocalStorage', error);
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (err) {
      console.error('Error writing localStorage', err);
    }
  }, [tasks]);

  function addTask(text) {
    const trimmed = text.trim();
    if (!trimmed) return false;
    const newTask = {
      id: Date.now().toString() + Math.random().toString(36).slice(2),
      text: trimmed,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
    return true;
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
