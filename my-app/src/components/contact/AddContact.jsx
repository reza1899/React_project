import Spinner from "../Spinner";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
const AddContact = ({loading , userInfo ,setUserInfo}) => {
    const [groups ,setGroups] = useState([])
    const Navigate = useNavigate()
   useEffect(() => {
     const getGroups = async () => {
         try {
             await axios.get("http://localhost:9000/groups").then(data =>{
                 setGroups(data.data)
                 }
             )
         }
         catch (err) {
             console.log(err)
         }
     }
     getGroups()
   },[])
    console.log(groups)
    return(
        <>
            {loading ? <Spinner/> :
                <div className="row m-0 d-flex justify-content-around">
                    <div className="col-md-4 col-12 p-5 text-center">
                        <input name="fullName" value={userInfo.fullName} onChange={e => {
                           setUserInfo({
                               ...userInfo.fullName,
                               fullName : e.target.value
                           })
                        }}
                        className="form-control" type="text" placeholder="نام و نام خانوادگی" required={true}/>
                        <input name="image" value={userInfo.image} onChange={e => {
                            setUserInfo({
                                ...userInfo.image,
                                image : e.target.value
                            })
                        }} className="form-control my-2" type="text" placeholder="آدرس عکس" required={true}/>
                        <input name="phoneNumber" value={userInfo.phoneNumber} onChange={e => {
                            setUserInfo({
                                ...userInfo.phoneNumber,
                                phoneNumber : e.target.value
                            })
                        }} type="tel"
                               placeholder="09xxxxxxxxx"
                               pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                               className="form-control"
                               required={true}/>
                        <input name="email" value={userInfo.email} onChange={e => {
                            setUserInfo ({
                                ...userInfo.email,
                                email : e.target.value
                            })
                        }} className="form-control my-2" type="email" placeholder="ایمیل" required={true}/>
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