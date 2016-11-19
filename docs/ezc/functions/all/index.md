---
layout: docs
title: Function List
---

Here is a full list of functions in ezC

| **Function**  | **Operator**    | **Explanation**                     |
| **Basic Functions (libBasic)**  | | |
| `prec 256`         | ` `       | Sets global precision in bits   |
| `echo "Hello"` | ` `       | Prints out all arguments        |
| `var x`            | ` `       | Prints variable name, and value |
| `file x`            | ` `       | Prints the value of `x` into `x.txt` |
| `z = add x y`      | `z = x + y` | Adds `x` and `y`                |
| `z = sub x y`      | `z = x - y` | Subtracts `y` from `x`          |
| `z = mul x y`      | `z = x * y` | Multiplies `x` by `y`           |
| `z = div x y`      | `z = x / y` | Divides `x` by `y`              |
| `z = mod x y`      | `z = x % y` | Returns x modulo y              |
| `z = trunc x y`      | `z = x _ y` | largest multiple of `y` that is <= `x`             |
| `z = pow x y`      | `z = x ^ y` | `x` to the power of `y` |
| `z = min x y`      | ` ` | minimum of x or y |
| `z = max x y`      | ` ` | maximum of x or y |
| **Math Functions (libMath)**  | | **(All values are in radians)** | 
| `z = sqrt x`       | `z = √ x`       | square root of `x`  |
| `z = cbrt x`       | ` `       | cube root of `x`  |
| `z = sin x`        | ` `       | sine of `x`         |
| `z = cos x`        | ` `       | the cosine of `x`       |
| `z = tan x`        | ` `       | the tangent of `x`       |
| `z = asin x`        | ` `       | arcsine of `x`         |
| `z = acos x`        | ` `       | the arcosine of `x`       |
| `z = atan x`        | ` `       | the arctangent of `x`       |
| `z = exp x`        | ` `       | euler's number raised to `x`      |
| `z = log x`        | ` `       | natural log of `x`      |
| `z = logb x y`     | ` `       | the log base `x` of `y` |
| `z = gamma x`     | ` `       | the gamma function at x |
| `z = factorial x`     | ` z = x !`| factorial of x |
| **Flow Blocks (libLoops)**  | | |
| `label z`     | ` `       | Creates a backup point `z` |
| `goto z`     | ` `       | Starts executing code right after `label z` |
| `if z > x`     | ` `       | Conditional block that can use `<`, `>`, `==` |
| `fi`     | ` `       | Ends `if` block |
| `for i 0 10 2.5`     | ` `       | Starts `i` at `0`, keeps adding `2.5` while `i < 10` |
| `rof`     | ` `       | Ends `for` block |
