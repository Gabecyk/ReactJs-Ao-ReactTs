import React from 'react'
import Task from './Task'

function TaskList({ tasks, onDeleteTask, onTaskDone }) {
    return (
        <ul>
            {tasks.length > 0 ? tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={() => onDeleteTask(task.id)}
                    onDone={() => onTaskDone(task)}
                />
            )) : <div>
                <h3>Nehuma tarefa adicionada</h3> <p>Adicione uma tarefa!</p>
            </div>}
        </ul>
    )
}

export default TaskList