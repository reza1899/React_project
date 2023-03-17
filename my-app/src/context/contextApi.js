import React from "react";
const contexts = React.createContext({
    loading : false,
    setLoading : () => {},
    contacts : {},
    setContacts : () => {},
    updatePage : false,
    setUpdatePage : () => {},
    newContacts : {},
    setNewContacts : () => {},

})
export default contexts;