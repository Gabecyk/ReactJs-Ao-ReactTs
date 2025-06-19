import './App.css'
import ComponentFilho from './components/ComponentFilho'
import Contador from './components/Contador'
import ExemploUseEffect from './components/ExemploUseEffect'
import OutroExemplo from './components/OutroExemploEffect'
import Timer from './components/Timer'
import ValorDoContexto from './components/ValorDoContexto'
import { MeuContextoProvider } from './contexts/MeuContexto'

function App() {
  return (
    <>
      {/* 8.1 - useEffect */}
      <ExemploUseEffect/>
      <Timer/>
      <OutroExemplo/>
      {/* 8.2 - useContext */}
      {/* aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes */}
      <MeuContextoProvider>
        <ComponentFilho/>
        <ValorDoContexto/>
      </MeuContextoProvider>
      {/* 8.3 - useReducer */}
      {/* estados mais complexos */}
      <Contador/>
    </>
  )
}

export default App
