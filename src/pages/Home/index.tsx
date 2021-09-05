import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../services/api'

interface IUsers {
  _id: string
  name: string
  email: string
  password: string
}

function Home() {
  const [users, setUsers] = useState([])

  async function handleUsers() {
    const { data } = await api.get('/')

    setUsers(data)

    console.log(`Data: ${data}`)

    return data
  }

  useEffect(() => {
    handleUsers()
  }, [])

  return (
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
  )
}

export default Home
