// a: f(x) = x^2 + x^3 / x - (x+1)
// b: function F(x) = a(x) / b(x)

const a1 = (x) => {return(x^2 + x^3)}
const b1 = (x) => {return(x - (x+1))}
const F = (x) => {return(a1(x)/b1(x))}

// a: g(x) = x^2 + x^3 + (x^4 -1) / x - (x+1)
// b: function G(x) = a(x) / b(x)
const a2 = (x) => {return(x^2 + x^3 + (x^4 -1))}
const b2 = (x) => {return(x - (x+1))}
const G = (x) => {return(a2(x)/b2(x))}


// a: h(x, y) = x + y + y^2 + x^2 / y^2 - y - 1
// b: function H(x, y) = a(y) + b(x) / c(y)
const a3 = (y) => {return(y + y^2)}
const b3 = (x) => {return(x + x^2)}
const c3 = (y) => {return(y^2 - y - 1)}
const H = (x,y) => {return(a3(y)+b3(x)/c3(y))}


// a: j(x, y, z) = (x + x^2 + x^3) + (y + y^2 + y^3) + (z + z^2 + z^3)
// b: function J(x, y, z) = a(x) + a(y) + a(z)

const a4 = (x) => {return(x + x^2 + x^3)}
const J = (x,y,z) => {return(a4(x)+a4(y)+a4(z))}


let [x, y, z] = [6, 7, 8]
console.log(F(x), G(y), H(x, y), J(x, y, z))


//5. Evaluate the following twelve functions:

//js

// Question 1 (Beginner)
function a(name) {
    return "Hello, " + name + "!";
  }
  a("Alice");
  // OUTPUT:
  "Hello, Alice!"
  
  // Question 2 (Beginner)
  function b(num) {
    return num * num;
  }
  b(5);
  // OUTPUT:
  25

  // Question 3 (Beginner)
  function c(num) {
    return num % 2 === 0;
  }
  c(7);
  false


  // Question 4 (Intermediate)
  function d(a, b) {
    if (b === 0) {
      return 0;
    }
    return a + d(a, b - 1);
  }
  d(3, 4);
  12
  //Visualize the base case, and maybe a step or two out
  //Base case is zero
  //a + base case
  //a + (a + base case)
  
  // Question 5 (Intermediate)
  function e(n) {
    if (n === 0) {
      return 1;
    }
    return n * e(n - 1);
  }
  console.log("Question 5:", e(5));
  120
  //Base case is 1
  //n * base case
  //n * (n * base case)
  
  // Question 6 (Intermediate)
  function f(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + f(arr.slice(1));
  }
  console.log("Question 6:", f([1, 2, 3, 4, 5]));
  15


  // Question 7 (Intermediate)
  function g(n) {
    if (n <= 1) {
      return n;
    }
    return g(n - 1) + g(n - 2);
  }
  console.log("Question 7:", g(6));
  8
  
  // Question 8 (Intermediate)
  function h(str) {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    return h(str.slice(1, -1));
  }
  h("racecar");
  true
  //palindrome checker
  
  // Question 9 (Intermediate)
  function j(num) {
    if (num < 10) {
      return num;
    }
    return (num % 10) + j(Math.floor(num / 10));
  }
  j(1234);
  
  
  //mod 10
  //4+3+2+1 == 10
  
  // Question 10 (Intermediate)
  function k(a, b) {
    if (b === 0) {
      return a;
    }
    return k(b, a % b);
  }
  k(48, 18);

  //6
  
  // Question 11 (Intermediate)
  function l(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    if (str.length === 0) {
      return 0;
    }
    return vowels.includes(str[0].toLowerCase())
      ? 1 + l(str.slice(1))
      : l(str.slice(1));
  }
  l("JavaScript");

    //vowel counter, 3
  
  // Question 12 (Intermediate)
  function m(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    return base * m(base, exponent - 1);
  }
  m(2, 5);  

  //power function, 32