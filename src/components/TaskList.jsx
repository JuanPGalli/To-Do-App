import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return <p className='empty'>No tienes tareas pendientes</p>;
  }

  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
