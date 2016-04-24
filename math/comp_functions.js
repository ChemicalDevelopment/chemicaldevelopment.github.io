/*

Functions class. Implements basic functions as well as some lesser known ones

*/


/*

Riemann zeta function. Sum of the recipricols to some power x

*/
function zeta(x) {
  var sum = [1, 0];
  for (var i = 2; i < 1000; ++i) {
    sum += pow(i, -x);
  }
  return sum;
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

/*

Product function.

*/
function prod_p1(x) {
  var p = [1, 0];
  var x_i = x;
  for (var i = 1; i < 1000; ++i) {
    if (norm(x_i) >= 10000000000) {
      break;
    }
    p = mul(p, div(x_i, sub(x_i, 1)));
    x_i = mul(x_i, x);
  }
  return p;
}


/*

Dragon geometric.
Custom function

*/
function dragon_geometric(x) {
  var sum = 0;
  for (var i = 1; i < 1000; ++i) {  
    sum += pow(-1, i) * pow(i, x - i);
  }
  return sum;
}


/*

Returns 1 if prime

*/
function isprime(z) {
  if (z == 0 || z == 1) {
    return 0;
  }
  if (z == 2) {
    return 1;
  }
  if (z % 2 == 0) {
    return 0;
  }
  for (var c = 3; c < Math.sqrt(z); c += 2) { 
    if (z % c == 0) {
      return 0;
    }
  }
  return 1;
}