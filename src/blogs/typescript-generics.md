---
title: "Typescript: What are Generics?"
date: "2020-04-19"
description: "What are Generics in Typescript?"
---

Generics in Typescript are a way to make your code more flexible without having to repeat your code with repeated functions, allowing you to keep your codebase more DRY.

Let's take a look at some examples.

Here is a basic function that adds an item to an array.

```javascript
function addToArray(array: Array<number>, num: number) {
  return array.push(num)
}
```

As you can see, this function takes in an array of numbers and a new number to add to the array, and returns the array with that number added to the end.

But what if we wanted to add a string to an array of strings? Well we could write a second function such as this one:

```typescript
function addToArrayOfStrings(array: Array<string>, string: string) {
  return array.push(string)
}
```

Whilst this would work fine, it would start to get tedious if we had to do this for every new type of array we were dealing with. We also have the option to use the 'any' type in Typescript, which would accept any type of array, but we want to avoid using this wherever possible so that we can keep our codebase typesafe.

This is where generics come in to play. Observe the following function:

```typescript
function addToArray<TypeOfItem>(array: Array<TypeOfItem>, item: TypeOfItem) {
  return array.push(item)
}
```

And this is how it could be called:

```typescript
addToArray<number>([1, 2, 3], 4)
addToArray<string>(["1", "2", "3"], "4")
```

So what happened here? We used a generic. In this case, I called the generic 'TypeOfItem', but it can be called whatever you want. One convention is for a generic to be called 'T'. The generic represents the type that we want to use, but we've moved where that type is defined from the function that we created to the place where we called the function. This makes our function more adaptable to any use cases that we may have for it.

If you want to have multiple generics then they can be added with a comma separated list like so:

```typescript
function addToArray<TypeOfArray, TypeOfNewItem>(
  array: Array<TypeOfArray>,
  item: TypeOfNewItem
) {
  return array.push(item)
}

addToArray<number, string>([1, 2, 3], "4")
```
