const {map} = require("./mock.js");

describe("Map function", () => {
    let array;
    let fn;

    beforeEach(() => {
        array = [1, 2, 3, 5, 8];
        fn = jest.fn(x => x ** 2);
        map(array, fn);
    });

    test("should call callback", () => {
        expect(fn).toBeCalled();
        expect(fn).toBeCalledTimes(5);
        expect(fn.mock.calls.length).toBe(5);
    });

    test("should pow 2 ach element", () => {
        const rightResult = [1, 4, 9, 25, 64];
        for (let i = 0; i < rightResult.length; i++) {
            expect(fn.mock.results[i].value).toBe(rightResult[i]);
        }
    });

    test("should fn work", () => {
        fn
            .mockReturnValueOnce(100)
            .mockReturnValueOnce(200)
            .mockReturnValue("42");

        expect(fn()).toBe(100);
        expect(fn()).toBe(200);
        expect(fn()).toBe("42");
        expect(fn()).toBe("42");
    });
});
