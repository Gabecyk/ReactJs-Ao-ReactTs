import { useState } from 'react'

function ListaDeCompras() {

    type Item = {
        id: number;
        name: string;
    };

    const [itens, setItens] = useState<Item[]>([]);
    const [name, setName] = useState<string>("");
    const [id, setId] = useState<number>(1);

    function adicionar() {
        if (name.length < 1)
            return alert('Digite um nome para o produto primeiro!')

        const item: Item = {
            id: id,
            name: name,
        };
        setId((prev) => prev + 1)

        setItens([...itens, item]);

        setName("");
    }

    function remover(id: number) {
        setItens((prev) => prev.filter((item) => item.id != id))
    }

    return (
        <div>
            <h3>Lista de compras</h3>
            <input
                type="text"
                placeholder='Digite nome da compra...'
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <button onClick={adicionar}>Salvar</button>
            <ul>
                {itens.map((item) => (
                    <li
                        style={{ cursor: 'pointer' }}
                        key={item.id}
                        onClick={() => remover(item.id)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaDeCompras