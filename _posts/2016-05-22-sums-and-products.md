---
layout: post
title: Sums and products
description: Some interesting infinite sums, and products 
tag: math
image: sums.png
---

Have you ever seen a really awesome sum? Like this one here:

$$\sum_{i=0}^\infty \frac{1}{k^2} = \frac{1}{1} + \frac{1}{2^2} + \frac{1}{3^2} + \cdots + \frac{1}{n^2} + \cdots = \frac{\pi^2}{6}$$

Or

$$\sum_{i=0}^\infty \frac{1}{k^4} = \frac{1}{1} + \frac{1}{2^4} + \frac{1}{3^4} + \cdots + \frac{1}{n^4} + \cdots = \frac{\pi^4}{90}$$

Or even

$$\sum_{i=0}^\infty \frac{1}{k^{14}} = \frac{1}{1} + \frac{1}{2^{14}} + \frac{1}{3^{14}} + \cdots + \frac{1}{n^{14}} + \cdots = \frac{2\pi^{14}}{18243224}$$


Or maybe an awesome product, such as:

$$\frac{\sqrt[1]{e}\sqrt[3]{e}\sqrt[5]{e}\sqrt[7]{e}\sqrt[9]{e}\cdots\sqrt[{2n+1}]{e}\cdots}{\sqrt[2]{e}\sqrt[4]{e}\sqrt[8]{e}\sqrt[10]{e}\sqrt[12]{e}\cdots\sqrt[{2n}]{e}\cdots} = 2$$


The first two are examples of infinite sums, and the third is an infinite product. Sum means adding, product means multiply. In all of these examples, we take them out to infinity (theoretically), and this is the answer we would get. In fact, as we go farther, they get very close to these values.

Before I show you these examples, we are going to look at sums a little bit more generally.

I've written a JSFiddle so you can enter your own series and watch the value it converges to.

Full version at <a href="https://jsfiddle.net/CadeBrown/tdxofngq/" target="_blank">https://jsfiddle.net/CadeBrown/tdxofngq/</a>

<iframe width="100%" height="775" src="//jsfiddle.net/CadeBrown/tdxofngq/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

You can just type in "n", and it will show you the sum of 1 + 2 + 3 + 4 + ... + n (which happens to be $ \frac{n(n+1)}{2} $)

A few cool sums to try in it:

$$ \sum_{n=1}^{\infty}\frac{ {(-1)}^n}{n} = -\ln{2} \approx -.693 $$

~~~
 min = 1
 max = 1000
 series = pow(-1, n) / n
~~~

$$ \sum_{n=0}^{\infty}\frac{ {(-1)}^n}{2n + 1} = \frac{\pi}{4} \approx .785 $$

~~~
 min = 0
 max = 1000
 series = pow(-1, n) / (2 * n + 1)
~~~

$$ \sum_{n=1}^{\infty}\frac{1}{n^2} = \frac{\pi^2}{6} \approx 1.645 $$

~~~
 min = 1
 max = 1000
 series = 1 / (n * n)
~~~

$$ \sum_{n=0}^{\infty}{\frac{e}{\pi^{e^{n}}} - \frac{21(e^n + \pi^n)}{10(e^{\pi^n} + \pi^{e^n})}} \approx -0.001 $$

~~~
 min = 0
 max = 100
 series = e / pow(pi, pow(e, n)) - (21 * (pow(e, n) + pow(pi, n))) / (10 * (pow(e, pow(pi, n)) + pow(pi, pow(e, n))))
~~~


The last one is a bit crazy, and has no practical meaning (yet!), but it shows how you can enter terms into the web page.

Those 4 above are what are called convergent series. Convergent means that if you keep evaluating more and more terms, it tends towards a limit. 

Like $ \ln{2} $, or $ \frac{\pi}{4} $ were the limits of the first and second sum.

The first 3 sums converge quite slowly, and to get $d$ digits of precision to the "actual value" (if we could take it to infinity), we would need roughly $10^d$ terms. So, to get one more digit of precision, we would need 10 times as many terms to sum! That is why the first 3 are not good ways to calculate their sum ($\pi$, $\ln{2}$, etc)

