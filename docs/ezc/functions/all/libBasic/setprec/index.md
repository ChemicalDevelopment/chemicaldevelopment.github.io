---
layout: docs
title: setprec
---

`setprec` sets the precision of floating point operations.

Specifically, it sets them to the argument's bits

You can use literals (i.e. `setprec 256`), or commandline args (`setprec $1`).

<pre>
setprec 256
x = sqrt TWO
var x
</pre>

This prints out `1.41423 . . .` to 256 bits (roughly 80 digits).


