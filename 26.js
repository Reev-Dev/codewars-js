function isolateIt(arr) {
    //coding here...
    return arr.map((str) => {
        if (str.length % 2 === 0) {
            const mid = str.length / 2;
            return str.slice(0, mid) + "|" + str.slice(mid);
        } else {
            const mid = Math.floor(str.length / 2);
            return str.slice(0, mid) + "|" + str.slice(mid + 1);
        }
    });
}