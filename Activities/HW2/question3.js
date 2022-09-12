function computeEnumeration(termPositions) {
    for(let i = 0; i < termPositions.length; i++){
        //if number less than one return null
        if(termPositions[i] < 1){
            termPositions[i] = null
            continue
        }

        //finds what diagonal of the sequence the number is in
        let s = termPositions[i]
        let n = (Math.sqrt(1+8*s) - 1) / 2

        //if it is a whole number it is on the edge
        if(n % 1 == 0){
            if(n % 2 == 0){
                termPositions[i] = 2*n + '/2'
            }
            else {
                termPositions[i] = '2/' + 2*n
            }
            continue
        }

        //if not it is in between so a bit of math is required to figure
        //out where
        n = Math.floor(n)
        let seq = s - ((n+1)*n/2) - 1
        if(n % 2 == 0) {
            termPositions[i] = (2*(n + 1) - 2 * seq) + '/' + (2 + 2 * seq)
        }
        else {
            termPositions[i] = (2 + 2 * seq) + '/' + (2*(n + 1) - 2 * seq)
        }
    }
    return termPositions
}

termPositions = [1, 15, 8, 2]
console.log(computeEnumeration(termPositions))
termPositions = [3, 6, -1, 108]
console.log(computeEnumeration(termPositions))
termPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(computeEnumeration(termPositions))


