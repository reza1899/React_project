import { useRef, useEffect, useState , useReducer} from "react"
const Acordian = () => {
  const [name, setName] = useState("")
  const ref = useRef("")
  useEffect(() => {
    ref.current = name
  }, [name])



  const reducer = (state , action ) => {
  if (action.type === "INC") {
    return {number : state.number + 1}
  }else if (action.type === "DEC") {
    return {number : state.number - 1}
  } else {
    return state
  }
  }

    const [state , dispatch] = useReducer (reducer , {number : 0})


  return ( 
    <>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             Ref hook
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div className="bg-success p-5 text-center m-5">
                برای فکوس کردن روی اینپوت دکمه را کلیک کنید
              </div>
              <p className="text-white text-center">نام قغلی شما برابر است با: {name}</p>
              <p className="text-white text-center">نام قبلی شما برابر است با: {ref.current}</p>
              <input type="text" placeholder="my input" value={name} onChange={e => { setName(e.target.value) }} className="me-5 " ref={ref} />
              <button className="bg-danger btn m-4" >
                click for focus
              </button>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              memo hook 
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              nothing
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             useReducer
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body d-block text-center">
              <button className="btn btn-success p-1" onClick={() => {dispatch( {type : "INC"} )}}>اضافه کن</button>
              <p> {state.number} </p>
              <button className="btn btn-danger p-1" onClick={() => {dispatch({type : "DEC"})}}>کم کن</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Acordian