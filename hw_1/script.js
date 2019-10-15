function sequence(startNumber, step) {
    startNumber;
    step;
    counter = 0;
    return function generator() {
        if (counter == 0) {
            counter++;
            return startNumber
        } else {
            return startNumber += step
        }
    }
}
//  let generator = sequence(10,1);
//  let generator = sequence(8,3);
// generator()

// let generatorTwo = sequence(7, 1)
// generatorTwo()

let gen = sequence(8, 2);

function take(gen, x) {
    const q = []
    for (let i = 0; i < x; i++) {
        q.push(gen())
    }
    return q;
}
console.log(take(gen, 5))