function solution(arr, divisor) {
    var answer = [];
    
    arr.map(v => {
        if (v % divisor === 0) {
            answer.push(v);
        }
    });
    answer.length === 0 ? answer[0] = -1 : null;
    return answer.sort((a, b) => a - b);
}