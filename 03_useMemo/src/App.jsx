import React , { useState , useMemo, useEffect} from 'react'
import './App.css';


function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)


  const doubleNumber = useMemo( () => {
    return slowFunction(number)
  }, [number] )

  //this approach isn't optimised since react re-renders each hooks if one
  //state of the hook gets changed. So, here even if we change the value of
  //themeStyle this `slowFuntion()` method gets called and this big function 
  //get executed each time. So, to avoid this redundant process we've wrapped this method
  //with the useMemo() hook
 // const doubleNumber = slowFunction(number);

  const themeStyles =  useMemo(() => { 
    return {
      backgroundColor : dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark]) 

  //by doing these approach themeStyles object re-renders even if its property
  //values doesn't get changed (it re-render if we even change the value of input field)
  //that's why we've wrapped this variable within the useMemo() hook to cache its input values for specific output values 
  // const themeStyles =  
  //    {
  //      backgroundColor : dark ? 'black' : 'white',
  //      color: dark ? 'white' : 'black'
  //    }


  useEffect(()=>{
       console.log('Theme Changed')
  }, [themeStyles])

  return (
    <>
     <div className='w-screen h-screen bg-brown-500'>

         <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
         <button onClick={ () => setDark( prevDark => !prevDark)}>Change Theme</button>
         <div style={themeStyles}>{doubleNumber}</div>

     </div>
      
    </>
  )
}

function slowFunction(num){
  console.log('Calling Slow Function')
 // console.log(`num = ${num}`)

  for (let i = 0; i <= 1000000; i++) { }
  return num * 2;
}

export default App

// (QUESTION) : Here , if all the react hooks get re-renders if one of its hook's 
// state get changed then why does the `number` variable doesn't get 
// reset to zero when the components re-renders?

// (ANSWER) :  In your React component, the number variable is managed by the useState hook.
//  Whenever the component re-renders due to changes in state or props, React will re-run the 
//  entire function component, including the useState calls. However, React is smart enough to
//   preserve the state values between re-renders unless you explicitly change them using setNumber.
// In your case, the number state is only updated when you call setNumber, typically in response to 
// the onChange event of the input field. So, when the component re-renders, the number state retains 
// its value because it's not being explicitly reset anywhere in the component.
// To explicitly reset the number state to zero when the component re-renders, you would need to call 
// setNumber(0) somewhere in the component, possibly within a useEffect hook with an empty dependency 
// array to ensure it runs only once after the initial render. However, based on your current code, there's
//  no such logic that resets number to zero on re-render.

