import {useParams} from "react-router-dom";
import {Datas,hazf} from "./Data";
import data from "bootstrap/js/src/dom/data";
const Book = () =>{
    const Id = useParams()
    const book = Datas.find(data => (data.number === parseInt(Id.bookId)))
    return(
        <>
            <div className="text-center fs-4 d-block">
                <h1>
                    {book.name}
                </h1>
                <h1>
                    {book.price }
                </h1>
                <h1>
                    {book.due}
                </h1>
                <button onClick={() => {
                    hazf(data.number)
                }
                }></button>
            </div>
        </>
    )
}
export default Book