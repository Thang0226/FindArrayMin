function minArrayIndex(arr) {
  if (arr.length == 0) {
    return -1;
  }
  let min = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  return index;
}

let arr1 = [3, 5, 1, 8, -3, 7, 8];
let min_ind_1 = minArrayIndex(arr1);
alert(min_ind_1);
let arr2 = [7, 12, 6, 9, 20, 56, 89];
let min_ind_2 = minArrayIndex(arr2);
alert(min_ind_2);
let arr3 = [];
let min_ind_3 = minArrayIndex(arr3);
alert(min_ind_3);
let arr4 = [0, 0, 0, 0, 0, 0];
let min_ind_4 = minArrayIndex(arr4);
alert(min_ind_4);
