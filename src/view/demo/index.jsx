import React from "react";
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment } from "../../store/features/counter";

export default function Demos() {

  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
  <>
    <div className='page-body'>{count}-- <button onClick={()=>{dispatch(increment())}}>increment</button> <button onClick={()=>{dispatch(decrement())}}>decrement</button></div>
  </>
  )
}
