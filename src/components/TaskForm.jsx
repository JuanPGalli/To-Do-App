import { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      setError('La tarea no puede estar vacía');
      return;
    }
    const ok = addTask(text);
    if (ok) {
      setText('');
      setError('');
    }
  };

  return (
    <form className='task-form' onSubmit={handleSubmit} aria-label='Formulario para nueva tarea'>
      <input
        aria-label='Nombre de la tarea'
        className='input'
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (e.target.value.trim() !== '') setError('');
        }}
        placeholder='Nombre de la tarea'
      />
      <button type='submit' className='btn' aria-label='Agregar tarea'>
        Agregar
      </button>
      {error && <p className='error'>{error}</p>}
    </form>
  );
};

export default TaskForm;
