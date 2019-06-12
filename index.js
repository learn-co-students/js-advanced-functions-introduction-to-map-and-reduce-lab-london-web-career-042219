// Your code here
function mapToNegativize(sourceArray) {
  let returnArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    returnArray.push(-sourceArray[i]);
  }
  return returnArray;
}

function mapToNoChange(sourceArray) {
  let returnArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    returnArray.push(sourceArray[i]);
  }
  return returnArray;
}

function mapToDouble(sourceArray) {
  let returnArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    returnArray.push(sourceArray[i] * 2);
  }
  return returnArray;
}

function mapToSquare(sourceArray) {
  let returnArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    returnArray.push(sourceArray[i] * sourceArray[i]);
  }
  return returnArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let returnValue = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
    returnValue += sourceArray[i];
  }
  return returnValue;
}

function reduceToAllTrue(sourceArray) {
  let returnValue = true;
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      returnValue = false;
    }
  }
  return returnValue;
}

function reduceToAnyTrue(sourceArray) {
  let returnValue = false;
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) {
      returnValue = true;
    }
  }
  return returnValue;
}
