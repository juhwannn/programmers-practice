function solution(s) {
    var answer = '';
    let min;
    let max;
    
    s.split(" ").map(v => {
        if (!min) {
            min = v
        }
        if (!max) {
            max = v
        }
        
        if (min > parseInt(v)) {
            min = v;
        }
        
        if (max < parseInt(v)) {
            max = v
        }
    });
    return min + " " + max;
}