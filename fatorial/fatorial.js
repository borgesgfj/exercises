function calc_factorial(num) {
    let result = 1;
    if(num == 0){
        result = 1
    }
    while (num > 0){
        result *= num;
        num--
    };
    return result;
}

function print_result(num, result) {
    console.log(num + "! = " + result);
}

const num = 4
const result = calc_factorial(num)
print_result(num, result)


console.log('todos os fatorias de 0 a 10:')
for(let i = 0; i < 11; i++) {
    const result = calc_factorial(i)
    print_result(i, result)
}