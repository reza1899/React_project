import {useState,useEffect} from "react"
import './App.css'
import axios from "axios";
import contextApi from "./context/contextApi" 
import {Routes,Route,Navigate} from "react-router-dom"
import {ToastContainer, toast} from "react-toastify"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
    Navbar,
    Contacts,
    AddContact,
    Edit,
    ViewContact,
    Acordian,
    Seson12
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
    <HelmetProvider>
        <div className="App">
            <Helmet>
                <title>
                    دوره جامع ری اکت
                </title>
            </Helmet>
            <ToastContainer rtl={true} position = {"top-right"} theme={"colored"}/>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/contacts"/>}/>
                <Route path = "/contacts" element={<Contacts newContacts={newContacts} loading={loading}/>}/>
                <Route path ="/add" element={<AddContact loading ={loading} updatePage={updatePage} setUpdatePage={setUpdatePage}/>}/>
                <Route path ="/edit/:contactId" element={<Edit loading={loading} refresh ={refresh}/>}/>
                <Route path = "/contacts/:contactId" element={<ViewContact  loading={loading}/>}/>
                <Route path = "/acordian" element={<Acordian/>} />
                <Route path ="/seson12" element ={<Seson12/>}></Route>
            </Routes>
        </div>
    </HelmetProvider>
  </contextApi.Provider>
)
}

export default App;
