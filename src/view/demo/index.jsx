import React from "react";
import { useSelector,useDispatch } from "react-redux"
import { decrement, increment } from "../../store/features/counter";
import { changeTitle } from "../../store/features/titleSlice";

export default function Demos() {

  const {count,title} = useSelector(state => state.counter)
  const { title2 } = useSelector(state => state.titled)
  const dispatch = useDispatch()
  return (
  <>
    <div className='page-body'>
      {count}-{title}- <button onClick={() => {dispatch(increment())}}>increment</button> <button onClick={() => {dispatch(decrement())}}>decrement</button>

      <div>
        {title2} -- <button onClick={()=>{dispatch(changeTitle(count))}}>change title</button>
      </div>
    </div>
    
  </>
  )
}
