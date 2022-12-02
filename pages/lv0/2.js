import React from "react";

const code = (n) => {
    console.log(parseInt(n % 7 === 0 ? n / 7 : n / 7 + 1));
};

export default function Home() {
    code(7);
    code(1);
    code(15);

    return (
        <div>
            문제 설명
            머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다.
            피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

            제한사항
            1 ≤ n ≤ 100
            입출력 예
            n	result
            7	1
            1	1
            15	3
        </div>
    );
}
