
function selectionSort(array) {

  let minIndex;
  for(let i = 0; i < array.length - 1; i++) {
    minIndex = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if(minIndex != i) {
      const temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
    }
  }
}
const array = [24, 18, 38, 43, 14, 40, 1, 54];
selectionSort(array);
console.log(array);