import SearchContact from "./contact/SearchContact";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow-lg p-3">
            <div className="container mt-2">
                <div className="row m-0 w-100">
                    <div className="col p-0 d-flex">
                        <i style={{color:"purple"}} className="	fas fa-address-book fs-4 ms-2"/>
                        <h6 className="d-flex">وب اپلیکیشن مدیریت{" "} <div style={{color:"purple", marginRight:"4px", fontWeight:"bolder"}}>مخاطبین</div> </h6>
                    </div>
                    <div className="col p-0">
                        <SearchContact/>
                    </div>
                </div>
            </div>
        </nav>

    )
}
export default Navbar