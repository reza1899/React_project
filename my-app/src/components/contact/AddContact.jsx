import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import * as yup from "yup"
import {useFormik} from "formik"
const AddContact = ({ loading, updatePage, setUpdatePage }) => {
    const [groups, setGroups] = useState([])
    // const [userInfo, setUserInfo] = useState({
    //     fullName: "",
    //     mobile: "",
    //     image: "",
    //     email: "",
    //     group: ""
    // }
    // )
    const Schema = yup.object().shape({
        fullName : yup.string().required("fullName is not valid"),
        mobile : yup.number().required("mobile number is required"),
        image: yup.string().required("image is required"),
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
    const postUser =  (userInfo) => {
        try {
            axios.post("http://localhost:9000/contacts", userInfo).then(response => {
                console.log(response)
                setUpdatePage(!updatePage)
                Navigate("/contacts")
            }
            )
        }
        catch (err) {
            console.log(err.inner)
            console.log(err);

        }
    }
    // const setcontactinfo = (e) => {
    //     setUserInfo({
    //         ...userInfo,
    //         [e.target.name]: e.target.value
    //     }
    //     )
    // }
    const formik = useFormik({
        initialValues : {
            fullName : "",
            mobile : "",
            image : "",
            email : "",
            group : "",
        },
        validationSchema : Schema,
        onSubmit : values => {
            console.log(values)
            postUser(values)
        }
    })
    return (
        <>
            {loading ? <Spinner /> :
                <div className="row m-0 d-flex justify-content-around">
                    <div className="col-md-4 col-12 p-5 text-center">
                            <form onSubmit={formik.handleSubmit}>
                            <input id="fullName" name="fullName" onBlur={formik.handleBlur} value={formik.values.fullName} onChange={formik.handleChange}
                                   className="form-control" type="text" placeholder="نام و نام خانوادگی"  />
                                {formik.touched.fullName && formik.errors.fullName ? <span className="text-danger fs-5 fw-bold">{formik.errors.fullName}</span> : null}

                            <input id="image" name="image" value={formik.values.image} onChange={formik.handleChange}
                                   className="form-control my-2" type="text" placeholder="آدرس عکس"  />
                                {formik.touched.image && formik.errors.image ? <span className="text-danger fs-5 fw-bold">{formik.errors.image}</span> : null}

                                <input id="mobile" name="mobile" value={formik.values.mobile} onChange={formik.handleChange}
                                   type="number"
                                   placeholder="09xxxxxxxxx"
                                   className="form-control"
                            />
                                {formik.touched.mobile && formik.errors.mobile ? <span className="text-danger fs-5 fw-bold">{formik.errors.mobile}</span> : null}

                                <input id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className="form-control my-2" type="email" placeholder="ایمیل"  />
                                {formik.touched.email && formik.errors.email ? <span className="text-danger fs-5 fw-bold">{formik.errors.email}</span> : null}

                                <select id="gorup" name="group"  value={formik.values.group} onChange={formik.handleChange} className="form-control"
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
                                {formik.touched.group && formik.errors.group ? <span className="text-danger fs-5 fw-bold">{formik.errors.group}</span> : null}
                                <div className="p-3">
                                    <button type="submit" style={{ color: "#f99a5f" }} className="btn btn-outline-secondary ms-2">ساخت مخاطب</button>
                                    <button style={{ color: "#F4DB7D" }} className="btn btn-outline-secondary" onClick={() => Navigate("/contacts")}>انصراف</button>
                                </div>
                            </form>
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