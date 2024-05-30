import React, { useState } from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext'

// In the `App.jsx file`, FunctionContextComponent is imported without curly braces because 
// it is exported as the default export from its respective file. When a module exports a 
// single entity as the default export, you can import it without using curly braces and 
// specifying the exact name. This is why you see:  `import { ThemeProvider } from './ThemeContext'`

// On the other hand, `ThemeProvider` is imported with curly braces because it is not the 
// default export from its respective file. In the `ThemeContext.jsx` file, `ThemeProvider` is 
// exported as a named export along with other exports `(useTheme and useThemeUpdate)`. When 
// you have multiple named exports from a module, you need to use curly braces to specify 
// which named export you want to import. Hence, you see: `import { ThemeProvider } from './ThemeContext'`



function App() {
  

  return (
    <>
    {/* here, we're wrapping the `FunctionContextComponent` within the `ThemeProvider` context */}
       <ThemeProvider>
         <FunctionContextComponent/>
       </ThemeProvider>

    </>
  )
}

export default App
