function increaseBalance(x, y) {
  let result = x;
  result += y;

  return result;
}

function decreaseBalance(x, y) {
  let result = x;
  result -= y;

  return result;
}

function divideBalanceByAccounts(x, y) {
  let result = x;
  result /= y;

  return result;
}

function getRestAfterDivision(x, y) {
  let result = x;
  result %= y;

  return result;
}

function incrementValue(x) {
  return ++x;
}

function decrementValue(x) {
  return --x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));
console.log(incrementValue(234));
console.log(decrementValue(456));
