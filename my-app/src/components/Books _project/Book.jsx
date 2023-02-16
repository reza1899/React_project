import {useParams} from "react-router-dom"
import { Datas } from "./Data"
const Book = () => {
    const id =useParams()
    const getbook = Datas.find(data => (data.number === parseInt(id.bookId)))
    return(
        <>
        <h3>
            {getbook.due}
        </h3>
        </>
    ) 
}
export default Book