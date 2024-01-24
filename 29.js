function bigToSmall(arr) {
    //coding here...
    var flatArray = [].concat(...arr);
    var sortedArray = flatArray.sort((a, b) => b - a);
    var resultString = sortedArray.join('>');
    return resultString;
}