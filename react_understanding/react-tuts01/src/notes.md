Babel acts as a compiler/transpiler - helping to write the HTML inside javascript
Html written inside javascript is called as JSX

What is JSX
What is props

The data passed as an attribute in the functional component. The data that is passed as an Object literal in the function is called as prop
The e value of the prop is dynamic and we use {} brackets for display

The index.html resides in the public folder - entry point for the app

The default project folder also consists of index.js

npm vs npx
npm will install the package and then execute it whereas npc directly executes without installing the package

Destructuring — it is getting individual pieces from a data structure like arrays or object literals

states are variables which are displayed on the user interface so we take it with a specific syntax provided by react
usState() hook for dealing with states. useState() creates the state in React. It always returns an array with two elements. First is the value of the
state which can be a primary variable or an object literal. The second value is a function which allows you to change the state value.

Please check the example where the state is also initialized with a lazy method.

Lazy initialization refers to the practice of delaying the creation or initialization of a resource until it is actually needed.
In the context of React and the useState hook, lazy initialization typically involves initializing state with a function instead of a direct value.
In React, when you use the useState hook, you can provide an initial state value.
Instead of providing a static value as the initial state, you can pass a function that returns the initial state.
This function is only called once, the first time the component is rendered.

//check out the "LazyInitial.js" for the above lazy initialization concept.
