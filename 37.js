function countAnimals(animals, count) {
    //coding here...
    var result = [];
    count.map(a => result.push(animals.split(a).length - 1));
    return result;
}