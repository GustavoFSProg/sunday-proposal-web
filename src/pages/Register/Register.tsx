import { useState } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'
import { Container, Input, Button } from './styles'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function handleUsers(e: any) {
    e.preventDefault()

    try {
      const data = { name, email, password }

      await api.post('/register', data)

      history.push('/')

      return alert('Tudo certo')
    } catch (error) {
      return alert('ERRO')
    }
  }

  function navigateHome() {
    history.push('/')
  }

  return (
    <Container>
      <h2 style={{ color: 'blue', fontFamily: 'Arial', marginBottom: '35px' }}>
        Cadastro de Usuários
      </h2>
      <form
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        onSubmit={handleUsers}
      >
        <div style={{ marginBottom: '8px', float: 'left', marginLeft: '-275px' }}>Nome:</div>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Nome"
        />
        <br />
        <div style={{ marginBottom: '8px', float: 'left', marginLeft: '-275px' }}>Email:</div>

        <Input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <div style={{ marginBottom: '8px', float: 'left', marginLeft: '-275px' }}>Senha:</div>

        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Senha"
        />
        <br />

        <Button type="submit">Cadastrar</Button>
      </form>

      <br />
      <Button
        onClick={navigateHome}
        style={{ background: 'green', width: '27%', color: 'yellow' }}
        type="button"
      >
        Home
      </Button>
    </Container>
  )
}

export default Register
