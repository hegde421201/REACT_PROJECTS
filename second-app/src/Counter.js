import React,{ useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);

    function handleClick(){
        setCount(1+count);
    }

    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    );

}

export default Counter;

/**
In this example, we create a Counter component in React using JSX. 
The component stores the current count in a state variable named count and updates the count using a function called handleClick when the user
clicks the Increment button. 
Although the JSX code resembles HTML, we've included JavaScript code within curly braces {} to add interactivity to the component. 
Specifically, we use the count and handleClick variables to display the current count and handle user input. 

By using JSX, we can create highly interactive components that respond to user input in real-time. 
This makes it easy to build dynamic web applications that provide an excellent user experience.
 */

