function solution(n) {
    const answer = [];
    n.toString().split("").reverse().map(v => {
        answer.push(parseInt(v))
    });
    return answer;
}