function countGrade(scores) {
    //coding here...
    var count = (condition) => scores.filter(condition).length;

    return {
        S: count(score => score === 100),
        A: count(score => score < 100 && score >= 90),
        B: count(score => score < 90 && score >= 80),
        C: count(score => score < 80 && score >= 60),
        D: count(score => score < 60 && score >= 0),
        X: count(score => score === -1),
    };
}