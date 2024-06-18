const axios = require('axios');

const fetch_all_posts = async () => {

    let config = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts',
    };

    // let result = await axios(config);
    // console.log(result.data);

    return await axios(config)
        .then(function (response) {
            console.log("response.data : ", response.data);
            return response.data;
        })
        .catch(function (error) {
            // console.log(error);
            // console.log("post_service.js  fetch_all_posts : " + error.message);
            throw "page post_service.js - function fetch_all_posts : " + error.message;
        });

};

const fetch_single_post_by_postId = async (postId) => {
    let config = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts/' + postId
    };

    return await axios(config)
        .then((response) => {
            console.log("response.data", response.data);
            return response.data;
        })
        .catch((error) => {
            // console.log("page postService.js - function fetch_single_post_by_postId : " + error.message);
            throw "page postService.js - function fetch_single_post_by_postId : " + error.message;

        });
};

const fetch_posts_by_userId = async (userid) => {
    let config = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts?userId=' + userid
    };

    return await axios(config)
        .then((response) => {
            console.log("response.data ", response.data);
            return response.data;
        })
        .catch((error) => {
            // console.log(error);
            throw "page postservice.js - function fetch_posts_by_userId : ", error.message;

        });

};

module.exports = {
    fetch_all_posts,
    fetch_single_post_by_postId,
    fetch_posts_by_userId
};