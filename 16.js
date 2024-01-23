function cutIt(arr) {
    //coding here...
    const shortestLength = Math.min(...arr.map(str => str.length));

    const result = arr.map(str => str.slice(0, shortestLength));

    return result;
}