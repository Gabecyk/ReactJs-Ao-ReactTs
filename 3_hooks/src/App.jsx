import './App.css'
import CalculoPesado from './components/CalculoPesado'
import ComponentFilho from './components/ComponentFilho'
import Contador from './components/Contador'
import ContadorCallback from './components/ContadorCallback'
import Container from './components/Container'
import DisplayWindowSize from './components/DisplayWindowSize'
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'
import ExemploUseEffect from './components/ExemploUseEffect'
import OutroExemplo from './components/OutroExemploEffect'
import PerfilDeUsuario from './components/PerfilDeUsuario'
import Timer from './components/Timer'
import ValorDoContexto from './components/ValorDoContexto'
import { MeuContextoProvider } from './contexts/MeuContexto'

function App() {

  const ex1 = {nome: "Gabe", cargo: "Dev"}

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
      {/* 8.4 - Custom hook */}
      <DisplayWindowSize/>
      {/* 8.5 - Slots e children props */}
      <Container>
        <h1>Titulo da seção</h1>
        <p>Este é o meu subtítulo</p>
        <Contador/>
      </Container>
      {/* 8.6 - Sicronizar o estado com props*/}
      {/* prop => componente => chamada de API => resulta em um dado */}
      <PerfilDeUsuario usuarioId={1}/>
      {/* 8.7 - useMemo e useCallback */}
      <CalculoPesado numero={2}/>
      <ContadorCallback/>
      {/* Exercícios */}
      {/* Ex1 */}
      <Ex1 dadoUser={ex1}/>
      {/* Ex2 */}
      <Ex2 num={6}/>
      {/* Ex3 */}
      <Ex3/>
    </>
  )
}

export default App
