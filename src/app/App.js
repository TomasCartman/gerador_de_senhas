import './App.css'
import PasswordText from '../components/PasswordText'
import ButtonGroups from '../components/ButtonsGroup'
import { useState } from 'react'

function App() {
  const [password, setPassword] = useState('')

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <PasswordText>{password}</PasswordText>
      <ButtonGroups generatePassOnClick={setPassword} />
    </div>
  )
}

export default App