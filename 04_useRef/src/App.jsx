import React, { useEffect, useState , useRef} from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')


 /*******************  ===   ********************/

    // usecases of `useRef` hook:
    // 1. to count how many numbers of times the browser reloads
    // 2. reference elements inside the html codes

  /*******************  ===   ********************/



  /*******************  ===   ********************/
  
  //FIRST USE CASE: 

  //here's the question is how to count the number of times the screen has rendered?
  //to complete the task you've used the follwing method then it'll cause a infinte render loop
  //wrong approach:

  // const [renderCount, setRenderCount] = useState(0)

  // useEffect( () => {
  //   setRenderCount(prevRenderCount => prevRenderCount + 1)
  // })
  // when the state changed in this hook it'll be again causing re-rendering & it'll create a infite loop of re-rendering
  //because through the `useEffect()` it'll set the state value to +1 whenever the viewport loads and 
  //bcz of the changes in the state it'll again re-render the viewport & this cycle will be fall into an inifinte loop

    /*******************  ===   ********************/



    /*******************  ===   ********************/

    //So the solution is to use `useRef` hook bcz this hook returns an object with a property 
    //named `current` and we can change or update this `current` property & it won't cause re-rendering
    //the componets like other hooks states

    /*******************  ===   ********************/



    /*******************  ===   ********************/

    //correct approach

    //const renderCount = useRef(0)

    // useEffect( ()=> {
    //   renderCount.current = renderCount.current + 1;
    // })
    //here, we're leaving the dependency portion of the hook empty so that the call back
    //withing this loop get called whenever the viewport reloads

     /*******************  ===   ********************/


     /*******************  ===   ********************/

       //SECOND USE CASE:
        // TASK : here we want to focus the input field whenever we clicked in the 'focus' button
        // here, we'll use useRef() hook to achieve the task. 1st we'll assign useRef() to a variable
        // & then we'll assign that variable to 'ref' attribute of the target html element

     /*******************  ===   ********************/



     /*******************  ===   ********************/


        const inputRef = useRef()
        //we can also store the previous `name` state value through the useRef()
        const prevName = useRef()
 
        function focus(){
           console.log(inputRef.current)
           inputRef.current.focus()
           //here , the 'ref' attribute will assign the input element to the inputRef variable 
           //which is a object and the element will be stored to its property named 'current'

           //some onChange events also can be done using useRef() hook but which is considered a bad practice to work with
           //inputRef.current.value = 'some value'
        }

        useEffect( ()=> {
          prevName.current = name
        }, [name])


     /*******************  ===   ********************/


  //  >>>>>>  FOR MORE INFO CHECK THE NOTES REGARDING REACT HOOKS <<<<<<<<<<


  return (
    <>
       <div  className='w-screen h-screen flex flex-col justify-center items-center'>
         <input ref={inputRef} className='mb-4 p-1' value={name} onChange={ e => setName(e.target.value)} />
          <div>My name is {name} & which is used to be {prevName.current}</div>
           {/* <div>The number of times the screen has rendered : ${renderCount.current}</div> */}
           <button onClick={ focus }>Focus</button>
       </div> 
       
    </>
  )
}

export default App
