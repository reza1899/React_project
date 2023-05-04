import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import * as yup from "yup"
const AddContact = ({ loading, updatePage, setUpdatePage }) => {
    const [error , setError] = useState()
    const [groups, setGroups] = useState([])
    const [userInfo, setUserInfo] = useState({
        fullName: "",
        mobile: "",
        image: "",
        email: "",
        group: ""
    }
    )
    const Schema = yup.object().shape({
        fullName : yup.string().required("fullName is not valid"),
        mobile : yup.number().required("mobile number is required"),
        image: yup.string().url().required("image is required"),
        email:yup.string().email().required("email is required"),
        group : yup.string().required("group is required"),

    })
    const Navigate = useNavigate()
    useEffect(() => {
        const getGroups = async () => {
            try {
                await axios.get("http://localhost:9000/groups").then(data => {
                    setGroups(data.data)
                }
                )
            }
            catch (err) {
                console.log(err)
            }
        }
        getGroups()

    }, [])
    const postUser = async () => {
        try {
            await Schema.validate(userInfo, {abortEarly:false})
            axios.post("http://localhost:9000/contacts", userInfo).then(response => {
                console.log(response)
                setUserInfo({})
                setUpdatePage(!updatePage)
                Navigate("/contacts")
            }
            )
        }
        catch (err) {
            console.log(err.inner)
            setError(err)
        }
    }
    const setcontactinfo = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        }
        )
    }
    return (
        <>
            {loading ? <Spinner /> :
                <div className="row m-0 d-flex justify-content-around">
                    <div className="col-md-4 col-12 p-5 text-center">
                        <input name="fullName" value={userInfo.fullName} onChange={setcontactinfo}
                            className="form-control" type="text" placeholder="نام و نام خانوادگی"  />
                        <input name="image" value={userInfo.image} onChange={setcontactinfo}
                            className="form-control my-2" type="text" placeholder="آدرس عکس"  />
                        <input name="mobile" value={userInfo.mobile} onChange={setcontactinfo}
                            type="tel"
                            placeholder="09xxxxxxxxx"
                            pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                            className="form-control"
                            />
                        <input name="email" value={userInfo.email} onChange={setcontactinfo} className="form-control my-2" type="email" placeholder="ایمیل"  />
                        <select name="group"  value={userInfo.group} onChange={setcontactinfo} className="form-control"
                        >
                            <option value="">انتخاب گروه</option>
                            {
                                groups.length > 0 &&
                                groups.map(group => (
                                    <option key={group.id} value={group.id}>{group.name}</option>
                                )

                                )
                            }
                        </select>
                        <div className="p-3">
                            <button style={{ color: "#f99a5f" }} className="btn btn-outline-secondary ms-2" onClick={postUser}>ساخت مخاطب</button>
                            <button style={{ color: "#F4DB7D" }} className="btn btn-outline-secondary" onClick={() => Navigate("/contacts")}>انصراف</button>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 text-center">
                        <img className="w-75" src="https://img.freepik.com/free-vector/online-registration-concept_23-2147980112.jpg?w=2000" alt="register" />
                    </div>
                </div>
            }
        </>
    )
}
export default AddContact