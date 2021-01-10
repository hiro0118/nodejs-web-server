function onGet() {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:49152/test');
    request.onload = function () {
        updateDocument(this, 'getresult');
    }
    request.send(null);
}

function onPost() {
    const jsonBody = {};
    jsonBody.name = 'jsonObject';
    jsonBody.note = 'Sent by front end.';

    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:49152/test');
    request.setRequestHeader('Content-type', 'application/json');
    request.onload = function () {
        updateDocument(this, 'postresult');
    }
    request.send(JSON.stringify(jsonBody));
}

function updateDocument(response, elementId) {
    const status = response.status;
    const resHeader = response.getAllResponseHeaders();
    const resBody = JSON.parse(response.responseText);
    document.getElementById(elementId).innerText = status + '\n' + resHeader + '\n' + JSON.stringify(resBody);
}