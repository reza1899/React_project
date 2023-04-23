import { useState  ,useContext} from "react"
import contextApi from "./../../context/contextApi" 
import {ROS} from "../../helpers/Colors"
import {clear} from "@testing-library/user-event/dist/clear";
const SearchContact = () => {
    const {contacts , setNewContacts} = useContext(contextApi)
    let FilteredTimeout ;
    const searching = (query) => {
        clearTimeout(FilteredTimeout)
      FilteredTimeout = setTimeout(() => {setNewContacts(contacts.filter ((contact) => {
          return contact.fullName.toLowerCase().includes(query)
      }))},1000)

    }
    return (
        <div>
            <form className="d-flex" >
                <input onChange={event => searching(event.target.value)}  className="form-control w-50 me-2 border-2" type="search" placeholder="جستوجو کنید" aria-label="Search" />
                    <button style={{backgroundColor:ROS}} className="btn me-2" type="submit">
                        <i className="fas fa-search text-white"/>
                    </button>
            </form>
        </div> 
    )
}
export default SearchContact