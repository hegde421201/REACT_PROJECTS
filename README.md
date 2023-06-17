# REACT PROJECTS FOR STUDY

## What is REACT ?

React is a JavaScript library for building user interfaces based on UI
components.

It is is known for its ability to react to changes in data and render the user interface accordingly.
It reacts to changes in state and props and updates the UI to reflect those changes.

React uses a virtual DOM to track changes to the user interface. When data changes, React updates the virtual DOM and compares it to the
previous version. It then calculates the minimum number of changes required to bring the real DOM up to date with the virtual DOM. This
approach makes React efficient and fast, even with large and complex user interfaces.

## What is Virtual DOM ?

The React JavaScript library uses a programming concept called the Virtual DOM. When a user interacts with a web page, the browser
updates the DOM (Document Object Model) to reflect those changes.
But, updating the DOM is a slow and expensive operation, especially for large and complex web pages. This is because the DOM is
represented as a tree data structure, and after a change is made, the updated element and its children must be re-rendered to update the
application's user interface (UI). This re-rendering of the UI, can be slow and contribute to performance issues.

To avoid these performance issues, React uses a Virtual DOM. The Virtual DOM is an in-memory representation of the actual DOM. It
is a lightweight JavaScript object that contains all the necessary properties and attributes of the elements on a web page. When a change
occurs in the user interface, React updates the Virtual DOM first, which is much faster than updating the actual DOM. Then, React compares the previous and updated Virtual DOMs and determines the minimum set of changes required to update the actual DOM. Finally, React applies
those changes in a batch update to the actual DOM.

## What are Components?

React components are self-contained modules used to create user interfaces. They are the building blocks, representing parts of a larger UI that can be reused throughout an application to improve efficiency and reduce code duplication.

Please see this file [Components](https://github.com/hegde421201/REACT_PROJECTS/blob/main/first-app/src/Components.js) which contains three components - header, main and footer functions. They are included to form the first React JS application.

In this example, we have three components: Header, Main, and Footer.
Each component is a building block that can be combined to create a more complex application. The 'Component' component uses these three
components to create a simple layout with a header, main content area, and footer.

Check the [index.js](https://github.com/hegde421201/REACT_PROJECTS/blob/main/first-app/src/index.js) file which includes this Components.js file

Congratulations !! You have completed your first React JS app.

## What is JSX ?

JSX (Javascript Script XML) is React's syntax for creating components.
It looks like HTML, but instead of just describing the structure of a webpage, you can also include JavaScript code to make your components dynamic and interactive.

Please see this file [Counter](https://github.com/hegde421201/REACT_PROJECTS/blob/main/second-app/src/Counter.js) which has a Counter component in React using JSX.

The component stores the current count in a state variable named count and updates the count using a function called handleClick when the user
clicks the Increment button.

Although the JSX code resembles HTML, we've included JavaScript code within curly braces {} to add interactivity to the component. Specifically, we use the count and handleClick variables to display the current count and handle user input.

By using JSX, we can create highly interactive components that respond to user input in real-time. This makes it easy to build dynamic web
applications that provide an excellent user experience.

Congratulations !! You have completed your second React JS app.

## What do you mean by props ?

In React, "props" is short for "properties" and is used to pass data from a parent component to a child component.

For example, a parent component could pass the string "Hello, world!" as a prop to a child
component that displays that text. Props can be any type of data, including strings, numbers, booleans, objects, and functions.

For example, consider the following component:

```
function Greetings(props) {
 return <h1>Hello, {props.name}!</h1>;
}
```

See the above example [PropsExample](https://github.com/hegde421201/REACT_PROJECTS/blob/main/second-app/src/PropsExample.js)

Here, the Greeting component takes a props parameter, which is an object
containing the name and params properties. The name property is used to render a
greeting message. Similarly, check the params property.

When the component is used, it can be passed a name prop like so:
<PropsExample name="Moto" params="Checking" />

In this example, the name prop is passed to the Greeting component with a value of "Moto". The component then renders the message "Hello, Moto!" using the name prop.

## What is ReactDOM.render() ?

ReactDOM.render() is a React method to render a React app to the web page.

ReactDOM.render() takes at least 2 parameters:

1. element (what we want to render)
2. container (where we want to render)

See the example [Application](https://github.com/hegde421201/REACT_PROJECTS/blob/main/third-app/src/index.js)

This js file content is rendered in the index.html file [here](https://github.com/hegde421201/REACT_PROJECTS/blob/main/third-app/public/index.html) in the public folder.

Anything between the opening and the closing div tag in the index.html is where React will render what we have created.
The <div id="root"></div> is the container for our entire application.

The Application is the component which returns the Person components which in turn contains heading2 (h2) element inside the HTML.
As we can see, we put the HTML element of h2 in the middle of Javascript's code as a parameter. That entire line of code is called JSX.
JSX is Javascript XML. JSX allows us to write HTML in REACT.

The other two components - Message and Testing are also children of the Application component. This concept is also called as Nested Components.
