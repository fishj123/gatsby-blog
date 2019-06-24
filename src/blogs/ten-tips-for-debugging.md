---
title: "10 tips for debugging"
date: "2019-06-24"
description: "Improve your debugging skills with these 10 tips for beginners"
---


I spend an awful lot of my time debugging my applications. As a result, I decided to draw up a list of common ways I’ve solved my bugs and I now use it as a reference/reminder of steps to take when I am debugging. I’m going to share the 10 steps I have in this article along with some explanations for each. This article is aimed at beginners or those who are in the early stages of their development career. 
<br><br>
**Break down the problem into manageable chunks**  

This is the most important piece of advice when it comes to debugging/problem solving. I’m sure you’ve heard it countless times, but it never hurts to be reminded of the value in this. If you’re trying to tackle a bug then you have to be methodical about it, take things one step at a time in manageable steps. For example, if you are trying to debug a click event in your application then start by adding a console.log(“clicked”) into the function that your click event should be calling to ensure that it is being called. 
<br><br>
**Console.log()** 

That leads nicely into my second tip, utilise console.log(). Some developers like to mock those that rely too much on console.log() for debugging, but I would argue that it is one of the most effective methods to quickly work out what your application is actually doing. If you’re retrieving some data from an API and manipulating it within your app, stick a console.log(data) in there to ensure that what you have retrieved is definitely what you think it is. 
<br><br>
**Read the error message**  

This is one that beginners sometimes struggle with. Sometimes the answer to your problem is right there in front of you, within the error message. Your error message will tell you the line of code that caused the error, and a small description of what went wrong. Sometimes the messages are a bit cryptic and it can take some experience to begin to understand what it actually means, but the more you pay attention to what the error message says the quicker you will learn to decrypt it. 
<br><br>
**Comment out code**  

This is one of my favourite ways to debug an application, the principle is essentially to rule out what is not causing the error by commenting out blocks of code that you suspect could be involved. If you comment out some code and the error still appears (and hasn’t changed) chances are that block of code is not causing the issue. This process of elimination can help you get to the root of the problem pretty quickly. 
<br><br>
**Double check what you are doing**  

This is a good one to do near the beginning of your debugging process. What I mean by this is, ensure that the code you are working with is what you think it is. For example, sometimes you might be trying to fix an error on the development environment whilst frantically refreshing the page on the live environment and wondering why none of your changes are working. 
<br><br>
**Forget your assumptions**  

If you find yourself saying “this part of the code won’t be the cause of my bug” without actually checking it then you are setting yourself up for a world of pain. My advice would be to never assume things when you sit down to debug the application. The majority of my bugs come from my understanding of what I have instructed the application to do being misaligned with what I have actually instructed it to do.
<br><br>
**Learn to use the debugger**  

If you put the time in to understand how to use the debugger then you’ll definitely see the benefits. The debugger is like console.log() on steroids – you can place breakpoints throughout your code to see exactly what is happening when it runs. Use it to see the value of variables, the order that functions are being called etc. Definitely worth the investment of time to learn it. 
<br><br>
**Google it**  

It’s probably been said a thousand times that to become a good programmer you just need to get good at Googling things. I find that Google is useful for small bugs such as syntax errors etc. but it loses its value as your bug gets more complex. It’s still worth doing because no doubt someone will have had the same issue you are having in the past. 
<br><br>
**Walk away**  
 
This is the best piece of debugging advice I have. I can’t tell you how many times I’ve spent hours on one single error and then realised what the solution was once I stopped trying to debug it. Taking a 15-minute break to go for a walk does wonders for your mind. There’s something about letting your mind wonder that speeds up the process of landing on a solution. I now try to limit myself to no longer than one hour of debugging – if I can’t find the answer after an hour then I take a short break to clear my head before coming back to the computer. 
<br><br>
**Ask for help**  

The final step in my debugging process is to ask for help. There is absolutely no shame in asking for help. Getting help from other programmers is essential if you are going to spend an entire career programming. I would be amazed if there was anyone out there that had never had to ask someone for help with a bug! The sooner you get over your fear of reaching out to someone or looking stupid the sooner you will up your game as a programmer. On the flip-side of this, I encourage you to help others with their bugs, it feels good to help people out and you’ll probably benefit from it as well. Afterall, the best way to solidify your knowledge is to teach someone else. 
<br><br>
That about does it for my debugging list. Hopefully some of you find it useful, if you have any tips of your own that you think I should utilise then I’d love to hear them!
