import { useState } from 'react'
// import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import { Container, Button, Input } from './styles'

// interface IUsers {
//   _id: string
//   name: string
//   email: string
//   password: string
// }

function Details() {
  const [users, setUsers]: any = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function handleDetails() {
    const id = localStorage.getItem('ID')
    const { data } = await api.get(`/get-id/${id}`)

    setUsers(data)
    // setName(users.name)
    // setEmail(users.email)
    // setPassword(users.password)

    return data
  }

  async function handleUpdate(event: any) {
    event.preventDefault()
    try {
      const id = localStorage.getItem('ID')

      const data = { name, email, password }

      console.log(id)

      await api.put(`/update/${id}`, data)

      return alert('Deu certo')
    } catch (error) {
      return alert('ERRO')
    }
  }

  function navigateHome() {
    history.push('/')
  }

  handleDetails()
  // useEffect(() => {
  //   handleDetails()
  // }, [])

  return (
    <>
      <Container>
        <h2 style={{ color: 'blue', fontFamily: 'Arial', marginBottom: '35px' }}>Home</h2>
        <Button onClick={navigateHome} type="button">
          Home
        </Button>

        <br />

        <Container>
          <form onSubmit={handleUpdate}>
            <Input
              type="text"
              name="name"
              placeholder={users.name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder={users.email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <Input
              type="password"
              placeholder={users.password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <Button type="submit">Editar</Button>
          </form>
        </Container>
      </Container>
    </>
  )
}

export default Details
