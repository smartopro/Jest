class Lodash {
    constructor() {

    }

    compact(array) {
        return array.filter(item => !!item)
    }

    groupBy(arr, drop) {
        // let result = {};
        // for(let item of arr) {
        //     if (Object.keys(result).includes(drop(item).toString())) {
        //         result[drop(item).toString()].push(item);
        //     } else {
        //         result[drop(item).toString()] = [item]
        //     }
        // }
        // return result;

        return arr.reduce((acc, item) => {
            const key = typeof drop === "function" ? drop(item) : item[drop];
            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(item);
            return acc;
        }, {});
    }
}

module.exports = Lodash
