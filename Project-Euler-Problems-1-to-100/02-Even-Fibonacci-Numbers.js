function fiboEvenSum(n) {
    let num1 = 1;
    let num2 = 2;
    let sum = 0;

    while(num2 <= n){
        if(num2 % 2 === 0){
            sum += num2
        }

        let newNum = num1 + num2;
        num1 = num2;
        num2 = newNum;
    }

    return sum
}


console.log(fiboEvenSum(34));