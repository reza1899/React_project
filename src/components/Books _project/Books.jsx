// import {Datas} from "./Data";
// import {Link,useSearchParams} from "react-router-dom";
//
// const Books = () => {
//     const [searchParams,setSearchParams] = useSearchParams()
//     return (
//         <>
//             <div className="d-block">
//                 <input value={searchParams.get("filter")} onChange={event => {
//                     let filter = event.target.value
//                     if (filter) {
//                         setSearchParams({filter}) 
//                     }else {
//                         setSearchParams({})
//                     }
//                 }} type="search" placeholder="جستوجو کنید"/>
//                 {
//                    Datas.filter(data => {
//                        let filter = searchParams.get("filter")
//                        if (!filter) return true
//                            else {
//                            let  name = data.name.toLowerCase()
//                            return name.startsWith(filter.toLowerCase())
//                        }
//                        }
//                    )
//                         .map(data => ( 
//                         <Link to={`/book/${data.number}`} className="d-block fs-4" key={data.number}>{data.name}</Link> 
//                     ))
//                 }
//             </div>
//         </>
//     )
// }
// export default Books
