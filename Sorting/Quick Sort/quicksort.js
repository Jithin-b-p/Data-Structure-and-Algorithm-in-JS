class QuickSort {
  partition(arr, low, high) {
    // here we are considering 1st element as partition.
    let i = low,
      j = high,
      partitionElement = arr[low];

    // making the partition element to its sorted position.
    // So everything less than will be on left of the element and
    // everything greater than will be on right of the element.
    while (i < j) {
      while (i <= high - 1 && arr[i] <= partitionElement) {
        i++;
      }

      while (j >= low + 1 && arr[j] > partitionElement) {
        j--;
      }

      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
  }

  quickSort(arr, low, high) {
    if (low >= high) return;

    const partitionIndx = this.partition(arr, low, high);

    this.quickSort(arr, low, partitionIndx - 1);
    this.quickSort(arr, partitionIndx + 1, high);
  }
}

function main() {
  const arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
  const qs = new QuickSort();

  qs.quickSort(arr, 0, arr.length - 1);
  console.log(arr);
}

main();
