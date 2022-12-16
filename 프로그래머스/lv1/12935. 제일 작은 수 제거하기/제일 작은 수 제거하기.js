function solution(arr) {
    let answer = [];
    let minNumber = arr[0];
    
    arr.map(v => {
        if (v < minNumber) {
            minNumber = v;
        }
    });
    
    answer = arr.filter((v) => {
        return v !== minNumber;
    });
    
    if (answer.length === 0) {
        answer = [-1];
    }

    return answer;
}