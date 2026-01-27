function calc(n) {
  return String(n)
    .split('')
    .map(Number)
    .map(n => n + 1);
}

console.log(calc(56));

function calcValue(i){
    if (i === 0) return 0;
    if (i === 1) return 1;
    if(i > 0){
        return i * calcValue(i-1);
    }
}

function findValue (i){
    if(i===0) return 0;
    if(i > 0){
        return i + findValue(i - 1);
    }
}

function transform (i){
    return (i % 2 === 0) ? i * 2 : i * i;
}

function convertNumber(i){
    return String(i).split("").map(Number).reduce((a, b) => a + b, 0);
}

function buildArray(i){
    return Array.from({length: i}, (v, index) => index * 2 + 1);
}

function calc(i){
    if(i === 1) return 1;
    return (i % 2 === 0) ? i * (i - 1) : i * ((i - 1) * (i - 2));
}

function build(i){
    return Array.from({ length: i }, (v, index) => calcValue(index + 1));
}

function transform(i){
    return String(i).split("").map(i => Number(i)).filter(i => !Number.isNaN(i)).reduce((a,b) => a + b);
}

function test(i){
    return Array.from(String(i));
}
console.log(test(123));

function test(){
    return Array.from(String());
}

console.log()




