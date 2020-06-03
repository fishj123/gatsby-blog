---
title: "Using Vue JS in server-rendered websites"
date: "2020-06-03"
description: "Vue JS is an excellent tool for sprinkling some interactivity into a server rendered website or application."
---

Vue Js is a really useful framework for when you need a little bit of interactivity within your application. It's extremely simple to integrate with existing web applications that are server-rendered. This makes it a great replacement for older solutions such as JQUERY.

## Why use Vue?

One of the reasons I love Vue for small pieces of interactivity over alternatives such as JQUERY is that it has a very powerful API for rendering and updating HTML. It has it's own version of a foreach loop within HTML so that you can declare 'for each item in my list of data, display this HTML'. This means you don't have to create HTML elements using JavaScript and inject them into the page manually every time your data changes. Another reason I love Vue is that it has a clean syntax that is very easy to read and maintain. This makes it a more manageable framework that doesn't become confusing or difficult to parse.

## How to install

One of the great things about Vue is the simplicity in its setup. All it requires is a single script tag on the page and you are up and running. Within the <a class="link" href="https://vuejs.org/v2/guide/">Vue documentation</a>, you can find two different scripts, a development version, and a production version. The development version has some handy console messages for errors so it's recommended to use this one for development. You can find both of the scripts here:

```
development version
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

production version
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

```

<br/>
<br/>
When I work with Vue I also like to install a fetch polyfill and a promise polyfill. These allow me to use the fetch API and promises with browser support as far back as IE9. You can find those scripts here:

```
promise polyfill
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>

fetch polyfill
<script src="https://unpkg.com/unfetch/polyfill"></script>
```

## Vue basics

Vue is considered to be one of the easiest of the javascript frameworks to learn. This is because it's syntax is extremely similar to regular JavaScript, with just a few additional pieces that make interacting with HTML very easy.

To get started you just need a piece of HTML with a unique ID that you can assign to Vue. This is usually a container element such as a div:

```html
<div id="app"></div>
```

<br/>
<br/>
Then you add a script tag to the page and create a Vue instance:

```javascript
<script>

    var app = new Vue({
        el: '#app',
        data: {

        },
        methods: {

        }
    })

</script>
```

<br/>
<br/>
The Vue instance is given an object as a parameter. There are 3 core elements to this object:

1. el: this is the ID of the HTML element that you want Vue to interact with.
2. data: this is your data or "state" object. We'll look at some examples of what you might store here later.
3. methods: this object will contain all of the functions that you want to write to interact with the page

<br/>
<br/>
Here is what the Vue instance might look like once you have added some data and methods:

```javascript
<script>

    var app = new Vue({
        el: '#app',
        data: {
            count: 0
        },
        methods: {
            increaseCount: function() {
                this.count = this.count + 1;
            },
            decreaseCount: function() {
                this.count = this.count - 1;
            }
        }
    })

</script>
```

<br/>
<br/>
We've added some state (`count`) which is just a simple number. We've also added two methods, one to increase the count and one to decrease the count. Here is how we can display the count state in the HTML:

```html
<div id="app">
  <button v-on:click="increaseCount">Increase</button>
  <button v-on:click="decreaseCount">Decrease</button>
  <p>{{ count }}</p>
</div>
```

<br/>
<br/>
This HTML will create two buttons for changing the state of count and a paragraph tag which contains the current count. The value of the p tag will update as the count state is updated.

## Lifecycle methods

Let's look at some lifecycle methods. Lifecycle methods are functions that are called at certain stages of the Vue instances "lifecycle". The "lifecycle" of the Vue instance is the stages it goes through from creation to its end of life. The Vue instance is created on page load and destroyed when the user navigates away from the page (or if you destroy it manually through code). You can find a diagram of the Vue lifecycle here - <a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram">https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram</a>

```javascript
<script>

    var app = new Vue({
        el: '#app',
        data: {
            count: 0
        },
        methods: {
            increaseCount: function() {
                this.count = this.count + 1;
            },
            decreaseCount: function() {
                this.count = this.count - 1;
            }
        },
        beforeMount: function() {

        },
        mounted: function() {

        }
    })

</script>
```

<br/>
<br/>

The `beforeMount` lifecycle method is called before the Vue instance is created. This can be a good place to do any initial setup that you might require, such as data fetching.

<br/>
<br/>

The `mounted` lifecycle method will be called (yes, you guessed it) when the Vue instance has mounted. This is a good location to do any setup that you want to happen on page load but that requires access to the data object on the Vue instance.
<br/>
<br/>

A comprehensive overview of the Vue lifecycle and the methods available can be found here: <a class="link" href="https://vuejs.org/v2/api/#Options-Lifecycle-Hooks">https://vuejs.org/v2/api/#Options-Lifecycle-Hooks</a>

## Watch method

A very common scenario when creating websites or web applications is the need to recall some methods when something else updates in the application. Vue handles this with something called the watch method. This is a really useful method that will be called whenever the data, or state, you are watching updates. Here's how to would look with our existing example:

```javascript
<script>

    var app = new Vue({
        el: '#app',
        data: {
            count: 0
        },
        methods: {
            increaseCount: function() {
                this.count = this.count + 1;
            },
            decreaseCount: function() {
                this.count = this.count - 1;
            }
        },
        beforeMount: function() {

        },
        mounted: function() {

        },
        watch: {
            count: function() {
                console.log("The count has changed")
            }
        }
    })

</script>
```

<br/>
<br/>

Now every time we click a button to increase or decrease the count we would see the console message "The count has changed". This is a really powerful tool because we can perform side-effects to data changing within this watch method.

## Rendering HTML

We already saw an example of a Vue-specific attribute that can be applied to a piece of HTML to interact with the Vue instance - `v-on:click`.

```html
<button v-on:click="doSomething">Increase</button>
```

<br/>
<br/>

This is just a basic event handler and it's nothing to get too excited about. But Vue has some great HTML attributes that make rendering data a breeze. One of my favourites is the way Vue handles loops. Let's imagine we had the following Vue instance with a list of people stored as state in the data:

```javascript
<script>

    var app = new Vue({
        el: '#app',
        data: {
            people: [{name: 'Lucy'}, {name: 'Jack'}, {name: 'Ben'} ]
        },
        methods: {

        }
    })

</script>
```

<br/>
<br/>

Here is how we could loop through that list and print out a list of the names in the HTML:

```html
<ul>
  <li v-for="person in people">
    {{person.name}}
  </li>
</ul>
```

<br/>
<br/>

This would print out the following HTML to the user:

```html
<ul>
  <li>Lucy</li>
  <li>Jack</li>
  <li>Ben</li>
</ul>
```

<br/>
<br/>

This makes for a declarative way to display data in HTML without having to do a lot of the manual work you'd usually have to go through with plain JavaScript or JQUERY such as creating the elements, giving the element's content, and injecting them into the page. It also means that you can take one look at the HTML on the page and see what is going to be displayed. You don't need to read through lots of JavaScript to work out where your HTML is coming from.

## Conclusion

This blog has just scratched the surface with what you can do using Vue. Even so, with what I have covered here you can achieve a lot and for many websites and applications, this is enough to create some super simple and easy interactivity without having to worry about setting up a webpack configuration or creating a SPA. For more information on what is possible with Vue, I would recommend checking out the <a class="link" href="https://vuejs.org/v2/guide/">documentation</a>.
