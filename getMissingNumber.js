/**
 * Solution shuuld return the missing number
 * from an arrau when elements of the array are
 * increase srtictly on 1
 */

const arr = [1, 2, 3, 5];

function getMissing(arr) {
  let missing;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      missing = arr[i] + 1;
      break;
    }
  }

  return missing;
}

console.log(getMissing(arr));
