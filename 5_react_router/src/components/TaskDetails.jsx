import { useParams } from 'react-router-dom'

function TaskDetails() {
    const {taskId} = useParams()

  return (
    <div>
        <h2>Detalhes da Tarefa</h2>
        <p>Vendo a tarefa: {taskId}</p>
    </div>
  )
}

export default TaskDetails