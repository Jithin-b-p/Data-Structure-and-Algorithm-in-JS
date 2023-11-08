function bubbleSort(array) {
  let isSwapped = false;
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - i - 1; j++) {
      if(array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwapped = true;
      }
    }
    if(isSwapped) break;
  }
}

const array = [5, 2, 10, 2, 1, 0];
bubbleSort(array);
console.log(array);