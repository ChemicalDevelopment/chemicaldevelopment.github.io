---
layout: post
title: PGS Updated
description: Now in python
categories:
  - software
  - pgs
image: pgs.png
---

[Here's a link to posts about PGS]({{site.baseurl}}/category/#pgs)

Essentially, PGS is a distributed computing program that I wrote to find polynomials which generate prime numbers.

I've made lots of updates to it, and plan on a released version in a few weeks.

## Language Transition

Originally (and up to version 2.5.0), the bulk of PGS was written in JavaScript. I know, I know, it's quite odd. I mainly used JS as an expirement, as it supports talking to firebase (the database we use) out of the box. It actually worked very well for cross-process communication and JSON-based datastructures well. Also, it was surprisingly easy to distribute (just include the 'node' binary and node_modules/ folder and it works!). However, the archives were 10MB, which was mostly the node binary. Also, there were limitations of using JavaScript and C together.


Python requires a custom library ([called Pyrebase](https://github.com/thisbejim/Pyrebase)), which is unofficial and requires pycryptodome. 

Still unclear, PGS only works in development mode now, and I will likely return to NodeJS, or use Python with better `--offline` support, or possibly switch to C (although this is very unlikely).

