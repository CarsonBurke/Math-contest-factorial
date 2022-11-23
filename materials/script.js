partB3(5)

function partB3(input) {

    console.log('Input:', input)
    console.log('----')

    let min = 1
    let tupleCount = 0

    // The difference is never more than half the input

    for (let i1 = min; i1 <= input; i1 += 1) {

        console.log("i1", i1)
        console.log('===')

        for (let i2 = min; i2 <= input; i2 += 1) {

            let foundTuple
            if (i1 === i2) continue
    
            let diff = i1 - i2
            console.log('diff', diff)
    
            console.log(i1, i2, diff)
    
            for (let i3 = min; i3 <= input; i3 += 1) {

                if (foundTuple) break
    
                if (i3 === i1 || i3 === i2) continue
                console.log("i3", i3)
                let i4 = i3 + Math.abs(diff)
    
                if (i4 > input) continue
                if (i4 === i1 || i4 === i2) continue
    
                tupleCount += 1

                foundTuple = true
    
                console.log('(', i1, '-', i2, '=', i3, '-', i4, ')', diff)
            }
        }
    }

    // *2 to account for positive / negative tuple identicles
    // *2 again to account for alternative versions (a, b, c, d) -> (c, d, a, b)

    /* tupleCount *= 2 */

    console.log(input, tupleCount)
}