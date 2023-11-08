function bubbleSort(array) {
  let isSwapped;
  for (let i = 0; i < array.length; i++) {
    isSwapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
}

const array = [24, 18, 38, 43, 14, 40, 1, 54];
bubbleSort(array);
console.log(array);
