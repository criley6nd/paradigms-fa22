function fibonacci(n) {
    if (n < 2){
        return n
    }
    count = 2
    let n1 = 1
    let n2 = 0
    while (count <= n){
        let temp = n1
        n1 = n1 + n2
        n2 = temp
        count++
    }
    return n1
}

for(let i = 0; i < 10; i++){
    console.log(fibonacci(i))
}