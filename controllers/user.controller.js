const path = require('path');

exports.logout = (request, response, next) => {
    
    request.session.destroy(() => {
        response.redirect('/labs/lab14'); //Este código se ejecuta cuando la sesión se elimina.
    });
};