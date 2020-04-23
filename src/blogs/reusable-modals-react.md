---
title: "Creating scalable, reusable modals in React"
date: "2023-04-20"
description: "How can we create reusable modals that scale in React? This article describes one method."
---

Modals are a very common user interface for displaying information on websites and web applications, so how can we go about creating them in React in an efficient way? My initial approach to modals in React was to create one Modal component that would act as a wrapper for any child components passed into it. It would look something like this:

```jsx
// Modal.js
return <Modal>{children}</Modal>
```

```jsx
// app.js

<Modal>
  <Form>...</Form>
</Modal>
```

I found this approach to be reasonable at first. I had a consistent look and feel to every modal and it was easy enough to drop in a new modal wherever I needed one. However, I began to run into issues when my applications would grow which led me to look for other solutions. The solution I am going to discuss in this article is one put forward by Dan Abramov, and after a few weeks of working with it I believe it is a solid approach.
<br/>
<br/>
The core concept is to have a global modal context that holds the current state of which modal should be displayed (if any) and the props that this modal needs. The Modal component selects which children to display based on the modal context state. Let's take a look at an example.
<br/>
<br/>
<strong>Note:</strong> in order to follow along with this example you will need to understand how `Context` and `useReducer` work.
<br/>
<br/>

## Creating the modal context

We'll start with the modal context. We're going to use the `useReducer` hook to manage our modal state.

```jsx
import React, { createContext, useContext, useReducer } from "react"

const ModalContext = createContext()
// I create a useModalContext custom hook which will be used to use this context
export const useModalContext = () => useContext(ModalContext)

function modalReducer(state, action) {
  switch (action.type) {
    case "hide":
      return {
        modalType: null,
        modalProps: {},
      }
    case "show":
      return {
        modalType: action.modalType,
        modalProps: action.modalProps,
      }
    default:
      return {
        ...state,
      }
  }
}

const initialState = {
  modalType: null,
  modalProps: {},
}

const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState)
  const { modalType, modalProps } = state

  return (
    <ModalContext.Provider value={{ dispatch, modalType, modalProps }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
```

As you can see, there are only two items in state that we need to keep track of. The first is the `modalType`. This is going to be a string value, for example "logout". I like to use an object to store the available values to prevent any mistypings. For example:

```jsx

export const modalTypes = {
  LOGIN: 'login',
  ADD_TASK: 'add_task',
  ...
}

```

I export this `modalTypes` object because it will be used throughout the application in our dispatch calls.
<br/>
<br/>
The second piece of state that the modal context is storing is the `modalProps`. This is an object that has all of the props that will be passed into the modal you want to display. Let's take a look at an example dispatch call to see how this is going to work.

```jsx
// homepage.js

const {dispatch} = useModalContext() // import dispatch from context

<Button
  onClick={() =>
    dispatch({
      type: "show",
      modalType: modalTypes.LOGIN,
      modalProps: { user, accessLevel: 1 },
    })
  }
>
  Login
</Button>
```

So here we have a login button somewhere in the application that when clicked will call the dispatch function from our gloabl modal context. I've passed in some made-up props such as a `user` object and an `access level` of `1`.
<br/>
<br/>

## Creating the base modal component

The next thing we want to do is create a Modal component that will be reused in all instances of modals throughout the application. Here's how this will look

```jsx
// the modals in this object have not yet been created
const MODALS = {
  LOGIN: LoginModal,
  ADD_TASK: AddTaskModal,
  /* other modals */
}

const Modal = () => {
  const { modalType, modalProps, dispatch } = useModalContext()

  if (!modalType) {
    return null
  }

  const SpecificModal = MODALS[modalType]

  return (
    <Outer>
      <Inner>
        <Close onClick={() => dispatch({ type: "hide" })}>close</Close>
        <SpecificModal {...modalProps} />
      </Inner>
    </Outer>
  )
}
```

The `Modal` component that we have created is fairly straightforward. It uses the modal context to bring in the current `modalType` and `modalProps` that are held in state, as well as the `dispatch` function. If there `modalType` is null then we return null and the modal component will not be displayed on the page. Otherwise, the component renders a modal within a styled container based on the `MODALS` object that also sits within this file.
<br/>
<br/>
This `MODALS` object stores keys that match the possible modal types with their corresponding modals (which we have not yet created). It then renders the modal along with its props. Here is an example of what the `LoginModal` might look like with some pseudo code:

```jsx
// LoginModal.js

function LoginModal(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin(){
    /* login logic here */
  }

  return(
    <div>
    <Form onSubmit={handleLogin}>
      <FormInput email={email}>
      <FormInput password={password}>
      <button type="submit">Login</button>
    <Form>
  </div>)
}

```

Now that we have all the necessary pieces the only step left is to add the `Modal` to our application and then start creating whatever modals we want.
<br/>
<br/>
In `App.js` we can add the Modal like so

```jsx
function App() {
  return (
    <Router>
      /* your other components here */
      <Modal />
    </Router>
  )
}
```

Whenever we want to create a new modal there are 3 steps to take.

1. Create the modal component such as the example I gave with `LoginModal.js`
2. Add your new modal as an option to `MODALS` object in `Modal.js`
3. Use the `dispatch` function somewhere in the application to display your modal

## Conclusion

The technique that I have laid out in this article is one that I find to be extremely useful for large scale applications. Whilst the initial setup might feel a little verbose, the payoff is worth it. With this approach it is extremely easy to add a modal anywhere in the application (even adding it in multiple locations if required) whilst always knowing exactly where in the component tree this modal exists.
