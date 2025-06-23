import React, {useState, useEffect, useCallback} from "react";

const itens = ["Furia","Imperial","Pain","MIBR","Red Canids", "Loud"];

function ExemploCallback() {
    const [filtro, setFiltro] = useState("");
    const [resultados, setResultados] = useState([])

    //Função de filtragem memorizada
    const filtrar = useCallback(() => {
        return itens.filter((item) => 
            item.toLowerCase().includes(filtro.toLocaleLowerCase())
        )
    }, [filtro]) //repete quando valor de filtro altera

    useEffect(() => {
        const resultadosFiltrados = filtrar();
        setResultados(resultadosFiltrados);
    }, [filtrar])// repete toda vez que o metodo filtrar mudar o resultado


    return (
    <div>
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)} // Quando alterado faz o metodo filtrar seja repetido
        placeholder="Filtrar time..."
      />
      <ul>
        {resultados.map((item) => ( // Mostra o resultado
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExemploCallback