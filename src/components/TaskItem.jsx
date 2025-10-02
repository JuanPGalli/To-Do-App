const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className='task-text' aria-label={`Tarea: ${task.text}`}>
        {task.text}
      </span>
      <div className='task-actions'>
        <button
          onClick={onToggle}
          className='btn small'
          aria-pressed={!!task.completed}
          aria-label={
            task.completed ? `Desmarcar ${task.text}` : `Marcar ${task.text} como completada`
          }
          title={task.completed ? 'Desmarcar' : 'Completar'}
        >
          {task.completed ? 'Desmarcar' : 'Completar'}
        </button>
        <button
          onClick={onDelete}
          className='btn small danger'
          aria-label={`Eliminar ${task.text}`}
          title='Eliminar'
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
