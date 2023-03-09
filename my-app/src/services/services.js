import axios from "axios";
export const getContacts = () => {
  return(axios.get("http://localhost:9000/contacts"))
}
export const getContact =  (contactId) => {
   return ( axios.get(`http://localhost:9000/contacts/${contactId}`))
}
export const getGroups = () => {
    return (
        axios.get("http://localhost:9000/groups")
    )
}
export const getGroupId = (groupId) => {
    return (
        axios.get(`http://localhost:9000/groups/${groupId}`)
    )
}