import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return <div>
      {tasks.map((t) => (
      <TaskItem 
      key={t.id} 
      task={t} 
      onToggle={onToggle} 
      onDelete={onDelete} 
      />))}
  </div>;
};

export default TaskList;
