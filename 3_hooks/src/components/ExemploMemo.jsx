import React, { useState, useMemo } from 'react';

function Fatorial() {
  const [numero, setNumero] = useState(1);
  const [texto, setTexto] = useState('');

  const calcularFatorial = (n) => {
    console.log('Calculando fatorial...');
    if (n <= 0) return 1;
    return n * calcularFatorial(n - 1);
  };

  const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

  return (
    <div>
      <h2>Fatorial de {numero} é {fatorial}</h2>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(parseInt(e.target.value))}
      />
      <input
        type="text"
        placeholder="Digite algo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
    </div>
  );
}

export default Fatorial;