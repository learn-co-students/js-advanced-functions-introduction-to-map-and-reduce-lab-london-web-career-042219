function mapToNegativize(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(-1 * arr[i]);
  }
  return newArr;
}

function mapToNoChange(arr) {
  let newArr = arr;
  return newArr;
}

function mapToDouble(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

function mapToSquare(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr[i]);
  }
  return newArr;
}

function reduceToTotal(arr, startingPoint = 0) {
  for (var i = 0; i < arr.length; i++) {
    startingPoint = startingPoint + arr[i];
  }
  return startingPoint;
}

function reduceToAllTrue(arr) {
  let answer = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == false) {
      return false;
    } else {
      answer = true;
    }
  }
  return answer;
}

function reduceToAnyTrue(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  if (newArr.length > 0) {
    return true;
  } else {
    return false;
  }
}
