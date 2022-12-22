function solution(arr) {
    
    const answer = arr.reduce((sum, v, i) => {

        return sum + v;
    }) / arr.length;
    
    return answer;
}