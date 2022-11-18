function partB3() {

    let n = 7
    let x = n - 2

    console.log('SEARCHING FOR TUPLE COUNT FOR f(' + n + ')')
    console.log('---------------------------')

    let tuple
    let totalTupleCount = 0
    let tupleCounts = []

    let min = 1
    let max = x

    for (let i = 0; i < x; i++) {

        let tupleListCount = i + 2

        

/* 
        let diff = (i + 1) * -1
         */
        /* console.log(diff) */


/* 
        for (let z = min; z < max; z++) {

            if (z === diff || z === diff * -1) {

                continue
            }

            for (let p = min; p < max; p++) {

                tupleListCount += 1
            }

            console.log(z, z + diff)
        }
 */
        tupleCounts.push(tupleListCount)

        totalTupleCount += tupleListCount
    }

    let result = totalTupleCount * 4

    console.log(n, tupleCounts, result)
}

partB3()