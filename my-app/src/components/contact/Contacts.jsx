import {NARANJI} from "../../helpers/Colors"
import Contact from "./Contact"
import Spinner from "../Spinner"
const Contacts = ({contacts , loading}) => {
    return(
        <>
        {loading ? <Spinner/> : (
        <div>
                {contacts.length < 1 ? (
                   <div className="text-center">
                     <h3 style={{color:NARANJI}} className="">...مخاطب یافت نشد</h3>
                    <img className="w-25 rounded-3" src={require("../../assets/R.gif")} alt="a gif" />
                   </div>
                ) : (
                   <div className="row m-0">
                           {contacts.map((c) => <div className="col-6 p-0 d-flex justify-content-around">
                               <Contact key={c.id} contact={c}/>
                           </div> )}
                   </div>
                )}
            </div>) }
        </>
    )
}
export default Contacts