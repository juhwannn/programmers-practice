function solution(before, after) {
    var answer = 0;
    
    JSON.stringify(before.split("").sort()) === JSON.stringify(after.split("").sort()) ? answer = 1 : answer = 0;
    
    return answer;
}