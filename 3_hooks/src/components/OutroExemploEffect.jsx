import { useEffect, useState } from 'react';

function OutroExemplo() {
  const [contagem, setContagem] = useState(0);

  useEffect(() => {
    console.log('O componente montou ou contagem mudou:', contagem);
  }, [contagem]); // Só roda quando contagem muda

  return (
    <button onClick={() => setContagem(contagem + 1)}>
      Cliquei {contagem} vezes
    </button>
  );
}

export default OutroExemplo;
