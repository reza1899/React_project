import { useState  ,useContext} from "react"
import contextApi from "./../../context/contextApi" 
import {ROS} from "../../helpers/Colors"
const SearchContact = () => {
    const {contacts , setNewContacts} = useContext(contextApi)
    const [search , setSearch] = useState({text : ""})
    const searching = (event) => {
        setSearch({...search , text : event.target.value})
        const allContacts = contacts.filter ((contact) => {
            return contact.fullName.toLowerCase().includes(search.text)
        }) 
        if (search.text === "") {
           setNewContacts(contacts)
        } else {
            setNewContacts(allContacts)
        }
    }
    return (
        <div>
            <form className="d-flex" >
                <input onChange={searching} value ={search.text}  className="form-control w-50 me-2 border-2" type="search" placeholder="جستوجو کنید" aria-label="Search" />
                    <button style={{backgroundColor:ROS}} className="btn me-2" type="submit">
                        <i className="fas fa-search text-white"/>
                    </button>
            </form>
        </div> 
    )
}
export default SearchContact