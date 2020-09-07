const Lodash = require("./sync.js");
let lodash = new Lodash();

describe("function Lodash.compact", () => {
    let arr = [];

    beforeEach(() => {
        arr = [1, 0, true, false, null, "str", "", 0];
    });

    test("exists", () => {
        expect(lodash.compact).toBeDefined();
        expect(lodash.compact).not.toBeUndefined();
    });

    test("filters falsey values", () => {
        const compactArr = [1, true, "str"];
        expect(lodash.compact(arr)).toEqual(compactArr);
    });

    test("result not contain falsey values", () => {
        expect(lodash.compact(arr)).not.toContain(false);
        expect(lodash.compact(arr)).not.toContain(null);
        expect(lodash.compact(arr)).not.toContain(undefined);
        expect(lodash.compact(arr)).not.toContain(NaN);
        expect(lodash.compact(arr)).not.toContain("");
    });
});

describe("function Lodash.groupBy", () => {
    test("exists", () => {
        expect(lodash.groupBy).toBeDefined();
        expect(lodash.groupBy).not.toBeUndefined();
    });

    test("groups array by Math.floor", () => {``
        let arr = [2.1, 2.7, 3.4, 8.2, 3.9];
        let values = {2: [2.1, 2.7], 3: [3.4, 3.9], 8: [8.2]}

        expect(lodash.groupBy(arr, Math.floor)).toEqual(values);
    });

    test("groups array by length", () => {``
        let arr = ["one", "two", "three"];
        let values = {3: ["one", "two"], 5: ["three"]}

        expect(lodash.groupBy(arr, "length")).toEqual(values);
    });
});