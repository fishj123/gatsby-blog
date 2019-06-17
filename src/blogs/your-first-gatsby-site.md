---
title: "Create a Gatsby site in under 5 minutes"
date: "2019-06-07"
description: "Thinking about using Gatsby but don't know where to start? Get up and running in under 5 minutes with this guide."
---

So you've heard about Gatsby and you want to find out what it's all about. If you're like me, maybe you heard about Gatsby on the excellent podcast - <a href="https://syntax.fm/" target="_blank" rel="noopener noreferrer">Syntax</a>. Or maybe all your friends have been using it and you just want to get in on the action. Either way, if you are reading this blog I will assume you have very little or no knowledge of Gatsby, because that is who this tutorial is aimed at. If reading documentation is a productive way for you to learn then I would recommend you stop reading this blog now and head straight on over to the <a href="https://www.gatsbyjs.org/docs/" target="_blank" rel="noopener noreferrer">official Gatsby Docs</a>. There you will find an excellent tutorial that walks you through setting up your first site step-by-step. But I wanted to offer an alternative in case you are just looking for a quick overview on how to get up and running. So without further ado, lets get started.
<br><br>

Note: If you just want to see the steps required to get a site started then scroll to the bottom of this article, otherwise continue reading.
<br><br>

I will assume that you have previously installed Node, git, and npm on your machine. If you're interested in learning Gatsby then I doubt you've made it this far without having all 3 of these installed. Something you will need to install now is the Gatsby CLI which you can get by running: <code>npm install -g gatsby-cli.</code> 
<br>
Once you have installed the Gatsby CLI just head to the folder you want to create your project in and open up the terminal there. Run this command: <code>gatsby new tutorial-name</code> 
<br>
In this command 'tutorial-name' is the name of your project and can be substituted for whatever you want. Now run this command: <code>gatsby develop</code> 
<br>
That's it, your site is official up and running. Navigate to localhost:8000 in your browser and you should see the starter template website. 
<br><br>
At this point you can navigate between the two pages Gatsby has created for you to see just how fast a Gatsby site is. So how do we start editing this site to make it your own? To keep things simple lets just focus on the *src* folder for now. Within the src folder you will see a folder named pages. If you create a .js file within the pages folder then Gatsby will automatically generate a page on the website for you. For example, if you create a file named hello.js and then navigate to localhost:8000/hello you will see the page you just created. Of course, the file will need some content first before you can see anything on the page. 
<br><br>
If you are familiar with React then each 'page' file that Gatsby has generated for you should look fairly familiar. Gatsby uses the same JSX syntax as React, views are rendered on the page from a function. If the existing pages don't look familiar to you then I suggest you create a new file under the pages folder, and copy/paste all of the code from the index.js file into your new file. Now start editing pieces of code and watch what happens on the page. Gatsby uses a form of hot reloading which means that any change you make to the file should instantly be visible on the site without the need to reload. 
<br><br>
I believe that you learn best from trial and error, so I am not going to walk you through exact steps of editing files/pages. I will leave you with one more piece of advice. Navigate to the components folder and you will see a file called Layout.js - this file handles the code for elements of the site that will be consistent across all pages. For example, your header and footer will go in here. In order to use this layout component you must import it into the pages files that you are using. At the top of each page file you need to include this line: <code>import Layout from "../components/layout"</code>
<br>
Then you must wrap all of the JSX code with the Layout component. Here is an example:
<br><br>

    <Layout>
        <h1>This is my new page</h1>
        <p>I have wrapped this content with the layout component</p>
    </Layout>    

<br>
I wanted to keep this article brief so that you are not bogged down with information so I will leave it here. I'll be posting more articles on Gatsby over the coming weeks, as well as other JavaScript content. Make sure to stay tuned for that, have a great day.
<br><br>

### Quick steps
<br>

1. Install Node, NPM, GIT, Gatsby CLI
2. Open folder where you want project to be stored
3. In the command line run: gatsby new name-of-project
4. In the command line run: cd name-of-project
5. In the command line run: gatsby develop
6. Navigate to localhost:8000 in your browser
7. Start coding! 