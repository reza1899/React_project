import {useEffect, useState} from "react";
import {getContact,getGroupId} from "../../services/services";
import {useNavigate, useParams} from "react-router-dom";
import {NARANJI, ROS} from "../../helpers/Colors";
const ViewContact = () => {
    const navigate = useNavigate()
   const [state , setstate] = useState({
       contact : {},
       group : {}
   })
    const {contactId} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try{
                const {data : contact} = await getContact(contactId)
                const {data : group} = await getGroupId(contact.group)
                setstate({
                        ...state,
                        contact : contact,
                        group: group
                    }
                    )
            }
            catch (err)  {
                console.log(err.message)
            }
        }
        fetchData()
    },[])
    const {contact,group} = state
    return (
        <>
            {Object.keys(contact).length > 0 && (
                <>
                    <div className="col-md-6 d-block">
                        <div style={{backgroundColor:ROS}} className="container card my-2">
                            <div className="card-body">
                                <div className="row align-items-center d-flex justify-content-around">
                                    <div className="col-md-4 col-sm-4 ">
                                        <img className='rounded-3 img-fluid' src={contact.image} alt="user" />
                                    </div>
                                    <div className="col-md-7 col-sm-7">
                                        <div>
                                            <ul className="list-group">
                                                <li style={{backgroundColor:NARANJI}} className="list-group-item">نام و نام خانوداگی:{" "}<span className="fw-bold">{contact.fullName}</span></li>
                                                <li style={{backgroundColor:NARANJI}} className="list-group-item">شماره موبایل: {" "} <span className="fw-bold">{contact.mobile}</span></li>
                                                <li style={{backgroundColor:NARANJI}} className="list-group-item">آدرس ایمیل : {" "} <span className="fw-bold">{contact.email}</span></li>
                                                <li style={{backgroundColor:NARANJI}} className="list-group-item">دسته:{" "}<span className="fw-bold">{group.name}</span></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary m-4" onClick={() => {
                                navigate ("/contacts")
                            }}>بازگشت به صفحه اصلی</button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default ViewContact