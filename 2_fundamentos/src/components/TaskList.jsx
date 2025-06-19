import React from 'react'

function TaskList({ task }) {
  return (
    <ul>
        {task != null ? task.map((item) => (
        <li key={item.id}>{item.text}</li>
    )) : <li>Não há tarefas a mostrar</li>}
    </ul>
  )
}

export default TaskList