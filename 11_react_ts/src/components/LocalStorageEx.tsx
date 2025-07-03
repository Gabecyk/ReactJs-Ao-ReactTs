import {useState, useEffect} from 'react'

function LocalStorageEx() {

    function useLocalStorage<T>(
        key: string,
        initialValue: T
    ): [T, (value: T) => void] {
        const [storedValue, setStoredValue] = useState<T>(() => {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue
            } catch (error) {
                console.log(error)
            }
        });

        const setValue = (value: T) => {
            try {
                setStoredValue(value);
                localStorage.setItem(key, JSON.stringify(value))
            } catch (error) {
                console.log(error)
            }
        };

        useEffect(() => {
            setValue(storedValue)
        }, []);
        
        return [storedValue, setValue];
    }

    const [nome, setNome] = useLocalStorage("nome", "")

  return (
    <div>
        <h3>Local storage</h3>
        <div>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <p>O nome armazenado é: {nome}</p>
        </div>
    </div>
  )
}

export default LocalStorageEx