import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function User() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const fetchUser = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      {users.length ? (
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
              style={{ cursor: 'pointer' }}
            >
              {user.username}
            </li>
          ))}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default User
