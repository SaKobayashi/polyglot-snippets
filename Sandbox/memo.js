// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// // Your code here!

// // findFactorsCount(1)
// // // output: [1]

// // findFactorsCount(6)
// // // output: [1, 2, 2, 3, 2, 4]

// // findFactorsCount(10)
// // // output: [1, 2, 2, 3, 2, 4, 2, 4, 3, 4]

// // function findFactorsCount(num){
// //     let out = new Array(num).fill(0);
// //     for(i = 1; i <= num; i++){

// //         let count = 0;
// //         for(j = 1; j <= i; j++){
// //             if(i % j === 0){
// //                 count++;
// //             }
// //         }
// //         out[i-1] = count;
// //     }
// //     console.log(out);
// // }

// // rangeScore(5)
// // // output: [1, 3, 5, 7, 9]

// // rangeScore(1)
// // // output: [1]

// // rangeScore(3)
// // // output: [1, 3, 5]

// // function rangeScore(num){
// //     console.log(Array.from({ length: num }, (_, i) => (i + 1) * 2 - 1));
// // }

// // toggleCount(5)
// // // output: [1, 0, 1, 0, 1]

// // toggleCount(1)
// // // output: [1]

// // toggleCount(6)
// // // output: [1, 0, 1, 0, 1, 0]

// // function toggleCount(num){
// //     console.log(Array.from({ length: num }, (_, i) => i % 2 === 0 ? 1 : 0));
// // }

// // indexDistance([3, 1, 4, 1, 5])
// // // output: [0, 1, 0, 2, 0]

// // indexDistance([1, 2, 3])
// // // output: [0, 0, 0]

// // indexDistance([2, 2, 2, 2])
// // // output: [0, 1, 1, 1]

// // function indexDistance(num){
    
// // }

// // zigzagSequence(7)
// // // output: [0, 1, -1, 2, -2, 3, -3]

// // zigzagSequence(1)
// // // output: [0]

// // zigzagSequence(4)
// // // output: [0, 1, -1, 2]

// // function zigzagSequence(num){
// //     const out = new Array(num).fill(0);
    
// //     for(let i = 0; i < num; i++){
// //         out[i] = Math.floor((i + 1)/2);
// //         if(i % 2 === 0 && i !== 0){
// //             out[i] *= -1;
// //         }
// //     }
// //     console.log(out);
// // }


// // calc(10, 3) // output: 10, 7, 4, 1
// // calc(9, 2)  // output: 9, 7, 5, 3, 1
// // calc(5, 4)  // output: 5, 1

// function calc (i, j){
//     const output = [];
//     output.push(i);
//     while(i - j > 0){
//         i -= j;
//         output.push(i);
//     }
//     console.log(output);
// }


// // find(123, 1) // output: 312
// // find(123, 2) // output: 231
// // find(9876, 1) // output: 6987

// function find(i ,j){
//     const numbers = String(i).split("");
//     for(let i = 0; i < j; i++){
//         let back = numbers[numbers.length - 1];
//         for(let j = 0; j < numbers.length - 1; j++){
//             numbers[numbers.length - 1 - j] = numbers[numbers.length - 2 - j];
//         }
//         numbers[0] = back;
//     }
//     console.log(numbers.join(""));
// }

// calc(7, 2)  // output: 1, 3, 6, 10
// calc(10, 3) // output: 1, 4, 9, 16
// calc(4, 1)  // output: 1, 2, 3, 4

// // 2 +1
// // 3 +2
// // 1 +0

// function calc(i, j){
//     const output = [];
//     let number = 1;
//     let k = 0;
//     output.push(number);
//     while (number < i){
//         number = number + j + k;
//         k += j - 1;
//         output.push(number);
//     }
//     console.log(output);
// }

// function test(i){
//     console.log(Array.from(String(i)));
//     return;
// }

// test(123);

findNumber(32)
// output: [1,32,2,16,4,8]

findNumber(51)
// output: [1,51,3,17]

findNumber(36)
// output:  [1, 36, 2, 18, 3, 12, 4, 9, 6]

function findNumber(number){
    const output = [];
    for(let i = 1; i * i <= number; i++){
        if(number % i === 0){
            output.push(i);
            if(i * i === number) break;
            output.push(number / i);
        }
    }
    console.log(output);
}



///////////////////////
process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

findNumber(32)
// output: [1,32,2,16,4,8]

findNumber(51)
// output: [1,51,3,17]

findNumber(36)
// output:  [1, 36, 2, 18, 3, 12, 4, 9, 6]
// divisor: [1, 2, 3, 4, 6, 9, 12, 18, 36]

function findNumber(num) {
    // 約数の判定
    const divisor = [];
    for(i = 1; i * i <= num; i++){
        if(num % i === 0){
            divisor.push(i);
            if(i * i === num) continue;
            divisor.push(num/i);
        }
    }
    console.log(divisor);
    
    // let out = new Array(divisor.length).fill(0);
    // let b = true;
    
    // for(i = 0; i < divisor.length; i++){
    //     if(b){
    //         out[i] = divisor[i/2];
    //         b = false;
    //     } else {
    //         if(i === 1){
    //             out[i] = divisor[divisor.length - 1];
    //         } else {
    //             out[i] = divisor[divisor.length - 1 - Math.floor(i/2)];
    //         }
    //         b = true;
    //     }
    // }
    // console.log(out);
}



