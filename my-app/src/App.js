import {useState,useEffect} from "react"
import './App.css'
// react-confirm-alert
// end react-confirm-alert
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
    const [newContacts ,setNewContacts] = useState([])
    const [updatePage,setUpdatePage] = useState(false)
    const [loading , setLoading] = useState (false)
   useEffect(()=> {
      const fetch = async () => {
          try {
              setLoading(true)
             await axios.get("http://localhost:9000/contacts").then( data => {
                      setContacts(data.data)
                      setNewContacts(data.data)
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
    const refresh = () => {
        window.location.reload(true)
    }
    // console.log(api)
return(
  <div className="App">
    <Navbar  contacts = {contacts} setNewContacts= {setNewContacts}  />
      <Routes>
          <Route path="/" element={<Navigate to="/contacts"/>}/>
          <Route path = "/contacts" element={<Contacts contacts={newContacts} loading={loading}/>}/>
          <Route path ="/add" element={<AddContact loading ={loading} updatePage={updatePage} setUpdatePage={setUpdatePage}/>}/>
          <Route path ="/edit/:contactId" element={<Edit loading={loading} refresh ={refresh}/>}/>
          <Route path = "/contacts/:contactId" element={<ViewContact  loading={loading}/>}/>
      </Routes>
  </div>
)
}

export default App;
