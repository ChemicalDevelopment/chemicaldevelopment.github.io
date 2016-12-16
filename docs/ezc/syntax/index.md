---
layout: docs
title: EZC Syntax
---

# Nesting

You can nest everything in EZC, and it is expanded.

For example, the following two programs are equivalent:

<pre>
a = sqrt (2 + 3)
</pre>


<pre>
b = 2 + 3
a = sqrt b
</pre>

However, you **must** use parentheses at all time.

This is not correct: `a = sqrt 2 + 3`, nor is `a = 2 + 3 + 4`

You always wrap in parentheses:

`a = sqrt (2 + 3)`, and `a = (2 + 3) + 4`
