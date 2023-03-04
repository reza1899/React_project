import Spinner from "../Spinner";
import {useNavigate} from "react-router-dom";

const AddContact = ({loading , userInfo}) => { 
    const Navigate = useNavigate()
    return(
        <>
            {loading ? <Spinner/> :
                <div className="row m-0 d-flex justify-content-around">
                    <div className="col-md-4 col-12 p-5 text-center">
                        <input name="fullName" className="form-control" type="text" placeholder="نام و نام خانوادگی" required={true}/>
                        <input name="image" className="form-control my-2" type="text" placeholder="آدرس عکس" required={true}/>
                        <input name="phoneNumber" type="tel"
                               placeholder="09xxxxxxxxx"
                               pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                               className="form-control"
                               required={true}/>
                        <input name="email" className="form-control my-2" type="email" placeholder="ایمیل" required={true}/>
                        <input className="form-control" list="datalistOptions" id="exampleDataList"
                               placeholder="انتخاب گروه" required={true}/>
                        <datalist id="datalistOptions">
                            <option value="San Francisco"/>
                            <option value="New York"/>
                            <option value="Seattle"/>
                            <option value="Los Angeles"/>
                            <option value="Chicago"/>
                        </datalist>
                        <div className="p-3">
                            <button style={{ color: "#f99a5f" }} className="btn btn-outline-secondary ms-2">ساخت مخاطب</button>
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
export default AddContact