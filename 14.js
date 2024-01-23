function colorOf(r, g, b) {
    //coding here
    var red = ('0' + r.toString(16)).slice(-2);
    var green = ('0' + g.toString(16)).slice(-2);
    var blue = ('0' + b.toString(16)).slice(-2);

    var colorCode = `#${red}${green}${blue}`;

    return colorCode;
}