The fourth, however, takes roughly $\log\log{d}$ terms to get to $d$ digits, which is very fast.

There exists formulas for $\pi$ that require only $\frac{d}{14}$ terms to get $d$ digits, such as this one:

$$ \frac{1}{\pi} = 12\sum_{n=0}^{\infty}\frac{(-1)^n(6n)!(13591409+545140134n)}{(3n)!(n)!^3(640320)^{3n+\frac{3}{2}}} \approx 0.318 $$

~~~
 min = 0
 max = 10
 series = 12 * (pow(-1, n) * fac(6 * n) * (13591409 + 545140134 * n)) / (fac(3 * n) * pow(fac(n), 3) * pow(640320, 3 * n + 1.5))
~~~

Viola! You have $\frac{1}{\pi}$ pretty easily.

In fact, that series (with a few optimizations) is how record number of digits of $\pi$ are computed! (http://www.numberworld.org/digits/Pi/ we are currently at $13,300,000,000,000$ digits).


Lets take a little break, and talk about products. I showed you:

$$\frac{\sqrt[1]{e}\sqrt[3]{e}\sqrt[5]{e}\sqrt[7]{e}\sqrt[9]{e}\cdots\sqrt[{2n+1}]{e}\cdots}{\sqrt[2]{e}\sqrt[4]{e}\sqrt[8]{e}\sqrt[10]{e}\sqrt[12]{e}\cdots\sqrt[{2n}]{e}\cdots} = 2$$

and, I showed an example of a seemingly unrelated sum:

$$ \sum_{n=1}^{\infty}\frac{ {(-1)}^n}{n} = \ln{2} $$

But, these two are saying the same thing! I'll show you how.

Lets get some notation here. Analogous to summing over n using $\Sigma$, we will show a product using capital pi ($\Pi$, *not* $\pi$).

For example: 

$$ \prod_{n=1}^{m}{n} = 1 * 2 * 3 * \cdots * (n - 1) * n = n! = \Gamma(n + 1) $$

where the $!$ means factorial (<a href="https://en.wikipedia.org/wiki/Factorial" target="_blank">https://en.wikipedia.org/wiki/Factorial</a>), and $\Gamma$ is the Gamma function (<a href="https://en.wikipedia.org/wiki/Gamma_function" target="_blank">https://en.wikipedia.org/wiki/Gamma_function</a>)

I've written another fiddle for products instead of summation:

Full version at <a href="https://jsfiddle.net/CadeBrown/smnohszh/1/" target="_blank">https://jsfiddle.net/CadeBrown/smnohszh/1/</a>

<iframe width="100%" height="775" src="//jsfiddle.net/CadeBrown/smnohszh/1/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

The default product approaches $\frac{\pi}{2}$, but I have a few examples for these as well:

$$ \prod_{n=1}^{\infty}\left ( {1 + \frac{1}{9n^2}} \right ) = \frac{3\sqrt{3}}{2\pi} \approx 0.827 $$

~~~
 min = 1
 max = 100
 series = (1 - 1 / (9 * n * n))
~~~

$$ \prod_{n=1}^{\infty}\left ( 1 + \frac{1}{(2n+1)^2} \right ) = \frac{\pi}{4} \approx 0.785 $$

~~~
 min = 1
 max = 100
 series = (1 - 1 / ((2 * n + 1) * (2 * n + 1)))
~~~

Throughout history, sums have been studied more for two major reasons:

* Sums often converge quicker
* It is easier to add than multiply

My favorite sum, personally, would have to be the chudnovsky formula, from above:

$$ \frac{1}{\pi} = 12\sum_{n=0}^{\infty}\frac{(-1)^n(6n)!(13591409+545140134n)}{(3n)!(n)!^3(640320)^{3n+\frac{3}{2}}} \approx 0.318 $$

~~~
 min = 0
 max = 10
 series = 12 * (pow(-1, n) * fac(6 * n) * (13591409 + 545140134 * n)) / (fac(3 * n) * pow(fac(n), 3) * pow(640320, 3 * n + 1.5))
~~~

So beautiful!