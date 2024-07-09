import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date }) => {
  return (
    <div className="TodoItem">
      <input readOnly checked={isDone} type="checkbox"></input>
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>DELETE</button>
    </div>
  );
};

export default TodoItem;
