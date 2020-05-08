---
title: "Higher order components in React, explained"
date: "2020-05-07"
description: "What are higher order components in React and how can they be used to improve a codebase?"
---

Higher order components (HOC's) in React are a great tool to have in your toolbox. In order to understand them it is best to first take a look at regular higher order functions in javascript, if you understand how these work then you will be in great shape to understand higher order components.

## What are higher order functions in javascript

Higher order functions in javascript are when a function takes another function as one of its arguments. Lets take a look at an example.

```javascript
function executeY() {
  return "X does not exist"
}

function checkForX(executeY) {
  if (x) {
    //... do something else
  } else {
    return executeY()
  }
}

checkForX(executeY)
```

In this crude example we are passing the function `executeY` as an argument to the function `checkForX`. The function `checkForX` will perform some logic (in this case it is checking for the existence of the variable `x`) and then based on a condition (the existence of 'x') it may return `executeY`.
<br/>
<br/>

This very simple example is a great way to understand what higher order components in React do - they take another component as an argument. <strong>Higher Order Components are just regular javascript functions.</strong> Let's look at a real scenario where you might use this method in React. A common scenario in an application is to have pages that require user authentication in order to access them. One way we might achieve this is with some conditional logic within the page component. For example:

```jsx
function SecurePage({ children }) {
  if (!isAuthenticated) {
    // return redirect user to login page
  }

  return { children }
}

export default SecurePage
```

I'm using pseudo code here to demonstrate that we might use some conditional logic within the component to check if they are authenticated. If they are not, we will redirect them to the login page and they will never see the children of `SecurePage`. This method works fine but if what if you have multiple pages that all require authentication? Soon you will be repeating yourself several times throughout the application by writing the same 'check for authentication' logic in each page component. In the interest of keeping the codebase DRY, we can improve on this method by using a higher order component. Let's take a look at what this might look like.

```jsx
function withAuth(Component) {
  if (!isAuthenticated) {
    // return redirect user to login page
  }

  return class AuthenticatedComponent extends React.Component {
    render() {
      return <Component {...props} />
    }
  }
}

export default withAuth
```

What we have done here is created a function which contains the 'check for authentication' logic that was previously in each individual page component that required authentication. This new function `withAuth` takes in a component as a parameter, and it will return a class component that renders the component passed to the HOC if the user is authenticated. Now the authentication logic only needs to be in one location so if we ever want to change it up or fix any bugs we only have to make the change in one place.
<br/>
<br/>
The last piece of the puzzle is implementing the higher order component that we have just created. Let's take a look at how we can do that.
<br/>
<br/>
In order to implement the higher order component we simply change from this:

```jsx
export default SecurePage
```

to this:

```jsx
export default withAuth(SecurePage)
```

We've changed the export statement to export our Higher Order Component with the `SecurePage` component as an argument. Now whenever securePage is implemented in our application it will be rendered by the `withAuth` function.

## Closing Thoughts

Whilst HOC's in React are a useful skill to know, they're not something that I would use that often. The main reason for this is that since the introduction of hooks in react, solutions the previously required the use of HOC's can now be achieved in an easier to digest and maintain method using hooks. The main benefit of a HOC is that it provides an easier way to share logic between class components. Hooks introduced an even easier way of sharing logic, so hooks are now my go-to method for almost all cases where previously a HOC would have been used.
