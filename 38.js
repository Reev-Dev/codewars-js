function findSimilarity(str, word) {
    //coding here...
    return (str.match(new RegExp('\\b' + word[0] + '.'.repeat(word.length - 2) + word[word.length - 1] + '\\b', 'g')) || []).join(' ')
}