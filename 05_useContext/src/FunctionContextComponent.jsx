import React  from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'


//here , we're creating a component and accessing the value `darkTheme` and the function
// `toggleTheme` from the context provider
function FunctionContextComponent() {
   //accessing the value of `darkTheme` through `useContext()` 
   const darkTheme = useTheme()
   console.log(darkTheme);
   //accessing the function of `toggleTheme` through `useContext()`
   const toggleTheme = useThemeUpdate()
   console.log(toggleTheme);
   const themeStyles = {

        backgroundColor: darkTheme ? '#333' : '#CCC',
        color : darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'

   }

  return (

     <>
         <button className='border border-s-gray-300 rounded-2xl bg-black text-white text-xl h-14 w-22 p-2' onClick={toggleTheme}>Toggle Theme</button>
         <div className='h-20 max-w-30 rounded-3xl' style={themeStyles}>Function Theme</div>
     </>
    
  )
}

export default FunctionContextComponent
