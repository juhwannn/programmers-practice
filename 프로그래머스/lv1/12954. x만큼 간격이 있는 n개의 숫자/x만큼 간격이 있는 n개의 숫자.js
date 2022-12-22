function solution(x, n) {
    var answer = [];
    
    for (num = 1; num <= n; num++) {
        answer.push(num * x)
    }
    
    return answer;
}