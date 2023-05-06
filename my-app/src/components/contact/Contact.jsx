import {ROS,NARANJI} from "../../helpers/Colors"
import {useNavigate} from "react-router-dom";
import {deleteCard} from "../../services/services";
import { confirmAlert } from "react-confirm-alert";
const Contact = ({contact}) => {
    const navigate = useNavigate()
    const seeCard = useNavigate()
    const refresh = () => {
        window.location.reload(true)
    }
    const confirmDelete = (contact) => {
        confirmAlert( {
            customUI : ( {onClose} ) => {
                return (
                    <div style={{backgroundColor : "#9DAAF2"}} className="p-4">
                        <h1 style={{color:"#f99a5f"}}>حذف مخاطب</h1>
                        <p>ایا میخواهی مخاطب {contact.fullName}را پاک کنی ؟؟</p>
                        <button className="btn  btn-success" onClick={() => {
                            refresh()
                            deleteCard(contact.id);
                             onClose();
                        }}>بله</button>
                        <button className="btn btn-danger" onClick={onClose}>خیر</button>
                    </div>
                )
            }
        })
    }
    return (
        <>
            <div className="col-md-6">
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
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                                <button className="btn bg-warning" onClick={() => {seeCard(`/contacts/${contact.id}`)}}><i className="fa fa-eye"/></button>
                                <button className="btn bg-info my-2" onClick={() => navigate(`/edit/${contact.id}`)}><i className="fa fa-pen"/></button>
                                <button className="btn bg-danger" onClick={() => {
                                    confirmDelete(contact)
                                }}><i className="fa fa-trash"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact