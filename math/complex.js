/*

Complex functions

*/

function re(a) {
  return [a[0], 0];
}

function im(a) {
  return [0, a[1]];
}


//Conjugate
function conj(a) {
  return [a[0], - a[1]];
}

//Norm
function norm(a) {
  return Math.sqrt(norm_sqr(a));
}

//Norm * Norm
function norm_sqr(a) {
  return a[0] * a[0] + a[1] * a[1];
}

//scales a by b
function scale(a, b) {
  return [a[0] * b, a[1] * b];
}

//Adds a and b
function add(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}

//a - b
function sub(a, b) {
  return [a[0] - b[0], a[1] - b[1]];
}

//a * b
function mul(a, b) {
  return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
}

//a * a
function sqr(a) {
  return [a[0] * a[0] - a[1] * a[1], 2 * a[0] * a[1]];
}

// a/b
function div(a, b) {
  return scale(mul(a, conj(b)), (1 / norm_sqr(b)));
}

//e^a
function exp(a) {
  return scale([Math.cos(a[1]), Math.sin(a[1])], Math.exp(a[0]));
}

//ln(a)
function log(a) {
  var real = Math.log(norm(a)) / 2;
  var imag = Math.atan2(a[1], a[0]);
  return [real, imag];
}

//a^b
function pow(a, b) {
  var lga = log(a);
  var _e = mul(lga, b);
  return exp(_e);
}
//a^b, b is an integer
function pow_i(a, b) {
    if (b == 0) {
      return 1;
    }
    if (b == 1) {
      return a;
    }
    if (b % 2 == 0) {
      return pow_i(sqr(a), Math.floor(b / 2));
    }
    if (b % 2 == 1) {
      return mul(a, pow_i(sqr(a), Math.floor((b - 1) / 2)));
    }
}


/*

Functions class. Implements basic functions as well as some lesser known ones

*/

function dragon_geometric(x) {
  var sum = [0, 0];
  var sign = 1;
  for (var i = 1; i < 35; ++i) {
      sum = add(sum, scale(pow([i, 0], sub(x, [i, 0])), sign));
      sign = sign * -1;
  }
  return sum;
}


/*

Riemann zeta function. Sum of the recipricols to some power x

*/
function zeta(x) {
  var sign = -1;
  var sum = [1, 0];
  var nth_t = [1, 0];
  var n_x = scale(x, -1);
  for (var i = 2; i < 20; ++i) {
    nth_t = scale(pow([i, 0], n_x), sign);
    sum = add(sum, nth_t);
    sign *= -1;
  }
  var co = sub([1, 0], pow([2, 0], sub([1, 0], x)));
  return mul(co, sum);
}

function gamma(x) {
  var lgx = log(x);
  var x_n2 = sqr(div([1, 0], x));
  var x_k_n1 = div([1, 0], x);
  var _ex = mul(x, lgx);
  _ex = sub(_ex, x);
  _ex = sub(_ex, scale(log(scale(x, 1 / (2 * 3.141592653589793238))), 1 / 2));
  _ex = add(_ex, scale(x_k_n1, 1 / 12));
  x_k_n1 = mul(x_k_n1, x_n2);
  _ex = sub(_ex, scale(x_k_n1, 1 / 360));
  x_k_n1 = mul(x_k_n1, x_n2);
  _ex = add(_ex, scale(x_k_n1, 1 / 1260));
  return exp(_ex);
}


/*

sqrt(x) ^ 2 = x

*/
function sqrt(x) {
  var g = scale(x, 1 / 2);
  for (var i = 0; i < 8; ++i) {
    g = div(add(mul(g, g), x), scale(g, 2));
  }
}

function sin(x) {
  var sum = [0, 0];
  var x_s = sqr(x);
  var n_k = x;
  for (var i = 1; i < 20; i += 2) {
    sum = add(sum, n_k);
    n_k = scale(n_k, -1 / ((i + 1) * (i + 2)));
    n_k = mul(n_k, x_s);
  }
  return sum;
}

/*

Product function.

*/
function prod_p1(x) {
  var p = [1, 0];
  var x_i = x;
  for (var i = 1; i < 200; ++i) {
    if (norm_sqr(x_i) >= 1000000000000) {
      break;
    }
    p = mul(p, div(x_i, sub(x_i, [1, 0])));
    x_i = mul(x_i, x);
  }
  return p;
}

function prod_p2(x) {
  var p = [1, 0];
  var x_i = x;
  for (var i = 1; i < 200; ++i) {
    if (norm_sqr(x_i) >= 1000000000000) {
      break;
    }
    p = mul(p, div(x_i, add(x_i, [1, 0])));
    x_i = mul(x_i, x);
  }
  return p;
}

function sum_i(func, range) {
  var tot = [0, 0];
  for (var i = range[0]; i <= range[1]; ++i) {
    tot = add(tot, func([i, 0]));
  }
  return tot;
}

function integral_i(func, range) {
  var sum = [0, 0];
  for (var i = range[0]; i <= range[1]; i += .02) {
    sum = add(sum, func([i, 0]));
  }
  return scale(sum, .02);
}

function sum(func, range, irange) {
  var sum = [0, 0];
  for (var i = range[0]; i <= range[1]; ++i) {
    for (var j = irange[0]; j <= irange[1]; ++j) {
      sum = add(sum, func([i, j]));
    }
  }
  return sum;
}
