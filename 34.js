function cutCube(volume, n) {
    //coding here...
    return Math.round(Math.cbrt(volume / n)) ** 3 === volume / n
        && Math.round(Math.cbrt(n)) ** 3 === n;
}