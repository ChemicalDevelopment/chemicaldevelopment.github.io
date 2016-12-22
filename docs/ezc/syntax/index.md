---
layout: docs
title: EZC Syntax
---

# Nesting

You can nest most everything in EZC, and it is expanded.

For example, the following two programs are equivalent:

<pre>
a = sqrt (2 + 3)
</pre>


<pre>
b = 2 + 3
a = sqrt b
</pre>

However, you should use parenthesis all the time.

This will print out the square root of 5: `a = sqrt 2 + 3`

This will print out the square root of 5: `a = sqrt 2 + 3`

# Calling functions

Calling functions can be done.

Specifically, this is evaluated after parenthesis and operators.

Say, the `rand` function:

`a = rand 0 100`

`a = (rand 0,100)`

are both equivalent

However, do not do:

`a = rand (0, 100)`

Instead, wrap this:

`a = (rand 0, 100)`

This is a design choice in EZC, that a function is not invoked by `name(args)`, but rather it is implied by `name args`, and can be wrapped for execution like `(name args)`

So, if you want to multiple two random numbers:

`a = (rand 0, 100) * (rand 0, 100)`



