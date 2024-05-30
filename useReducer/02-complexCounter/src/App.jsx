import { useState } from 'react'
import ComplexCounter from "./Components/ComplexCounter"
import ComplexCounter2 from './Components/ComplexCounter2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ComplexCounter/> */}
       <ComplexCounter2/>
    </>
  )
}

export default App
