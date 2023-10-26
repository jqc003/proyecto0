import {useState} from "react"  
import './App.css'
import Inicio from './componnents /inicio'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
const handleSubmit = async (e) => {
  e.preventDefault()
  console.log("hola")
}
  return (
    <>
    {isLoggedIn ? (
      <Inicio />
    ) : (
      <>
      <form onSubmit={handleSubmit}>
    <div>
      <label> username: </label>
      <input type="text"/>
    </div>
    <div>
      <label> Pasword: </label>
      <input type="Password"/>
      </div>
      <div>
        <button type = "submit">Login</button>
      </div>
      </form>
    </>
    )}
      </>
       
  )
}

export default App
