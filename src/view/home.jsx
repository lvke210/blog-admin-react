
import React from 'react'
import { useSelector } from "react-redux"
export default function Home() {
  const {count} = useSelector(state => state.counter)
  return (
    <div>Welcome{count}</div>
  )
}
