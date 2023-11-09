function insertionSort(array) {

  for(let i = 1; i < array.length; i++) {

    let currentElement = array[i];
    let j = i - 1;

    while(j >= 0 && array[j] > currentElement) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = currentElement;

  }
}

const array = [24, 18, 38, 43, 14, 40, 1, 54];
insertionSort(array);
console.log(array);