---
title: "Next JS error 'cannot verify first certificate': quick fix"
date: "2020-05-03"
description: "How to fix the 'cannot verify first certificate error' when working with Next JS"
---

Next JS is an excellent framework for building React applications that have both server side rendering and static generated pages. Recently I ran into an annoying bug whilst developing a Next JS application that had a backend API built with .NET Core.
<br/>
<br/>
`reason: unable to verify the first certificate`
<br/>
<br/>
This error was happening whenever I was making API calls to be server in a `getInitialProps` call. What's happening here is that when we call `getInitialProps` the code is being executed server side in a NodeJS environment, and this NodeJS environment does not trust the self signed certificate that the backend API uses on localhost. So what do we do to fix this?
<br/>
<br/>
When trying to debug this I could only find advice that was related to working directly with NodeJs which advised on installing a node js package or using the native `https` module. I wanted something simpler so I settled on the following one line change which fixed the issue.

I changed my package.json scripts from this:

```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest"
  },
```

to this:

```json
"scripts": {
    "dev": "NODE_TLS_REJECT_UNAUTHORIZED='0' next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest"
  },
```

Now whenever I run `npm run dev` in my terminal it will execute the dev script which sets `NODE_TLS_REJECT_UNAUTHORIZED='0'` before starting the application. This forces the NodeJs environment to allow self-signed SSL certificates such as the one in my localhost. What I like about this solution is that it is only a one line change and it doesn't impact the production environment.
<br/>
<br/>

<p class="warning">WARNING: The solution I give here opens a security flaw in your application. Do not use this on the production scripts, it is only acceptable for when working with localhost.</p>
