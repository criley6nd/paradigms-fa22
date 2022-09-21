let fibonacci = function () {
    let num1 = 0
    let num2 = 0

    return () => {
        if(num1 == 0 && num2 == 0){
            num2 = 1;
            return 0;
        }
        let fibVal = num1 + num2;
        num2 = num1;
        num1 = fibVal;
        return fibVal;
    };
}

let nexFib = fibonacci()

console.log(nexFib())
console.log(nexFib())
console.log(nexFib())
console.log(nexFib())
console.log(nexFib())
console.log(nexFib())
console.log(nexFib())
console.log(nexFib())
console.log(nexFib())