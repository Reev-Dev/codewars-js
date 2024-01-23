function alienLanguage(str) {
    //coding here...
    return str.replace(/\b\w+\b/g, word => word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase());
}