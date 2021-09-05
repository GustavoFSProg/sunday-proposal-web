import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

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
      <div>
        <h1>Entrou na Home</h1>

        {users.map((item: IUsers) => {
          return (
            <ul key={item._id}>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.password}</li>
            </ul>
          )
        })}
      </div>

      <button onClick={navigatgeRegister} type="button">
        Register
      </button>
    </>
  )
}

export default Home
