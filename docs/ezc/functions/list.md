---
layout: docs
title: Function List
---

Here is a full list of functions in ezC

| **Function**  | **Operator**    | **Explanation**                     |
| **Basic Functions**  | | |
| `setprec 256`         | ` `       | Sets global precision in bits   |
| `echo Hello World` | ` `       | Prints out all arguments        |
| `var x`            | ` `       | Prints variable name, and value |
| `file x`            | ` `       | Saves the results of `var x` to file named `x.txt` |
| **Arithmetic**  | | |
| `z = add x y`      | `z = x + y` | Adds `x` and `y`                |
| `z = sub x y`      | `z = x - y` | Subtracts `y` from `x`          |
| `z = mul x y`      | `z = x * y` | Multiplies `x` by `y`           |
| `z = div x y`      | `z = x / y` | Divides `x` by `y`              |
| `z = pow x y`      | `z = x ^ y` | Returns `x` to the power of `y` |
| **Rounding**  | | |
| `int x`            | ` `       | Truncates variable to an integer |
| **Math Functions**  | | |
| `z = sqrt x`       | ` `       | Returns the square root of `x`  |
| `z = sin x`        | ` `       | Returns the sine of `x`         |
| `z = asin x`        | ` `       | Returns the arcsine of `x`         |
| `z = cos x`        | ` `       | Returns the cosine of `x`       |
| `z = acos x`        | ` `       | Returns the arcosine of `x`       |
| `z = exp x`        | ` `       | Returns euler's number raised to `x`      |
| `z = log x`        | ` `       | Returns natural log of `x`      |
| `z = logb x y`     | ` `       | Returns the log base `x` of `y` |
| **Flow Blocks**  | | |
| `label z`     | ` `       | Creates a backup point `z` that you can return to from `goto z` |
| `goto z`     | ` `       | Starts executing code right after `label z` |
| `if z > x`     | ` `       | Conditional block that can use `<`, `>`, `==` |
| `fi`     | ` `       | Ends `if` block |
| `for i 0 10 2.5`     | ` `       | Starts `i` at `0`, keeps adding `2.5` until `i` >= `10` |
| `rof`     | ` `       | Ends `for` block |
