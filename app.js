const request = require('request')

function metodo_post() {
    return request({
        uri: 'http://localhost:3000/api/usuarios',
        method: 'POST',
        json: true,
        body: {
            email: "luis2@gmail.com",
            nombre: "pepe",
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
        url: 'http://localhost:3000/api/usuarios',
        method: 'GET',
        json: true,
        headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxYmYzOTQ5ZTkwYjEzNmM5MzAxODMiLCJub21icmUiOiJqb3NlcyIsImVtYWlsIjoiam9zZV9sdWlzQG1haWwuY29tIiwiaWF0IjoxNjAzMzkwOTI3LCJleHAiOjE2MDM0NzczMjd9.jpbh4844_ek38HY1vKGjzqdB7WjxC18kkQMZh-3nSlQ"
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
        uri: 'http://localhost:3000/api/usuarios/jose_luis@mail.com',
        method: 'PUT',
        json: true,
        body: {
            password: "123456",
            nombre: "hola"
        },
        headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxYmYzOTQ5ZTkwYjEzNmM5MzAxODMiLCJub21icmUiOiJqb3NlcyIsImVtYWlsIjoiam9zZV9sdWlzQG1haWwuY29tIiwiaWF0IjoxNjAzMzkwOTI3LCJleHAiOjE2MDM0NzczMjd9.jpbh4844_ek38HY1vKGjzqdB7WjxC18kkQMZh-3nSlQ"
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
        uri: 'http://localhost:3000/api/usuarios/jose_luis@mail.com',
        method: 'DELETE',
        headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxYmYzOTQ5ZTkwYjEzNmM5MzAxODMiLCJub21icmUiOiJqb3NlcyIsImVtYWlsIjoiam9zZV9sdWlzQG1haWwuY29tIiwiaWF0IjoxNjAzMzkwOTI3LCJleHAiOjE2MDM0NzczMjd9.jpbh4844_ek38HY1vKGjzqdB7WjxC18kkQMZh-3nSlQ"
        },
        maxRedirects: 3
    }, function(error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}

//metodo_post();
//metodo_get();
//metodo_put();
//metodo_delete();