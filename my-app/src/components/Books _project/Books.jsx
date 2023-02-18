import {Datas} from "./Data";
import {Link,useSearchParams} from "react-router-dom";

const Books = () => {
    const [search,setSearch] = useSearchParams()

    return(
        <>
            <div className="d-block">
                <input onChange = {} value={search.get("title")} type="search" placeholder="جستوجو کنید"/>
                {
                    // یاد گرفتن جاوا اسکریپ
                    Datas.filter().map(data => (
                        <Link to={`/book/${data.number}`} className="d-block fs-4" key={data.number}>{data.name}</Link>
                    ))
                }
            </div>
        </>
    )
}
export default Books