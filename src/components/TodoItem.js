import React from 'react';

const TodoItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="todo-item">
      <span 
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;