function fiveLine(s) {
    //coding here...
    var str = s.trim();
    for (let i = 1; i < 5; i++) {
        str += "\n"
        for (let j = 0; j <= i; j++) {
            str += s.trim();
        }
    }
    return str;
}