import { useState } from 'react'
import './App.css'
import Users from './components/Users'

function App() {
  const [users,setUsers] = useState([
    {id:1,userName:"Kapil Sarkar"},
    {id:2,userName:"John Cena"},
  ])
  return (
    <>
      <h2>USER-MANAGEMENT APP</h2>
      <div>
        <Users users={users} />
      </div>
    </>
  )
}

export default App
