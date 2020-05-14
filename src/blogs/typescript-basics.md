---
title: "Typescript basics"
date: "2020-05-14"
description: "Getting to grips with Typescript to make your codebase more robust and easier to maintain."
---

Typescript is a fantastic subset of Javascript that enables type safety within your codebase. It pairs excellently with popular front-end frameworks such as React, Vue, and Angular. Here are some of the basics you need to know to get going.

## Available Types

Here are some of the most basic types that are built into the Typescript system.

```typescript
string // e.g. "hello"
number // e.g. 5
boolean // e.g. true
Array<T> // e.g. [1, 2, 3] - where T is number - Array<number>
```

## Assigning a Type

```typescript
const name: string = "Hello"
const age: number = 25
const hobbies: Array<String> = ["football", "exercise", "reading"]
const isMale: boolean = true
```

The simplest implementation of typescript is to define a type on a single variable. Note that this usually isn't required because typescript can infer the type based on the value given to the variable. For example `const name = "Lucy"` would be picked up as a `string` type by typescript without explicitly defining it as such.

## Creating an interface

```typescript
interface Person {
  name: string
  age: number
  hobbies: Array<String>
  isMale: boolean
}
```

An interface is a way of creating a typed structure for a piece of your code that has multiple variables, such as a javascript object. This is extremely useful for defining parameter types and return types in your functions. Here's an example of how you might use the Person interface above as a parameter in a function and define a string type as the return type:

```typescript
function sayName(person: Person): string {
  return `Hello ${person.name}` // name is a property on Person interface so this is fine
}
```

## Creating a type

```typescript
type Name = {
  length: number
  isSurname: boolean
}
```

A `type` type in typescript is very similar to an interface. One of the key differences is that a `type` can be created for a single property such as `type Name = string`.

## Generics

```typescript
function add<T>(thing: T) {
  return 1 + thing
}

add<number>(2)
add<string>("hello")
```

Generics are used to make our code more adaptable by inverting control of the type to the user of the function rather than the creator. I have <a class="link" href="/blogs/typescript-generics/">a blog on Generics</a> which goes into more detail.

## Extending interfaces

```typescript
interface Animal {
  alive: boolean
}

interface Organism {
  age: number
}

interface Human extends Animal, Organism {
  legs: number
}

const Jack: Human = {
  alive: true,
  age: 25,
  legs: 2,
}
```

An interface can be extended by another interface to gain access to all of the typed properties on that particular interface. As in this example, multiple interfaces can be extended at once.

## Using valueof

```typescript
const state = {
    people: Array<Person>
    location: "string"
}

type IState = valueof state;

const differentState: IState {
    people: [{name: 'John'}, {name: 'Angela'}],
    location: 'Hawaii',
    otherThing: true // error: otherThing does not exist on type IState
}
```

The `valueof` keyword is used to create a type based on an existing objects properties.

## Union types

```typescript
type Age = string | number
const age1 = 25
const age2 = "Twenty five"
```

Unions allow you to define an either or type. This uses the | symbol, which can be changed an infinite number of times. One useful use-case for union types is when you want to define several different string or numeric options for a variable (this is known as String Literal Types or Numeric Literal Types). In practical terms, this might be when using a reducer pattern with specific string types that you want to restrict. See this example:

```typescript
const Dispatch {
  type: 'login' | 'logout' | 'loading'
  value: any;
}

dispatch({type: 'login', value: formData}) // fine
dispatch({type: 'logins', value: formData}) // error - type logins does not exist on Dispatch

```

## Intersection types

```typescript
interface Invoice {
  value: number
}

interface Client {
  name: string
}

function getJob(): Interface & Client {
  return { name: "Google", value: 2000 }
}
```

An intersection type allows you to combine multiple interfaces into one so that you have access to the properties of all the combined interfaces.
