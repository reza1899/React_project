import {NARANJI} from "../../helpers/Colors"
import Contact from "./Contact"
import Spinner from "../Spinner"
const Contacts = ({newContacts , loading}) => {
    return(
        <>
        {loading ? <Spinner/> : (
        <div>
                {newContacts.length < 1 ? (
                   <div className="text-center">
                     <h3 style={{color:NARANJI}} className="">...مخاطب یافت نشد</h3>
                    <img className="w-25 rounded-3" src={require("../../assets/R.gif")} alt="a gif" />
                     <h1 style={{color:NARANJI}}>اگر میخواهید وب را مشهاده نمایید لطفا به ادرس گیت من که در پایین درج شده بروید و پروژه را کلون کنید و ران کنید 
                         <br />
                          Username: https://github.com/reza1899
                         <br />
                         For Run : 
                         1- npm i
                         2- cd src , cd server , npm i
                         3- npm start
                        </h1>
                   </div>
                ) : (
                   <div className="row m-0">
                           {newContacts.map((c) => <div className="col-6 p-0 d-flex justify-content-around">
                               <Contact key={c.id} contact={c}/>
                           </div> )}
                   </div>
                )}
            </div>) }
        </>
    )
}
export default Contacts