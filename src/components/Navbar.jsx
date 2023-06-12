import SearchContact from "./contact/SearchContact";
import {ROS , ZARD} from "../helpers/Colors"
import {useNavigate , useLocation} from "react-router-dom";
import colorFull from "../hoc/colorFull";
const Navbar = () => {
    const Navigate = useNavigate()
    const location = useLocation()
    return (
            <nav className="navbar navbar-expand-lg shadow-lg p-3"> 
            <div className="container mt-2">
                <div className="row m-0 w-100">
                    <div className="col p-0 d-flex">
                        <i style={{color:ROS}} className="fas fa-address-book fs-4 ms-2"/>
                        <h6 style={{color: ZARD}} className="d-flex">وب اپلیکیشن مدیریت{" "} <div style={{color:ROS, marginRight:"4px", fontWeight:"bolder"}}>مخاطبین</div> </h6>
                        <button className="btn btn-primary mx-5" onClick={()=> Navigate("/add")}>ساخت مخاطب جدید</button>
                    </div>
                    {
                        location.pathname === "/contacts" ? (<div className="col p-0">
                        <SearchContact/>
                    </div>) : null
                    }
                </div>
            </div>
        </nav>

    )
}
export default colorFull(Navbar)