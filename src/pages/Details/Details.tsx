import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import { Container, Button, Ul, Li } from './styles'

// interface IUsers {
//   _id: string
//   name: string
//   email: string
//   password: string
// }

function Details() {
  const [users, setUsers]: any = useState([])
  const history = useHistory()

  async function handleDetails() {
    const id = localStorage.getItem('ID')

    const { data } = await api.get(`/get-id/${id}`)

    setUsers(data)

    return data
  }

  function navigateHome() {
    history.push('/')
  }

  useEffect(() => {
    handleDetails()
  }, [])

  return (
    <>
      <Container>
        <h2 style={{ color: 'blue', fontFamily: 'Arial', marginBottom: '35px' }}>Home</h2>
        <Button onClick={navigateHome} type="button">
          Home
        </Button>

        <br />

        <Container>
          <Ul>
            <Li>
              <b>Nome: </b> {users.name}
            </Li>
            <Li>
              <b>Email: </b>
              {users.email}
            </Li>
          </Ul>
        </Container>
      </Container>
    </>
  )
}

export default Details
