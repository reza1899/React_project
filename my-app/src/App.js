import {useState} from "react"
import './App.css'
import {
    Navbar,
    Contacts,
} from "./components";

function App() {
  const [contacts , setContacts] = useState([])
  const [loading , setLoading] = useState (true)
return(
  <div className="App">
    <Navbar />
      <Contacts contacts= {contacts} loading = {loading}/>
  </div>
)
}

export default App;
