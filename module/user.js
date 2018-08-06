var mongoose = require('mongoose');
var userModel = require('../model/userSchema');

function createUser(request, response, next) {
    const user = new userModel.model(request.param('userInfo'));

    user.save(function(err) {
        if (err) {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.write(JSON.stringify(err));
            response.end();
        } else {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.write('{"message": "User successfully saved."}');
            response.end();
        }
    });
}

function validateUser(request, response, next) {
    const userFind = {
        email: request.param('email'),
        password: request.param('password')
    };

    userModel.model.findOne(userFind, function(err, res) {
        if (err) {
            response.statusCode = 201;
            response.setHeader('Content-Type', 'application/json');
            response.write(JSON.stringify(err));
            response.end();
        } else {
            let user = {
                "id": res._id,
                "name": res.name,
                "password": res.password,
                "email": res.email,
                "pais": res.pais
            };

            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.write(JSON.stringify(user));
            response.end();
        }
    });
}



module.exports = {
    validateUser,
    createUser
}