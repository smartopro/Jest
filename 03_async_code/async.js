const axios = require("axios");

class Ajax {
    static echo(data) {
        return new Promise((resolve, reject) => {
            if (data) {
                setTimeout(() => {
                    resolve(data)
                }, 500);
            } else {
                reject(new Error("Error!"));
            }
        })
    }

    static async get() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            return response.data
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Ajax;
