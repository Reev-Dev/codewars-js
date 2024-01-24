function tailAndHead(arr) {
    //coding here...
    const result = arr.reduce((acc, num, index, array) => {
        if (index < array.length - 1) {
            const tail = Number(num.toString().slice(-1));
            const headNext = Number(array[index + 1].toString()[0]);
            acc.push(tail + headNext);
        }
        return acc;
    }, []);

    return result.reduceRight((product, num) => product * num, 1);
}