import { useRef , useEffect , useState} from "react"
const useReff = () => {
    const [name , setName] = useState ("") 
    const ref = useRef("")
    useEffect (() => {
        ref.current = name
    }, [name]) 
    
return (
    <>
    <div className="bg-success p-5 text-center m-5">
        برای فکوس کردن روی اینپوت دکمه را کلیک کنید
    </div>
    <p className="text-white text-center">نام قغلی شما برابر است با: {name}</p>
    <p className="text-white text-center">نام قبلی شما برابر است با: {ref.current}</p>
    <input type="text" placeholder="my input" value={name} onChange = {e => {setName(e.target.value)}} className="me-5 " ref={ref} />
    <button className="bg-danger btn m-4" >
        click for focus
    </button>
    </>
) 
}
export default useReff