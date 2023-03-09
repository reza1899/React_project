import {useState,useEffect} from "react"
import './App.css'
import axios from "axios";
import {Routes,Route,Navigate} from "react-router-dom"
import {
    Navbar,
    Contacts,
    AddContact,
    Edit,
    ViewContact
} from "./components";

function App() {
  const [contacts , setContacts] = useState([])
    const [updatePage,setUpdatePage] = useState(false)
  const [loading , setLoading] = useState (false)
   useEffect(()=> {
      const fetch = async () => {
          try {
              setLoading(true)
             await axios.get("http://localhost:9000/contacts").then( data => {
                      setContacts(data.data)
                  }
              )
              setLoading(false)
          }

          catch(err) {
              console.log(err.message)
              setLoading(false)
          }
      }
      fetch()
   },[updatePage])
    // console.log(api)
return(
  <div className="App">
    <Navbar />
      <Routes>
          <Route path="/" element={<Navigate to="/contacts"/>}/>
          <Route path = "/contacts" element={<Contacts contacts={contacts} loading={loading}/>}/>
          <Route path ="/add" element={<AddContact loading ={loading} updatePage={updatePage} setUpdatePage={setUpdatePage}/>}/>
          <Route path ="/edit" element={<Edit/>}/>
          <Route path = "/contact/:contactId" element={<ViewContact />}/>
      </Routes>
  </div>
)
}

export default App;
