function demo1 (request, response, next) {
    const res = {
        "salida": {
            "numero": "1",
            "texto": "Demo 1"
        }
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(res));
    response.end();
}

function demo2(request, response, next) {
    const res = {
        "salida": {
            "numero": "2",
            "texto": "Demo 2"
        }
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(res));
    response.end();
}

module.exports = {
    demo1: demo1,
    demo2: demo2
};

