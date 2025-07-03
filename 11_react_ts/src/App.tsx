import './App.css'
import BarraFerramentas from './components/BarraFerramentas'
import Contador from './components/Contador'
import ContadorIntervalo from './components/ContadorIntervalo'
import Counter from './components/Counter'
import ExibirPostagens from './components/ExibirPostagens'
import FormularioLogin from './components/FormularioLogin'
import Greeting from './components/Greeting'
import ListaDeCompras from './components/ListaDeCompras'
import LocalStorageEx from './components/LocalStorageEx'
import TextInput from './components/TextInput'
import { TemaProvider } from './context/TemaContext'

function App() {

  return (
    <>
      <h1>React com TS</h1>
      {/* 1 - componente funcional com TS */}
      <Greeting name = "Gabe"/>
      {/*<Greeting name = {123}/> não recebe numero pois ja foi setado como string a variavel name*/}
      {/* 2 - Hooks com tipos */}
      <Counter />
      {/* 3 - Manipulação de eventos com tipos */}
      <TextInput />
      {/* 4 - Custom hooks com TS */}
      <ContadorIntervalo />
      {/* 5 - Exercícios */}
      {/* Ex1 */}
      <FormularioLogin />
      {/* Ex2 */}
      <ListaDeCompras />
      {/* Ex3 */}
      <LocalStorageEx />
      {/* 6 - Reducer */}
      <Contador />
      {/* 7 - Context API com TS */}
      <TemaProvider>
          <BarraFerramentas />
      </TemaProvider>
      {/* 8 - Requisição de API com Axios e TS */}
      <ExibirPostagens />
    </>
  )
}

export default App
