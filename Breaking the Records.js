

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let maxCount = 0, minCount = 0;
    let maxScore = scores[0], minScore = scores[0];
    for (let score of scores) {
        if (score > maxScore){
            maxCount++;
            maxScore = score;
        } else if ( score < minScore){
            minCount++;
            minScore = score;
        }
    }
    return [maxCount,minCount];
}

console.log(breakingRecords([12,24,10,24]));

