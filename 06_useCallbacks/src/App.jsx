import { useState , useCallback} from 'react'

import './App.css'
import List from './List'

function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  //here, we've used the `useCallback()` hook. Bcz without this hook whenever
  //the App() function re-created (bcz of the change in any hook state like `number` or `dark`)
  //then the getItems function gets re-created and pass to the 'List' component evenif 
  //the `number` state remains same. So, in this case if we even toggle the theme ,
  //a brand new function passed to the 'List' component and it gets re-rendered causing 
  //performance issue of the application. So, to avoid this issue we've wrapped
  //the getItems function within useCallback() hook and set the dependecies to `number`
  //so, in this case if the number changes then the getItems function will passed to the
  //'List' component and make it rendered . Remember, `useMemo()` ? if we use this hook here
  //then the array will set to the getItems variable insted of the function bcz this how useMemo()
  //hook works but with the `useCallback()` hook it returns the same function that it takes
  //that's allow us to pass variable within that function

  //right approach
  const getItems = useCallback( (incrementor)=> {
    return [number + incrementor, number+1+incrementor, number+2+incrementor]
  }, [number] )

  //wrong approach
  // const getItems =  ()=> {
  //   return [number, number+1, number+2]
  // }
 
  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color : dark ?  '#FFF' : '#333'
  }

  //fixing the style related issue

   // Style for the input field
   const inputStyle = {
    color : dark ?  '#FFF' : '#333', // Ensures text color is black regardless of the theme
    backgroundColor: dark ? '#444' : '#FFF', // Adjust background color as needed
    border: '1px solid #ccc', // Add border for better visibility
    borderRadius: '3px', // Add border radius for aesthetics
    padding: '5px' // Add padding for better spacing
  }


  return (
    <div className='min-h-screen w-full text-2xl flex flex-col items-center justify-center border border-s-black rounded-3xl gap-2' style={theme}>

        <input

         type="number" 
         value={number}
         onChange={ e => setNumber(parseInt(e.target.value))}
         style={inputStyle} // Apply custom input style
         />

        <button className='border border-s-gray-500 rounded-3xl' onClick={()=> setDark(prevDark => !prevDark)}>Toggle Theme</button>
 
       <List getItems={getItems} />
        
      
    </div>
  )
}

export default App

