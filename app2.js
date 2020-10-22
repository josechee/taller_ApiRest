const request = require('request')

function metodo_post() {
    return request({
        uri: 'http://localhost:3000/api/usuarios',
        method: 'POST',
        json: true,
        body: {
            email: "pepe2@gmail.com",
            nombre: "pepe2",
            password: "pepe2"
        }
    }, function(error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}

function metodo_get() {
    return request({
        uri: 'http://localhost:3000/api/usuarios',
        method: 'GET',
        json: true,
        headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkwZTZkNTYxYWJiZDIyODA4MDY3YWUiLCJub21icmUiOiJwZXBlIiwiZW1haWwiOiJwZXBlQGdtYWlsLmNvbSIsImlhdCI6MTYwMzMzMTk0NiwiZXhwIjoxNjAzNDE4MzQ2fQ.oZ_NvgQnZtS3mdpnh0qRMkkWPJEuID77SajPIC3fIok"
        },
        maxRedirects: 3
    }, function(error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}

function metodo_put() {
    return request({
        uri: 'http://localhost:3000/api/usuarios/pepe@gmail.com',
        method: 'PUT',
        json: true,
        body: {
            password: "pepee",
            nombre: "pepee"
        },
        headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkwZTZkNTYxYWJiZDIyODA4MDY3YWUiLCJub21icmUiOiJwZXBlZSIsImVtYWlsIjoicGVwZUBnbWFpbC5jb20iLCJpYXQiOjE2MDMzMzIxOTAsImV4cCI6MTYwMzQxODU5MH0.q12QWgoI1yB4wgJnmV43YD2TZoW3uHTHjHI55cC-Vpg"
        },
        maxRedirects: 3
    }, function(error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}

function metodo_delete() {
    return request({
        uri: 'http://localhost:3000/api/usuarios/pepe@gmail.com',
        method: 'DELETE',
        headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkwZTZkNTYxYWJiZDIyODA4MDY3YWUiLCJub21icmUiOiJwZXBlZSIsImVtYWlsIjoicGVwZUBnbWFpbC5jb20iLCJpYXQiOjE2MDMzMzIxOTAsImV4cCI6MTYwMzQxODU5MH0.q12QWgoI1yB4wgJnmV43YD2TZoW3uHTHjHI55cC-Vpg"
        },
        maxRedirects: 3
    }, function(error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}
//metodo_post();
metodo_get();
//metodo_put();
//metodo_delete();