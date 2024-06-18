const axios = require('axios');

const fn_test_function = () => {
    var data = JSON.stringify({
        "data": [
            {
                "phone_number": "8087722957",
                "Name": "Manisha"
            },
            {
                "phone_number": "7350710905",
                "Name": "Falguni"
            }
        ]
    });

    var config = {
        method: 'post',
        url: 'https://api-smartflo.tatateleservices.com/v1/broadcast/leads/295531',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU4NTEsImlzcyI6Imh0dHBzOlwvXC9jbG91ZHBob25lLnRhdGF0ZWxlc2VydmljZXMuY29tXC90b2tlblwvZ2VuZXJhdGUiLCJpYXQiOjE2NzUzMzA5ODQsImV4cCI6MTk3NTMzMDk4NCwibmJmIjoxNjc1MzMwOTg0LCJqdGkiOiJOR2xyN3ROSVRaMkdib2hVIn0._oBkBOxqTnF-Jzm-Cf3w6ctzMkcOfMc9ci7VV4r3kHAd'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error.response.status);
            // console.log(error);
        });
};


module.exports = { fn_test_function };