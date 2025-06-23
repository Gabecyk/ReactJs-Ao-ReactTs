import React from 'react'

function Task({task, onDelete, onDone}) {

  const textStyle = {
    textDecoration: task.done ? 'line-through' : 'none',
    cursor: 'pointer',
  };

  return (
    <li>
        <span style={textStyle} onClick={onDone}>{task.text}</span>
        <button onClick={onDelete}>Remover</button>
    </li>
  )
}

export default Task