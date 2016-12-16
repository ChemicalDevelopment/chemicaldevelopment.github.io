---
layout: docs
title: Function List
---

Here is a full list of functions in ezC

| **Function**  | **Operator**    | **Explanation**                     |
| **Basic Functions (libBasic)**  | | |
| `prec 256`         | ` `       | Sets global precision in bits   |
| `x = set y`         | `x = y`       | sets x to y   |
| `z = min x y`      | ` ` | minimum of x or y |
| `z = max x y`      | ` ` | maximum of x or y |
| `z = near x y`      | `z = x ~ y` | nearest multiple of `x` to `y` |
| `z = trunc x y`      | ` ` | largest multiple of `x` that is <= `y`|
| `z = add x y`      | `z = x + y` | Adds `x` and `y` |
| `z = sub x y`      | `z = x - y` | Subtracts `y` from `x`          |
| `z = mul x y`      | `z = x * y` | Multiplies `x` by `y`           |
| `z = div x y`      | `z = x / y` | Divides `x` by `y`              |
| `z = mod x y`      | `z = x % y` | Returns x modulo y              |
| `z = pow x y`      | `z = x ^ y` | `x` to the power of `y` |
| **Printing Functions (libPrint)**  | |  | 
| `z = get_arg 1 16` | `z = $1`       | Gets an argument from commandline |
| `echo Hello` | `"" Hello`       | Prints out all arguments, then newline |
| `echo_raw Hello` | ` `       | Prints out all arguments without newline |
| `var x`            | ` `       | Prints variable name, and value |
| `varb x 10`            | ` `       | Prints variable name, and value in a base |
| `varb_raw x 10`            | ` `       | Prints out without newline, or name |
| `var_raw x`            | ` `       | Prints value without name or newline |
| `int_var x`            | ` `       | Prints out `x`, but truncated |
| `int_var_raw x`            | ` `       | Prints out `x`, but truncated, and without newline |
| `file x`            | ` `       | Prints the value of `x` into `x.txt` |
| **Math Functions (libMath)**  | | | 
| `z = rand x`       | `z = ? x` | uniform random number in $[0, x)$  |
| ` `       | `z = ??`       | random number in guassian distrobution |
| `z = sqrt x`       | `z = √ x`       | square root of `x`  |
| `z = cbrt x`       | `z = √√ x`       | cube root of `x`  |
| `z = hypot x y`       | ` `       | hypoteneuse of triangle with sides `x` and `y`  |
| `z = exp x`        | ` `       | euler's number raised to `x`      |
| `z = log x`        | ` `       | natural log of `x`      |
| `z = logb x y`     | ` `       | the log base `x` of `y` |
| `z = agm x y`     | ` `       | arithmetic geometric mean |
| `z = gamma x`     | ` `       | the gamma function at x |
| `z = factorial x`     | ` z = x ! `| factorial of x |
| `z = zeta x`     | ` z = ζ x ` | Riemann zeta function of x |
| **Trig Functions (libTrig)**  | | **(All values are in radians)** | 
| `z = sin x`        | ` `       | sine of `x`         |
| `z = cos x`        | ` `       | cosine of `x`       |
| `z = tan x`        | ` `       | the tangent of `x`       |
| `z = csc x`        | ` `       | cosecant of `x`         |
| `z = sec x`        | ` `       | secant of `x`       |
| `z = cot x`        | ` `       | cotangent of `x`       |
| `z = asin x`        | ` `       | arcsine of `x`         |
| `z = acos x`        | ` `       | arcosine of `x`       |
| `z = atan x`        | ` `       | arctangent of `x`       |
| `z = acsc x`        | ` `       | arccosecant of `x`         |
| `z = asec x`        | ` `       | arcsecant of `x`       |
| `z = acot x`        | ` `       | arccotangent of `x`       |
| `z = sinh x`        | ` `       | hyperbolic sine of `x`         |
| `z = cosh x`        | ` `       | hyperbolic cosine of `x`       |
| `z = tanh x`        | ` `       | hyperbolic the tangent of `x`       |
| `z = csch x`        | ` `       | hyperbolic cosecant of `x`         |
| `z = sech x`        | ` `       | hyperbolic secant of `x`       |
| `z = coth x`        | ` `       | hyperbolic cotangent of `x`       |
| `z = asinh x`        | ` `       | hyperbolic arcsine of `x`         |
| `z = acosh x`        | ` `       | hyperbolic arcosine of `x`       |
| `z = atanh x`        | ` `       | hyperbolic arctangent of `x`       |
| `z = acsch x`        | ` `       | hyperbolic arccosecant of `x`         |
| `z = asech x`        | ` `       | hyperbolic arcsecant of `x`       |
| `z = acoth x`        | ` `       | hyperbolic arccotangent of `x`       |
| **Flow Blocks (libLoops)**  | | |
| `label z`     | ` `       | Creates a backup point `z` |
| `goto z`     | ` `       | Starts executing code right after `label z` |
| `if z > x`     | ` `       | Conditional block that can use `<`, `>`, `==` |
| `fi`     | ` `       | Ends `if` block |
| `for i 0 10 2.5`     | ` `       | Starts `i` at `0`, keeps adding `2.5` while `i < 10` |
| `rof`     | ` `       | Ends `for` block |
