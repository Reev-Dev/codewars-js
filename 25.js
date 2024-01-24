function sortIt(arr) {
    //coding here...
    return arr.slice().sort((a, b) => {
        var countA = arr.filter((num) => num === a).length;
        var countB = arr.filter((num) => num === b).length;

        if (countA === countB) {
            return b - a;
        } else {
            return countA - countB;
        }
    });
}