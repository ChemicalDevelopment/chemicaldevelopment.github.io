---
layout: docs
title: EZC Examples
---

Here are some ezC examples.

For a walkthrough, check out [Tutorials]({{site.ezc_docs}}/tutorials)

You can find even more on [Github](https://github.com/ChemicalDevelopment/ezc/tree/master/examples)

### Pi

Pi, or $\pi$, is a widely known constant, and any circle's circumference divided by diameter.

It's numerical value is `3.14159265358979 . . .` In this example, we'll show how to use ezC to compute pi to any accuracy.

#### Basic Example

Here is a very basic, but slow method of calculating pi:

<pre>
# examples/pi_basic.ezc

setprec $1

c_pi = -1.0
pi = acos c_pi

var pi
</pre>

since `-1` is the $\cos(\pi)$, $\cos^{-1}(-1)$ should be $\pi$

### Video