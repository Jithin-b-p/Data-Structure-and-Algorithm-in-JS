class MergeSort {
  merge(arr, l, m, r) {
    // Your code here
    const temp = [];

    let point1 = l,
      point2 = m + 1;

    while (point1 <= m && point2 <= r) {
      if (arr[point1] <= arr[point2]) {
        temp.push(arr[point1]);
        point1++;
      } else {
        temp.push(arr[point2]);
        point2++;
      }
    }

    while (point1 <= m) {
      temp.push(arr[point1]);
      point1++;
    }

    while (point2 <= r) {
      temp.push(arr[point2]);
      point2++;
    }
    console.log(temp);
    for (let i = l; i <= r; i++) {
      arr[i] = temp[i - l];
    }
  }

  mergeSort(arr, l, r) {
    //code here

    if (l >= r) return;

    const mid = Math.floor(l + (r - l) / 2);
    console.log(mid);
    this.mergeSort(arr, l, mid);
    this.mergeSort(arr, mid + 1, r);

    this.merge(arr, l, mid, r);
  }
}

function main() {
  const arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
  const ms = new MergeSort();

  ms.mergeSort(arr, 0, arr.length - 1);
  console.log(arr);
}

main();
