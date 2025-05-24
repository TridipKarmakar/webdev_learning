//named export

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multipy(a, b) {
  return a * b;
}

module.exports = {
  add,
  subtract,
  multipy,
};
