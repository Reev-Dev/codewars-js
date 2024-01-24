function mirrorImage(arr) {
    //coding here...
    for (let i = 0; i < arr.length - 1; i++) {
        var num1 = arr[i].toString();
        var num2 = arr[i + 1].toString();

        if (num1 === num2.split('').reverse().join('')) {
            return [arr[i], arr[i + 1]];
        }
    }

    return [-1, -1];
}