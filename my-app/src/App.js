import {useState} from "react"
import './App.css'
import {Link, Outlet} from "react-router-dom"
import {
    Navbar,
} from "./components";

function App() {
  const [contacts , setContacts] = useState([])
  const [loading , setLoading] = useState (true)
return(
  <div className="App">
    <Navbar />
      <Link to="/about">about</Link>
      {" "}
      <Link to="/books">books</Link>
      <Outlet/>
  </div>
)
}

export default App;
