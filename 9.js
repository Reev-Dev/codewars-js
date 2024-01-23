function padIt(str, n) {
    var num = 1;
    var sym = "*"
    while (num <= n) {
        if (num % 2 != 0) str = sym + str;
        else str = str + sym;
        num++;
    }
    return str;
}