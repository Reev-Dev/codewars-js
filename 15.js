function howManySmaller(arr, n) {
    //coding here..
    var roundedArr = arr.map(element => parseFloat(element.toFixed(2)));

    var count = roundedArr.filter(element => element < n).length;

    return count;
}
