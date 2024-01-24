function rndCode() {
    //coding here...
    var code = '';
    var first = "ABCDEFGHIJKLM";
    var second = "0123456789";
    var third = "~!@#$%^&*";

    for (var i = 0; i < 2; i++) {
        code += first[~~(Math.random() * first.length)];
    }

    for (var i = 0; i < 4; i++) {
        code += second[~~(Math.random() * second.length)];
    }
    for (var i = 0; i < 2; i++) {
        code += third[~~(Math.random() * third.length)];
    }

    return code;
}