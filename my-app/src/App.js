import {useState} from "react"
import './App.css'
import {Outlet} from "react-router-dom"
import {
    Navbar,
} from "./components";

function App() {
  const [contacts , setContacts] = useState([])
  const [loading , setLoading] = useState (true)
return(
  <div className="App">
    <Navbar />
      <Outlet/>
  </div>
)
}

export default App;
