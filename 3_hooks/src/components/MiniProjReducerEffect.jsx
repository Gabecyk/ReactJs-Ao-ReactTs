import React, { useEffect, useReducer } from 'react';

// Redutor: define como o estado muda com base nas ações
function tarefasReducer(state, action) {
  switch (action.type) {
    case 'carregar':
      return action.payload;
    case 'adicionar':
      return [...state, action.payload];
    case 'remover':
      return state.filter((tarefa) => tarefa.id !== action.payload);
    default:
      return state;
  }
}

// Componente principal
function AppTarefas() {
  const [tarefas, dispatch] = useReducer(tarefasReducer, []);

  // Carrega tarefas de uma API falsa
  useEffect(() => {
    async function buscarTarefas() {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      const dados = await resposta.json();
      dispatch({ type: 'carregar', payload: dados });
    }

    buscarTarefas();
  }, []);

  const adicionarTarefa = () => {
    const novaTarefa = {
      userId: 1,
      id: Math.random(),
      title: 'Nova tarefa criada',
      completed: false
    };
    dispatch({ type: 'adicionar', payload: novaTarefa });
  };

  const removerTarefa = (id) => {
    dispatch({ type: 'remover', payload: id });
  };

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.title}
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppTarefas;