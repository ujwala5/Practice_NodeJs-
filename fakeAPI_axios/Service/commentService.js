const axios = require('axios');

const fetch_all_comments = async () => {
    let config = ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/comments'
    });

    return await axios(config)
        .then((response) => {
            // console.log("response.data : ", response.data);
            return response.data;
        })
        .catch((error) => {
            // console.log(error.message);
            throw "page commentservice.js - function fetch_all_comments : ", error.message;
        });
};

const fetch_comments_by_ID = async (id) => {
    let config = ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/comments/' + id
    });

    return await axios(config)
        .then((response) => {
            // console.log("response.data", response.data);
            return response.data;
        })
        .catch((error) => {
            throw "page commentservice.js - function fetch_comments_by_ID : ", error.message;

        });
};

const fetch_comments_by_postID = async (postId) => {
    let config = ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/comments?postId=' + postId
    });

    return await axios(config)
        .then((response) => {
            // console.log("response", response.data);
            return response.data;
        })
        .catch((error) => {
            throw "page commentservice.js - function fetch_comments_by_postID : ", error.message;

        });
};


module.exports = { fetch_all_comments, fetch_comments_by_ID, fetch_comments_by_postID };