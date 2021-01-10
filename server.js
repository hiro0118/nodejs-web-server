'use strict';

const axios = require('axios');
const express = require('express');
const fs = require('fs');

// Constants
const PORT = 49152;
const HOST = '0.0.0.0';
const BACKEND_BASE_URL = 'http://backend:8080/test/';

// App
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res) => {
    fs.readFile("./index.html", "UTF-8", function (err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    })
});

app.get('/test', (clientReq, clientRes) => {

    console.log('Received GET');

    // axios.get(BACKEND_BASE_URL).then(res => {
    //     let received = JSON.stringify(res.data);
    //     clientRes.writeHead(200, { "Content-Type": "application/json" });
    //     clientRes.end(received);
    // }).catch(error => {
    //     console.error(error);
    // })

    // Test code for the missing backend service.
    const jsonBody = {};
    jsonBody.name = 'jsonObject';
    jsonBody.note = 'Returned by the web server for GET.';
    clientRes.writeHead(200, { "Content-Type": "application/json" });
    clientRes.end(JSON.stringify(jsonBody));
});

app.post('/test', (clientReq, clientRes) => {

    console.log('Received POST with ' + JSON.stringify(clientReq.body));

    // const data = JSON.stringify(clientReq.body);
    // axios.post(BACKEND_BASE_URL, data, {
    //     headers: {
    //         // Overwrite Axios's automatically set Content-Type
    //         'Content-Type': 'application/json'
    //     }
    // }).then(res => {
    //     let received = JSON.stringify(res.data);
    //     clientRes.writeHead(201, { 
    //         'Content-Type': 'application/json',
    //         'Location': 'http://backend:8080/test/1'
    //      });
    //     clientRes.end(received);
    // }).catch(error => {
    //     console.error(error);
    // });

    // Test code for the missing backend service.
    const jsonBody = {};
    jsonBody.name = 'jsonObject';
    jsonBody.note = 'Returned by the web server for POST.';
    clientRes.writeHead(201, {
        'Content-Type': 'application/json',
        'Location': 'http://backend:8080/test/1'
    });
    clientRes.end(JSON.stringify(jsonBody));

});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});