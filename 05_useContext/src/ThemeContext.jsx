import React , { useContext , useState} from 'react'


//creating two different contexts
const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

//custom hooks(to avoid writing `useContext()` in the `FunctionContextComponent` component)
export function useTheme(){
    return useContext(ThemeContext)
}

//custom hooks(to avoid writing `useContext()` in the `FunctionContextComponent` component)
export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
}

//basically here we're wrapping the component into the context provider and storing it to
//the `ThemeProvider` function

//here , children means `FunctionContextComponent` component

export function ThemeProvider ( {children} ){
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme(){
      setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return(

        <ThemeContext.Provider value = {darkTheme}>
           <ThemeUpdateContext.Provider value={toggleTheme}>
            {/* children means components  */}
             {children}
           </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>

    )
}