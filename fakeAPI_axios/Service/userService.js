const axios = require('axios');

const fetch_all_users = async () => {

    let config = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    };

    return await axios(config)
        .then((response) => {
            // console.log("response.data ==>> ", response.data);
            return response.data;
        })
        .catch((error) => {
            // console.log(error);
            throw "page userService.js - function fetch_all_users : " + error.message;
        });
};

const fetch_single_user_by_Id = async (id) => {

    let config = ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users/' + id
    });

    return await axios(config)
        .then((response) => {
            console.log("response.data : ", response.data);
            return response.data;
        })
        .catch((error) => {
            // console.log({ error });
            return "page userService.js - function fetch_single_user_by_Id : " + error.message;
        });
};

const fetch_user_by_username = async (userName) => {
    let config = ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users?username=' + userName
    });

    return await axios(config)
        .then((response) => {
            // console.log("response.data : ", response.data);
            return response.data;
        })
        .catch((error) => {
            // console.log(error);
            throw "page userService.js - function fetch_user_by_username : " + error.message;
        });
};


module.exports = {
    fetch_all_users,
    fetch_single_user_by_Id,
    fetch_user_by_username
};