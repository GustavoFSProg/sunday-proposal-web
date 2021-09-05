import { useState } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

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

  return (
    <div>
      <h1>Entrou na Register</h1>

      <form onSubmit={handleUsers}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Nome"
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <br />

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Senha"
        />
        <br />
        <br />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default Register
