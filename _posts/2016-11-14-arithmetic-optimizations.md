---
layout: post
title: Arithmetic Optimizations
description: Whats the fastest way to do math? (For computers and humans)
tags: [math, programming, ignore]
image: banner.png
---

We're always doing math, whether we realize it or not. Whenever you need to know how much tax is on something, or if you can evenly split pizza between people, you are using arithmetic.

Arithmetic is essentially all your number manipulations, adding, subtracting, multiplying and dividing. There are quite a few tricks we can use to speed up doing this in your head.

I'll present the first part of this article in base 10, but later I'll go into other bases as well.


## Base 10

### Adding

Here is what is called grade school addition:

<pre>
   ( 1 )
    248
+   543
_______
    791
</pre>

the `1` on top is because `8+3=11` is greater than `10`, so we write the first digit lower, and the 10s place above the next.

The reason for this is quite simple: we can't have a digit greater than or equal to the base. if we have a digit of (10) in one place, we know that is invalid, so we seperate it into `1` and `0`. The same applies here.

There aren't really any improvements to this, because of how simple it is.

### Subtracting

This is grade school subtraction:

<pre>
   (4 13 13)
    5  4  3
-   2  4  8
___________
    2  9  5
</pre>


The numbers on top are because `3<8`, so we must "borrow" from the next place value.

Essentially, we are saying that because digits have to be between `0` and `9`, we will have a negative if we subtract 8 from 3, so we add on 10 knowing that 13 overflows, but that (13-8) will not.

The only real speedup here is that you could start by borrowing from the start, then carry digits later (so you won't have to stop in the middle)

All in all, however, addition and subtraction do not have many speedups because of their linear nature.

### Multiplying

This is grade school multiplication:

<pre>
  (12 )
    23
*   17
______
   161
+  230
______
   391

</pre>

We take it digit-wise multiplication, 7*3, which is equal to 21. This is greater than 10, so we carry the `2` above to the next column.

Then, we compute `7*2=14`, and add the `2` which was our carry from last time, giving us `16`. our carry is now `1`

Since there is no other digit, simply tack on our `1` and recieve the first product, `7*23=161`.

We move on to the next digit on the bottom number, `1`, and begin by adding a `0` under our `161`.

We move column to column just like last time to end up with `230` written. We then sum these two numbers to recieve `391`

Pretty straight forward, but we can speed things up quickly.

Here are a few things to know:

Obviously, memorizing your multiplication tables for single digits speeds things up a lot for all of this.

#### 2 Digit times 2 Digit

say you have the number (ab)*(cd),

Where (ab) and (cd) are the digits in base 10


You can write these then as (10a+b)*(10c+d) (since each place value is multiplied by the base, 10)

When you expand this, you get `100*a*c+10*(a*d+b*c)+b*d`

So, the digits are: `(a*c)`, `(a*d+b*c)`, and `(b*d)`

Applying this to our example, `23*17`, a=2, b=3, c=1, d=7

Our new number is `(2*1)`, `(14+3)`, and `(3*7)`, or

`(2)(17)(21)` Obviousy, we need to carry.

By adding the carry from each:
 
<pre>
(2)(17)(21)
(2)(17+2)(1)=(2)(19)(1)
(2+1)(9)(1)=(3)(9)(1)
23*17=391
</pre>


Once you get this down, multiplying two digit numbers can be faster, a quick example:

`Compute 97*83`

<pre>
(9*8), (7*8+3*9), (7*3)
(72)(56+27)(21) = (72)(83)(21)
(72)(83+2)(1) = (72)(85)(1)
(72+8)(5)(1) = (80)(5)(1)
(8)(0)(5)(1)
97*83 = 8051
</pre>


