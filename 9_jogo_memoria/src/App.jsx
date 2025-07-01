import { useState } from 'react'
import ContainerGame from './components/ContainerGame'
import Reset from './components/Reset';
import Tentativas from './components/Tentativas';

const categorias = [
  { letra: "A", clicado: false, id: 1 },
  { letra: "A", clicado: false, id: 2 },
  { letra: "C", clicado: false, id: 3 },
  { letra: "C", clicado: false, id: 4 },
  { letra: "D", clicado: false, id: 5 },
  { letra: "E", clicado: false, id: 6 },
  { letra: "F", clicado: false, id: 7 },
  { letra: "G", clicado: false, id: 8 },
  { letra: "H", clicado: false, id: 9 },
  { letra: "I", clicado: false, id: 10 },
  { letra: "D", clicado: false, id: 11 },
  { letra: "E", clicado: false, id: 12 },
  { letra: "F", clicado: false, id: 13 },
  { letra: "G", clicado: false, id: 14 },
  { letra: "H", clicado: false, id: 15 },
  { letra: "I", clicado: false, id: 16 }
];


function App() {
  const ordenado = [...categorias].sort(() => Math.random() - 0.5);

  const [letras, setLetras] = useState(ordenado);
  const [primeiraCarta, setPrimeiraCarta] = useState(null);
  const [segundaCarta, setSegundaCarta] = useState(null);
  const [bloqueado, setBloqueado] = useState(false); // Evita clicar enquanto compara
  const [erros, setErros] = useState(5)

  const handleReset = () => {
    const letrasN = [...letras]
    letrasN.forEach(element => {
      element.clicado = false
    });

    const reordenado = [...categorias].sort(() => Math.random() - 0.5);
    setLetras(reordenado)

    setErros(5)
  }

  const handleClick = (index) => {
    if (bloqueado) return; // impede cliques enquanto compara
    const carta = letras[index];
    if (carta.clicado) return; // já foi clicada

    const novasLetras = [...letras];
    novasLetras[index] = { ...carta, clicado: true };
    setLetras(novasLetras);

    if (!primeiraCarta) {
      setPrimeiraCarta({ ...carta, index });
    } else if (!segundaCarta) {
      setSegundaCarta({ ...carta, index });
      setBloqueado(true);

      // comparar as duas cartas após um pequeno atraso
      setTimeout(() => {
        if (primeiraCarta.letra === carta.letra) {
          // acertou, mantém viradas
        } else {
          // errou, desvira as cartas
          const letrasAtualizadas = [...novasLetras];
          letrasAtualizadas[primeiraCarta.index].clicado = false;
          letrasAtualizadas[index].clicado = false;
          setLetras(letrasAtualizadas);
          setErros((e) => e-1)
          if(erros <= 1)
            handleReset()
        }
        // resetar cliques
        setPrimeiraCarta(null);
        setSegundaCarta(null);
        setBloqueado(false);
      }, 1000);
    }
  };

  return (
    <div className='Body'>
      <h2>Jogo da Memória</h2>
      <ContainerGame categorias={letras} handleClick={handleClick} />
      <Tentativas qtdErros={erros}/>
      <Reset handleReset={handleReset}/>
    </div>
  )
}

export default App
