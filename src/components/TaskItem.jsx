const TaskItem = ({ task }) => {
  return (
    <li>
      <span className='task-text' aria-label={`Tarea: ${task.text}`}>
        {task.text}
      </span>
    </li>
  );
};

export default TaskItem;
