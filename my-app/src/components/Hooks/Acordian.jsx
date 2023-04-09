import { useRef, useEffect, useState , useReducer ,useImperativeHandle , forwardRef ,useMemo, useDeferredValue} from "react"
let Funcyref = (props , ref) => {
  const inputRef = useRef()
  useImperativeHandle (ref , () => ({
    focus : () => {
     alert("yse") 
    }
  }))
  return <input ref={inputRef} {...props} />
}
Funcyref = forwardRef(Funcyref)

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

const inputRef = useRef(null)

const handleRef = () => {
inputRef.current.focus()
}

// end useImperativeHandle

// use useDeferredValue

const [value , setValue] = useState()
const handleValue = (e) => {
  setValue(e.target.value)
}
const List = ({value}) => {
  const deferredValue = useDeferredValue(value)
  const  list = useMemo(() => {
    const l = []
    for (let i = 0 ; i < 20000 ; i ++){
      l.push (<div key={i}>{deferredValue}</div>)
    }
    return l
  },[deferredValue])
  useEffect (() => {
    console.log (`this is value : ${value}`)
    console.log (`this is deferred value is :${deferredValue} `)
    },[value,deferredValue])
  return list
}

// end useDeferredValue

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
              <Funcyref ref={inputRef} type="text" placeholder="useImperativeHandle" />
              <button className="btn btn-success p-2 mx-4" onClick={() => {
                handleRef()
              }}>focus on input</button>
             </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
             useTransition 
            </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="accordion-body d-block text-center">
              {/*  */}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            useDeferredValue
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
             <input type="text" placeholder="number" value={value} onChange={handleValue}/>
              {value !== 0 ? <List value = {value} /> : null}
              این هوک برای به تعویق انداختن یکسری محاسبات میباشد که برای بالا بردن سرعت وب سایت کارایی دارد
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Acordian