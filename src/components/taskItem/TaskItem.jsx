export default function TaskItem({
  id,
  content,
  completed,
  priority,
  onComplete,
  onDelete,
}) {
  return (
    <div className={`task-item ${completed ? "completed" : "not-completed"}`}>
      <div>
        <p>{content}</p>
        <p>{`${priority} priority`}</p>
      </div>
      <div className="options">
        <button onClick={() => onDelete(id)}>X</button>
        <input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => onComplete(id)}
        />
      </div>
    </div>
  );
}
