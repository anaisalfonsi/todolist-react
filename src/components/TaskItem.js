const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />
        {task.text}
      </label>
      <span
        className="delete-btn"
        role="button"
        onClick={() => onDelete(task.id)}
      >
        ×
      </span>
    </div>
  );
};

export default TaskItem;
