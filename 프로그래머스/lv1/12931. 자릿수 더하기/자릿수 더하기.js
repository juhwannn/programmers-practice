function solution(n) {
    const num = n.toString().split("");
    
    var answer = num.reduce((sum, v) => {
        return sum + parseInt(v)
    }, 0);

    return answer;
}