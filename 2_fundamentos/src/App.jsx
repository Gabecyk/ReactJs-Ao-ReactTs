import './App.css'
import Welcome from './components/Welcome'
import BomDia from './components/BomDia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import UserInfoForm from './components/UserInfoForm'
import Button from './components/Button'
import PaiFunction from './components/PaiFunction'
import Form from './components/Form'
import RenderCondicional from './components/RenderCondicional'
import LoginButton from './components/LoginButton'
import Warning from './components/Warning'
import NumberList from './components/NumberList'
import BotaoEstilizado from './components/BotaoEstilizado'
import BotaoAzul from './components/BotaoAzul'
import Greeting from './components/Greeting'
import CounterEX from './components/CounterEX'
import TaskList from './components/TaskList'

function App() {
 

  return (
    <>
      {/* 6.1 - Criação de componente */}
      <Welcome/>
      {/* 6.2 - Expressão do JSX */}
      <BomDia/>
      {/* 6.3 - Componente dentro de componente */}
      <Pai/>
      {/* 6.4 - Props */}
      <Descricao nome="Gabe" idade={19} />
      {/* 6.5 - Desestruturação de props */}
      <Cachorro nome="Deby" raca="Yorkshire"/>
      {/* 6.6 - useState -> hook */}
      <Counter/>
      {/* 6.7 - múltiplos estados */}
      <UserInfoForm/>
      {/* 6.8 - Eventos */}
      <Button/>
      {/* 6.9 - Passando funções de manipulação de eventos como props */}
      <PaiFunction/>
      {/* 6.10 - Eventos de form */}
      <Form/>
      {/* 6.11 - Renderização condicional */}
      <RenderCondicional user="Gabe"/>
      {/* 6.12 - Expressão ternária */}
      <LoginButton loggedIn={false}/>
      <LoginButton loggedIn={true}/>
      {/* 6.13 - Render nulo */}
      <Warning warning={"algo"}/>
      {/* 6.14 - Listas Chaves */}
      <NumberList numbers={[1,2,3,4,5]}/>
      {/* 6.15 -  Estilos por atributo*/}
      <BotaoEstilizado/>
      {/* 6.16 - Estilos globais */}
      <BotaoAzul/>
      {/* 6.17 - Exercícios*/}
      {/* EX - 1 */}
      <Greeting name={"Gabe"}/>
      {/* EX - 2 */}
      <CounterEX/>
      {/* EX - 3 */}
      <TaskList task={[
        {id: 1, text: 'texto'},
        {id: 2, text: 'texto2'}
      ]}/>
    </>
  )
}

export default App
