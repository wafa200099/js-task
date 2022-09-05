function myFilter(list, callback) {
  let filteredArray = [];

  for (let index in list) {
    if (callback(list[index], index, list)) {
      filteredArray.push(list[index]);
    }
  }
  return filteredArray;
}

let arr1 = [1, 2, 3, 4, 5];
let filterd = myFilter(arr1, (element) => element > 1);
console.log(filterd);
