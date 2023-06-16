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

Congratulations !! You have completed your first React JS app.

