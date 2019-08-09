---
title: "CCS Quickie: clip-path"
date: "2019-08-09"
description: "Learn how to use CSS clip-path to create cool effects on your website"
---

I recently used a website where background colors on elements panned in from the side on hover and I wanted to learn how it was done. That's how I discovered CSS clip-path. In this short blog I'm going to share with you how to use it.  
<br>
![alt text](https://ik.imagekit.io/fishj123/clip-path_pmtjQUvp8.gif "Clip path example")

<br><br>
The clip-path property can be used on an HTML element to 'clip' the element based on a shape that you determine. The browser will then only display the part of the element you have clipped, rather than the whole element. The property provides you with many options, including polygon, ellipse, circle, and inset. The syntax can be a little tricky to memorize, but luckily you don't have to. 
<br><br>
There are several excellent (and free) clip-path generators online that will allow you to create the exact shape you are looking for and copy the code snippet for your CSS file. The one I use can be found at https://bennettfeely.com/clippy/  
<br>
I made a Codepen to demonstrate my use case for clip-path, it's very basic so it's easy to get your head around what is happening. I also provide an alternative method to create my effect that has better browser compatibility. At the time of writing clip-path is not compatible with Internet Explorer or Microsoft Edge (boo).   
<br>
You can find a link to my pen here - https://codepen.io/fishj123/pen/WVJdvv

