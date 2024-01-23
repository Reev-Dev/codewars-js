function splitAndMerge(string, separator) {

    var words = string.split(" ");

    var result = words.map(word => word.split("").join(separator));

    return result.join(" ");
}