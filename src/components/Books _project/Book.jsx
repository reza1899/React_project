// import {useParams, useNavigate} from "react-router-dom";
// import {Datas,msr} from "./Data";
// const Book = () =>{
//     const Id = useParams()
//     const book = Datas.find(data => (data.number === parseInt(Id.bookId)))
//     let reza = useNavigate()
//     const handelEvent = () =>{
//         msr(book.number)
//         reza("/books")
//     }
//     return(
//         <>
//             <div className="text-center fs-4 d-block">
//                 <h1>
//                     {book.name}
//                 </h1>
//                 <h1>
//                     {book.price }
//                 </h1>
//                 <h1>
//                     {book.due}
//                 </h1>
//                 <button onClick={handelEvent}>حذف کتاب</button>
//
//             </div>
//         </>
//     )
// }
// export default Book