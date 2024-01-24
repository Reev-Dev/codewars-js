const shuffleIt = (arr, ...el) => {
    //coding here...
    for (let [index1, index2] of el) {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
    return arr;
}