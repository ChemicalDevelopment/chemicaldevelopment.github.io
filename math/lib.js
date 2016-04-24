function zeta(x) {
  var sum = 1;
  for (var i = 2; i < 1000; ++i) {
    sum += Math.pow(i, -x);
  }
  return sum;
}

function gamma(x) {
  return Math.exp(x * Math.log(x) - x - (Math.log(x  / (2 * pi))) / 2 + 1 / (12 * x) - 1 / (360 * x * x * x) + 1 / (1260 * x * x * x * x * x));
}

function floor(x) {
  return Math.floor(x);
}

function gcd(a, b) {
   if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
}

function exp(x) {
  return Math.exp(x);
}

function pow(a, b) {
  return Math.pow(a, b);
}

function sqrt(x) {
  return Math.sqrt(x);
}

function log(x) {
  return Math.log(x); 
}

function fac(x) {
  var pr = 1;
  for (var i = 1; i <= x; ++i) {
    pr *= i;
  }
  return pr;
}

function prod_p1(x) {
  var p = 1;
  var x_i = x;
  for (var i = 1; i < 1000; ++i) {
    if (x_i >= 10000000000) {
      break;
    }
    p *= (x_i) / (x_i - 1);
    x_i *= x;
  }
  return p;
}

function dragon_geometric(x) {
  var sum = 0;
  for (var i = 1; i < 1000; ++i) {  
    sum += pow(-1, i) * pow(i, x - i);
  }
  return sum;
}

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