import {useState} from "react"
import './App.css'
import {Routes,Route,BrowserRouter,Navigate} from "react-router-dom"
import {
    Navbar,
    Contact,
    Contacts,
    Spinner,
    SearchContact,

} from "./components";

function App() {
  const [contacts , setContacts] = useState([])
  const [loading , setLoading] = useState (false)
return(
  <div className="App">
    <Navbar />
      <Routes>
          <Route path="/" element={<Navigate to="/contacts"/>}/>
          <Route path = "/contacts" element={<Contacts contacts={contacts} loading={loading}/>}/>
      </Routes>
  </div>
)
}

export default App;
