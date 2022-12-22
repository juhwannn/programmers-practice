function solution(n) {
    var answer = 0;
    const x = Math.sqrt(n);
    
    answer = x % 1 === 0 ? Math.pow(x+1, 2) : -1;
    
    return answer;
}