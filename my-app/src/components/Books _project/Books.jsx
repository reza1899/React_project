import {Datas} from "./Data";
import {Outlet , Link} from "react-router-dom";
const Books = () => {
    return (
        <>
           <input type="search" placeholder="جستسوجو کنید"/>
          <div className="p-3">
              {Datas.map(data => (<Link className="d-block text-decoration-none" to={`/Book/${data.number}`} key={data.name} >{data.name}</Link>
              ))}
          </div>
            <Outlet/>
        </>
    )
}
export default Books