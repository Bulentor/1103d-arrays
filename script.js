// задача №1
const fill = (arraySize, value) => {
  const arr = [];
  for (let i = 0; i < arraySize; i += 1) {
    arr.push(value);
  }
  return arr;
};

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill))

// задача №2
const reverse = (array) => {
  return array.reverse()
};

const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]

// задача №3
const compact = (array) => {
  const result = [];
  for (i = 0; i < array.length; i += 1) {
    if (array[i] !== 0 && Boolean(array[i]) === true) {
      result.push(array[i]);
    }
  }
  return result;
};

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]
