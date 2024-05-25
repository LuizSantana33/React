import './App.css'
import InputFatec from './components/InputFatec/InputFatec'
import ButtonFatec from './components/buttonfatec/ButtonFatec'

function App() {
  return (
    <div>
      <p>Entre em contato</p>
      <InputFatec  type="text" entrada="Nome" texto=''/>
      <InputFatec  type="email" entrada="E-mail" texto=''/>
      <InputFatec  type="text" entrada="Telefone" texto=''/>
      <ButtonFatec label="Fatec: Enviar mensagem" type="button" />
    </div>
  )
}

export default App
