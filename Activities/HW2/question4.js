function reversedSum(num1, num2) { 
    //reverses both numbers and casts to int 
    let n1 = parseInt(reverse(num1 + ''))
    let n2 = parseInt(reverse(num2 + ''))

    //sums the reversed numbers and reverses the sum
    let num = n1 + n2
    num = reverse(num + '')
    return num
}

function reverse(s) {
    let r = ''
    let first = true
    //walks through string backwards ignoring trailing zeros
    //puts the characters in a new array in reverse and returns
    for(let i = s.length - 1; i >= 0; i--){
        if(first){
            if(s[i] == 0){
                continue
            }
            else{
                first = false
            }
        }
        r = r + s[i]
    }
    return r
}

num1 = "24" 
num2 =  1
console.log(reversedSum(num1, num2));
num1 = 4358 
num2 =  "754"
console.log(reversedSum(num1, num2))
num1 = 305
num2 =  794
console.log(reversedSum(num1, num2))

