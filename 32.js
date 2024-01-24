function persistence(num) {
    //code me
    let numStr = num.toString();

    let count = 0;

    while (numStr.length > 1) {
        num = numStr.split('').reduce((product, digit) => product * parseInt(digit, 10), 1);

        numStr = num.toString();

        count++;
    }

    return count;
}