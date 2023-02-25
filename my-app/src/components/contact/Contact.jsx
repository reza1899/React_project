import {ROS,NARANJI} from "../../helpers/Colors"
const Contact = () => {
    return (
        <>
            <div className="col-md-6">
                <div style={{backgroundColor:ROS}} className="container card my-2">
                    <div className="card-body">
                        <div className="row align-items-center d-flex justify-content-around">
                            <div className="col-md-4 col-sm-4">
                                <img className='rounded-3 img-fluid' src="https://via.placeholder.com/200" alt="user" />
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <div>
                                    <ul className="list-group">
                                        <li style={{backgroundColor:NARANJI}} className="list-group-item">نام و نام خانوداگی:{" "}<span className="fw-bold">رضا پاکزاد</span></li>
                                        <li style={{backgroundColor:NARANJI}} className="list-group-item">شماره موبایل: {" "} <span className="fw-bold">09137603370</span></li>
                                        <li style={{backgroundColor:NARANJI}} className="list-group-item">آدرس ایمیل : {" "} <span className="fw-bold">reza.pk.lu9@gmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                                <button className="btn bg-warning"><i className="fa fa-eye"/></button>
                                <button className="btn bg-info my-2"><i className="fa fa-pen"/></button>
                                <button className="btn bg-danger"><i className="fa fa-trash"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact