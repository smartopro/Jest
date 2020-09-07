function expect(value) {
    return {
        toBe: expectation => {
            if (expectation === value) {
                console.log("Success");
            } else {
                console.log(`Error. Expectation is ${expectation}, but value is ${value}`);
            }

        }
    }
}

const sum = (a, b) => a + b;

const nativeNull = () => null;

// console.log(
//     expect(sum(1, 2)).toBe(2)
// );

module.exports = {sum, nativeNull}
//export {sum, nativeNull}
