import {Datas} from "./Data";
import {useSearchParams , Link,Outlet,useLocation} from "react-router-dom";
const Books = () => {
    const [search,setSearch] = useSearchParams()
    const location = useLocation()
    return(
        <>
            <div className="d-block">
                <input value={search.get("filter") || ""} onChange={e => {
                    let filter = e.target.value
                    if (filter) {setSearch({filter})}
                    else setSearch({})
                }} type="search" placeholder="جستوجو کنید"/>
                <ul>
                    {Datas.filter(data => {
                        let filter = search.get("filter")
                        if (!filter) return true ;
                        let name = data.name.toLowerCase()
                       return name.startsWith(filter.toLowerCase())
                    })
                        .map(data => (
                           <div className="d-block">
                              <Link to={`/book/${data.number}${location.search}`}>{data.name}</Link>
                           </div>
                        ))
                    }
                </ul>
            </div>
            <Outlet/>
        </>
    )
}
export default Books