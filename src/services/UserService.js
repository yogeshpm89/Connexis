const { default: Axios } = require("axios");


export const getUsers = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await Axios.get("https://jsonplaceholder.typicode.com/users");
            if (response && response.data) {
                resolve(response.data)
            } else {
                resolve([]);
            }
            
        } catch(error) {
            console.error(error);
            reject(error)
        }
    })
}

export const getUser = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            if (response && response.data) {
                resolve(response.data)
            } else {
                resolve([]);
            }
            
        } catch(error) {
            console.error(error);
            reject(error)
        }
    })
}

export const updateUser = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await Axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
            if (response && response.data) {
                resolve(response.data)
            } else {
                resolve([]);
            }
            
        } catch(error) {
            console.error(error);
            reject(error)
        }
    })
}

