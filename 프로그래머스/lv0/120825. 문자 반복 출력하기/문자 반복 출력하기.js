function solution(my_string, n) {
    var answer = '';
    my_string.split("").map(v => {
        for (let i = 0; i < n; i++) {
            answer += v;
        }
    });
    return answer;
}