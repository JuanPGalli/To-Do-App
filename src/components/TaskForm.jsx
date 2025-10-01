const TaskForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='task-form' onSubmit={handleSubmit} aria-label='Formulario para nueva tarea'>
      <input
        type='text'
        className='input'
        placeholder='Nombre de la tarea'
        aria-label='Nombre de la tarea'
      />
      <button type='submit' className='btn' aria-label='Agregar tarea'>
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
