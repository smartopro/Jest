const Ajax = require("./async.js");
const axios = require("axios");

jest.mock("axios");

describe("Ajax.echo()", () => {
    test("returns input value", async () => {
        const result = await Ajax.echo("some data");
        expect(result).toBe("some data");
    });

    test("returns input value by Promise", () => {
        return Ajax.echo("some data").then(data => {
            expect(data).toBe("some data")
        });
    });

    test("catches error", async () => {
        try {
            await Ajax.echo();
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe("Error!");
        }
    });
});

describe("Ajax: GET", () => {
    let response;
    let todos;

    beforeEach(() => {
        todos = [
            {id: 1, title: "Todo 1", completed: false}
        ];

        response = {
            data: { todos }
        }
    });

    test("should return data from backend  ", () => {
        axios.get.mockReturnValue(response);

        return Ajax.get().then( data => {
            expect(data.todos).toEqual(todos)
        })
    });
});