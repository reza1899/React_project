import {useState,useEffect} from "react"
import './App.css'
import axios from "axios";
import contextApi from "./context/contextApi" 
import {Routes,Route,Navigate} from "react-router-dom"
import {
    Navbar,
    Contacts,
    AddContact,
    Edit,
    ViewContact,
    Acordian
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
  <contextApi.Provider value = {{
    loading,
    setLoading,
    contacts,
    setContacts,
    updatePage,
    setUpdatePage,
    newContacts,
    setNewContacts,
    refresh,
  }}>
    <div className="App">
    <Navbar />
      <Routes>
          <Route path="/" element={<Navigate to="/contacts"/>}/>
          <Route path = "/contacts" element={<Contacts newContacts={newContacts} loading={loading}/>}/>
          <Route path ="/add" element={<AddContact loading ={loading} updatePage={updatePage} setUpdatePage={setUpdatePage}/>}/>
          <Route path ="/edit/:contactId" element={<Edit loading={loading} refresh ={refresh}/>}/>
          <Route path = "/contacts/:contactId" element={<ViewContact  loading={loading}/>}/>
          <Route path = "/acordian" element={<Acordian/>} />
      </Routes>
  </div>
  </contextApi.Provider>
)
}

export default App;
