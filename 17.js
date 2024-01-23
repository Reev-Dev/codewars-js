function firstToLast(str, c) {
    //coding here..
    const firstIndex = str.indexOf(c);
    const lastIndex = str.lastIndexOf(c);

    if (firstIndex !== -1 && lastIndex !== -1) {
        return lastIndex - firstIndex;
    } else {
        return -1;
    }
}