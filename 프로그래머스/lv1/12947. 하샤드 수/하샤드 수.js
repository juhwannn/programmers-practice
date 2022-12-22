function solution(x) {
    var answer = true;
    
    const t = x.toString().split("").reduce((sum, v) => {
        return sum + parseInt(v);
    }, 0);
    
    return x % t === 0 ? true : false;
}