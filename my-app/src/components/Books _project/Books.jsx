import {Datas} from "./Data";
import {Link} from "react-router-dom";

const Books = () => {
    return (
        <>
            <div className="d-block">
                <input  type="search" placeholder="جستوجو کنید"/>
                {
                   
                        Datas.map(data => (
                        <Link to={`/book/${data.number}`} className="d-block fs-4" key={data.number}>{data.name}</Link>
                    ))
                }
            </div>
        </>
    )
}
export default Books
