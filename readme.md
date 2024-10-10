<!-- *React basics: -->

# React Basics and Fundamentals:

   React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of an application. Let's explore some of the key concepts and fundamentals of React, drawing on information from the official React documentation and MDN.

## Components: 
    
   In React, UI elements are encapsulated into reusable components. Components can be either functional or class-based. Functional components are simple JavaScript functions that return JSX (JavaScript XML) to define the component's structure and behavior. Class-based components are ES6 classes that extend the React.Component class and define a render() method to return JSX.

## JSX: 
    
   JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It provides a concise and expressive way to describe the structure of UI components. JSX elements can be rendered directly or used as children or properties of other JSX elements.

## Props: 
    
   Props (short for properties) are used to pass data from a parent component to its child components. Props are read-only and should not be modified within the child component. They are passed as attributes to JSX elements and accessed within the component using the props object.

## State:
    
   State represents the mutable data within a component. Unlike props, state is managed internally by the component and can be updated using the setState() method. When the state changes, React automatically re-renders the component and its children to reflect the updated state.

## Lifecycle Methods: 
    
   React components have lifecycle methods that allow you to perform actions at specific stages of a component's life, such as when it is mounted, updated, or unmounted. Some commonly used lifecycle methods include componentDidMount(), componentDidUpdate(), and componentWillUnmount().

## Event Handling: 

   React provides a declarative way to handle user interactions through event handling. You can attach event handlers to JSX elements using camel-cased event names, such as onClick or onChange. Event handlers are defined as methods within the component and can access the component's state and props.

## Conditional Rendering: 

   React allows you to conditionally render components or elements based on certain conditions. This can be achieved using JavaScript expressions within JSX, such as the ternary operator or logical operators.
Lists and Keys: When rendering lists of elements in React, it is important to assign a unique key prop to each item. Keys help React identify which items have changed, been added, or been removed, improving performance and maintaining component state.

These are just some of the basics and fundamentals of React. To dive deeper into React and explore more advanced topics, I recommend referring to the official React documentation and MDN, which provide comprehensive guides, tutorials, and references on React development.

Remember, React is a powerful and flexible library that enables developers to build dynamic and interactive user interfaces. With practice and exploration, you can leverage React's capabilities to create robust and efficient web applications.


Note that we can only work with a single fragment in our App.jsx file

## React Hooks:
Is the way that we have to create functional components using react features and quitting the need of use classes for every component:

## useState():
Is a react hook that let us create a stateful variable, it give us the door (setter function) to update the value of that var directly to the virtual DOM, [name,setName]

so a react hook is more like a <stong>portal</strong> that let us <strong>set</strong> the information inside our components and let us create adaptable components that will be asociated a stateful variable.

all stopped on 1:58:08
