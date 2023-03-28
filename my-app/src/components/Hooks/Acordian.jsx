import { useRef, useEffect, useState , useReducer ,useImperativeHandle} from "react"
const Acordian = () => {
  
  // useRef

  const [name, setName] = useState("")
  const ref = useRef("")
  useEffect(() => {
    ref.current = name
  }, [name])

  // end useRef

//  useReducer
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
// end  useReducer

// useImperativeHandle

const example = (props , ref) => {
const inputRef = useRef()
useImperativeHandle (ref => ({
  focus : () => {
    alert("Hi")
  }
}))
}

// end useImperativeHandle

  return ( 
    <>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             useRef 
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div className="bg-success p-5 text-center m-5">
                برای فکوس کردن روی اینپوت دکمه را کلیک کنید
              </div>
              <p className="text-center">نام قغلی شما برابر است با: {name}</p>
              <p className="text-center">نام قبلی شما برابر است با: {ref.current}</p>
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
              با این هوک میتونی از اجرا شدن دستورات و توابعی که نیاز نداری که اجرا بشن جلو گیری کنی و در نتیجه سرعت سایت رو ببری بالا
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
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
             useLayoutEffect
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              این هوگ دقیقا عین useeffect میمونه با این تفاوت که سریع تر از useeffect اجرا میشه و به صورت سنکرون هست
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            useImperativeHandle
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
             در این هوک ما میتوانیم بیایم ref را شخصی سازی کنیم یعنی بیاییم و بگوییم وقتی از این ref استفاده میشود چه اتفاقی بیوفتد :
             <div className="d-block m-4 text-center">
              <input ref={inputRef} type="text" placeholder="useImperativeHandle" />
              <button className="btn btn-success p-2 mx-4" onClick={() => {
               inputRef.current.focus()
              }}>focus on input</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Acordian