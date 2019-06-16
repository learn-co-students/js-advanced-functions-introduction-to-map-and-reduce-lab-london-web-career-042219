// Your code here
function mapToNegativize(array) {
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    returnArray.push(-array[i]);
  }
  return returnArray;
}

function mapToNoChange(array) {
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    returnArray.push(array[i]);
  }
  return returnArray;
}

function mapToDouble(array) {
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    returnArray.push(array[i] * 2);
  }
  return returnArray;
}

function mapToSquare(array) {
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    returnArray.push(array[i] * array[i]);
  }
  return returnArray;
}

function reduceToTotal(array, startingPoint = 0) {
  let returnValue = startingPoint;
  for (let i = 0; i < array.length; i++) {
    returnValue += array[i];
  }
  return returnValue;
}

function reduceToAllTrue(array) {
  let returnValue = true;
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      returnValue = false;
    }
  }
  return returnValue;
}

function reduceToAnyTrue(array) {
  let returnValue = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      returnValue = true;
    }
  }
  return returnValue;
}function map(array, func) {
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    returnArray.push(func(array[i]));
  }
  return returnArray;
}

function reduce(array, func, startWith) {
  let r = !!startWith ? startWith : array[0];
  let i = !!startWith ? 0 : 1;

   for (; i < array.length; i++) {
    r = func(array[i], r);
  }

   return r;
}