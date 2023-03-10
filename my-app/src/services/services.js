import axios from "axios";
// Contacts API
export const getContacts = () => {
  return(axios.get("http://localhost:9000/contacts"))
}
export const getContact =  (contactId) => {
   return ( axios.get(`http://localhost:9000/contacts/${contactId}`))
}
export const updateContact = (contactId,contactInfo) => {
    return ( axios.put(`http://localhost:9000/contacts/${contactId}` ,contactInfo)
    )
}
// End contacts API
// Groups API
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
//End Groups API
export const deleteCard =  (contactId) => {
    return ( axios.delete(`http://localhost:9000/contacts/${contactId}`))
}