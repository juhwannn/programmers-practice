function solution(n) {
    var answer = 0;
    const num = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            num.push(i);
        }
    }
    
    num.reduce((v, i) => {
        
        return answer = v + i;
    }, 0);
    return answer;
}