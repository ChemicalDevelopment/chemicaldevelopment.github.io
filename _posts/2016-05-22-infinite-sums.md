---
layout: post
title: Infinite Sums
description: Some interesting infinite sums, and products 
tags: [math, sums, products, ignore]
image: sums.png
---

### What are sums?

A sum is addition of a sequence of numbers. 

The sum of $1, 2, 3, 4$ is $1+2+3+4$, which is $10$

### What are infinite sums?

Essentially, infinite sums are the limit when you add an infinitely long sequence of numbers.

For example, if we add $ 1/n $ for n = $1, 2, 3, 4 . . . \infty$, the limit does not exist; it keeps getting larger and larger.

But, if we add $ 1 / (n^2) $ for n = $1, 2, 3, 4 . . .\infty$, the limit does exist. It is roughly $1.645$ (we'll look at this one a bit lower)


### Examples

Here are some more famous examples of infinite sums (they are values of the riemann zeta function)

$$\sum_{n=0}^\infty \frac{1}{n^2} = \frac{1}{1} + \frac{1}{2^2} + \frac{1}{3^2} + \cdots + \frac{1}{n^2} + \cdots = \frac{\pi^2}{6}$$

Or

$$\sum_{n=0}^\infty \frac{1}{n^4} = \frac{1}{1} + \frac{1}{2^4} + \frac{1}{3^4} + \cdots + \frac{1}{n^4} + \cdots = \frac{\pi^4}{90}$$

Or even

$$\sum_{n=0}^\infty \frac{1}{n^{14}} = \frac{1}{1} + \frac{1}{2^{14}} + \frac{1}{3^{14}} + \cdots + \frac{1}{n^{14}} + \cdots = \frac{2\pi^{14}}{18243224}$$


The first two are examples of infinite sums, and the third is an infinite product. Sum means adding, product means multiply. In all of these examples, we take them out to infinity (theoretically), and this is the answer we would get. In fact, as we go farther, they get very close to these values.

Before I show you these examples, we are going to look at sums a little bit more generally.

I've written a JSFiddle so you can enter your own series and watch the value it converges to.

Full version at <a href="https://jsfiddle.net/CadeBrown/tdxofngq/" target="_blank">https://jsfiddle.net/CadeBrown/tdxofngq/</a>

<iframe width="100%" height="775" src="//jsfiddle.net/CadeBrown/tdxofngq/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

You can just type in "n", and it will show you the sum of 1 + 2 + 3 + 4 + ... + n (which happens to be $ \frac{n(n+1)}{2} $)

A few cool sums to try in it: (copy the shaded part into the "series definition" box)

$$ \sum_{n=1}^{\infty}\frac{ {(-1)}^n}{n} = -\ln{2} \approx -.693 $$

<pre> pow(-1, n) / n </pre>

$$ \sum_{n=0}^{\infty}\frac{ {(-1)}^n}{2n + 1} = \frac{\pi}{4} \approx .785 $$

<pre> pow(-1, n) / (2 * n + 1) </pre>

$$ \sum_{n=0}^{\infty}\frac{1}{(n+1)^2} = \frac{\pi^2}{6} \approx 1.645 $$

<pre> pow(n+1, -2) </pre>

Those 3 series above are what are called convergent series. Convergent means that if you keep evaluating more and more terms, it tends towards a limit. 

Like $ \ln{2} $, or $ \frac{\pi}{4} $ were the limits of the first and second sum.

The first 3 sums converge quite slowly, and to get $d$ digits of precision to the "actual value" (if we could take it to infinity), we would need roughly $10^d$ terms. So, to get one more digit of precision, we would need 10 times as many terms to sum! That is why the first 3 are not good ways to calculate their sum ($\pi$, $\ln{2}$, etc)

There exists formulas for $\pi$ that require only $\frac{d}{14}$ terms to get $d$ digits, such as this one:

$$ \frac{1}{\pi} = 12\sum_{n=0}^{\infty}\frac{(-1)^n(6n)!(13591409+545140134n)}{(3n)!(n)!^3(640320)^{3n+\frac{3}{2}}} \approx 0.318 $$

<pre> 12 * (pow(-1, n) * fac(6 * n) * (13591409 + 545140134 * n)) / (fac(3 * n) * pow(fac(n), 3) * pow(640320, 3 * n + 1.5)) </pre>

With this, we have $\frac{1}{\pi}$ in an efficient series

In fact, that series (with a few optimizations) is how record number of digits of $\pi$ are computed: [Numberworld](http://www.numberworld.org/digits/Pi/ we are currently at $13,300,000,000,000$ digits).
