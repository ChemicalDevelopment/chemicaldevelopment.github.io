/*

Complex functions

*/


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
  return mul(a, conj(b)).scale(1 / norm_sqr(b));
}

//e^a
function exp(a) {
  return scale([Math.cos(a[1]), Math.sin(a[1])], Math.exp(a[0]));
}

//ln(a)
function log(a) {
  return [Math.log(norm(a)), Math.atan(a[1] / a[0])];
}

//a^b
function pow(a, b) {
  return exp(mul(b, log(a)));
}