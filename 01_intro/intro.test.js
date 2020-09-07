const {sum, nativeNull} = require("./intro.js");
//import {sum} from "./intro.js";

describe("sum function", () => {
    test("returns sum of args", () => {
        expect(sum(1, 3)).toBe(4);
        expect(sum(2, 4)).toBeGreaterThan(5);
    });

    test("working with floats", () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
});

describe("Native null", () => {
    test("Native null should return null", () => {
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeFalsy();
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeTruthy();
        expect(nativeNull()).not.toBeUndefined();

    });
});
