import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import { Container, Button, Ul, Li } from './styles'

interface IUsers {
  _id: string
  name: string
  email: string
  password: string
}

function Home() {
  const [users, setUsers] = useState([])
  const history = useHistory()

  async function handleUsers() {
    const { data } = await api.get('/')

    setUsers(data)

    console.log(`Data: ${data}`)

    return data
  }

  function navigatgeRegister() {
    history.push('/register')
  }

  useEffect(() => {
    handleUsers()
  }, [])

  return (
    <>
      <Container>
        <h1> Home</h1>
        <Button onClick={navigatgeRegister} type="button">
          Register
        </Button>

        <Container>
          {users.map((item: IUsers) => {
            return (
              <Ul key={item._id}>
                <Li>
                  <b>Nome: </b> {item.name}
                </Li>
                <Li>
                  <b>Email: </b>
                  {item.email}
                </Li>
              </Ul>
            )
          })}
        </Container>
      </Container>
    </>
  )
}

export default Home
