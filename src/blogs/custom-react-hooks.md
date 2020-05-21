---
title: "Custom hooks in React"
date: "2020-05-21"
description: "How to use custom hooks in your React projects"
---

Custom React hooks are an extremely powerful tool to utilise in your applications. When I first heard about them I thought they sounded pretty intimidating and so I avoided exploring them for quite some time. When I finally got round to it I realised that custom React hooks are just regular javascript functions that have access to the built-in React hooks. They also have a naming convention whereby they should be prefixed with `use` e.g. `useCustomHook` and they must follow the <a class="link" href="https://reactjs.org/docs/hooks-rules.html">rules of hooks</a>. Another way to think about them is that they are regular React components but instead of returning a view they return data. Let's take a look at an example in closer detail.
<br/>
<br/>

For this example I am going to create a custom hook that will fetch some data for my application. The name of this hook is going to be `useFruit` and it's going to look like this:

```javascript
function useFruit() {
  const [data, setData] = useState([])

  async function getFruitData() {
    const fruit = fetch("https://fakefruitendpoint.com/get")
    setData(fruit)
  }

  useEffect(() => {
    getFruitData()
  }, [getFruitData])

  return { data }
}
```

As you can hopefully tell, this is just a javascript function that fetches and returns some data. This will function the same as if this code was written directly within a component, but now we have extracted the logic so that it can be used in multiple components throughout the application.
<br/>
<br/>
Here's how we might use this custom hook:

```jsx
function MyComponent() {
  const { data } = useFruit(counter)

  return (
    <>
      {data.map(fruit => (
        <p>{fruit}</p>
      ))}
    </>
  )
}
```

As you can see, we use custom React hooks the same as we use regular hooks in React.

## Why bother?

You might be asking why we need custom React hooks since all of my custom React hook logic could have been done directly within the component. The answer is that you don't <strong>need</strong> custom React hooks but they do help with code reusability. Your usage of custom hooks may vary depending on your coding style but for those who prefer to separate logic from views custom hooks are an essential way to do so.
