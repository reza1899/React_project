import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState , useContext} from "react";
import {getContact, getGroups,updateContact} from "../../services/services";
import contextApi from "./../../context/contextApi"
import Spinner from "../Spinner";
import { useImmer } from "use-immer";         
const Edit = () => {
    const {loading , setLoading , refresh }  = useContext(contextApi)
    const Navigate =useNavigate()
    const {contactId} = useParams()
    // const [groups , setGroups] =useState([])
    // const [contactInfo , setContactInfo] = useState()
    const [state , setstate] = useImmer({
        groups : [],
        contactInfo : {}
    })
    useEffect(() =>{
        const fetchData = async () => {
            try {
                setLoading(true) 
                const {data : data} = await getContact(contactId) 
                const {data : data2} = await getGroups()

                setstate(draft => {
                    draft.groups = data2
                    draft.contactInfo = data
                })
                // setGroups(data2)
                // setContactInfo(data)
                setLoading(false)
                }
            catch (err) {
                setLoading (true)
                console.log(err.message)
                setLoading (false)
            }
            }
            fetchData()
    },[])
    const setcontactinfo = (e) => {
        setstate({
                ...state,
            contactInfo : {
                    ...state.contactInfo,
                [e.target.name] : e.target.value
            }
            }
        )
    }
    return(
        <>
            {loading ? <Spinner/> :
                <div className="row m-0 d-flex justify-content-around">
                    <div className="col-md-4 col-12 p-5 text-center">
                        <input name="fullName" value={state.contactInfo.fullName} onChange={setcontactinfo}
                               className="form-control" type="text" placeholder="نام و نام خانوادگی" required={true}/>
                        <input name="image" value={state.contactInfo.image} onChange={setcontactinfo}
                               className="form-control my-2" type="text" placeholder="آدرس عکس" required={true}/>
                        <input name="mobile" value={state.contactInfo.mobile} onChange={setcontactinfo}
                               type="tel"
                               placeholder="09xxxxxxxxx"
                               pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                               className="form-control"
                               required={true}/>
                        <input name="email" value={state.contactInfo.email} onChange={setcontactinfo} className="form-control my-2" type="email" placeholder="ایمیل" required={true}/>
                        <select name="group" required={true} value={state.contactInfo.group} onChange={setcontactinfo} className="form-control"
                        >
                            <option value="">انتخاب گروه</option>
                            {
                                state.groups.length > 0 &&
                                state.groups.map(group => (
                                        <option key={group.id} value={group.id}>{group.name}</option>
                                    )

                                )
                            }
                        </select>
                        <div className="p-3">
                            <button style={{ color: "#f99a5f" }} className="btn btn-outline-secondary ms-2" onClick={() => {
                                 updateContact(contactId ,state.contactInfo)  
                                 Navigate("/contacts") 
                                 refresh()
                            }}>ویرایش مخاطب</button>
                            <button style={{ color: "#F4DB7D" }} className="btn btn-outline-secondary" onClick={() => Navigate("/contacts")}>انصراف</button>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 text-center">
                        <img className="w-75" src="https://img.freepik.com/free-vector/online-registration-concept_23-2147980112.jpg?w=2000" alt="register"/>
                    </div>
                </div>
            }
        </>
    )
}
export default Edit