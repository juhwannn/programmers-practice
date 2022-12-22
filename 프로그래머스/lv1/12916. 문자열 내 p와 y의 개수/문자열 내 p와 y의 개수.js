function solution(s){
    var answer = true;
    let pCount = 0;
    let yCount = 0;
    
    s.split("").map(v => {
        v === "p" | v === "P" ? pCount++ : v === "y" | v === "Y" ? yCount++ : null;
    });

    return pCount === yCount;
}