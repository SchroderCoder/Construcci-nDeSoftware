const path = require('path');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario.model');

exports.getNuevo = (request, response, next) => {
    response.render(path.join('usuarios', 'nuevo.ejs'), {
        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
    });
};

exports.postNuevo = (request, response, next) => {

    const usuario = new Usuario(request.body.username, request.body.password, request.body.nombre);
    usuario.save()
        .then(() => {
            response.status(303).redirect('/login');
        })
        .catch(err => {
            console.log(err);
            response.render('error', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        });
};

exports.getLogin = (request, response, next) => {
    response.render(path.join('usuarios', 'login.ejs'), {
        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
    });
};

exports.postLogin = (request, response, next) => {
    // Recupera el usuario (si es que existe)
    return Usuario.fetchOne(request.body.username)
        .then(([rows, fielData]) => {
            if (rows.length == 1) {
                bcrypt.compare(request.body.password, rows[0].password)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.isLoggedIn = true;
                            request.session.user = rows[0].nombre;
                            return request.session.save(err => {
                                response.redirect('/labs/lab17');
                            });
                        } else {
                            console.log("El usuario o contraseña no existe");
                            return response.redirect('/user/login');
                        }
                    }).catch(err => {
                        console.log(err);
                        return response.render("error.ejs", {
                            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                        });
                    });
            } else {
                console.log("El usuario o contraseña no existe");
                return response.render("error.ejs", {
                    isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                });
            }
        })
        .catch(err => {
            console.log(err);
            return response.render("error.ejs", {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        });

};

exports.logout = (request, response, next) => {
    
    request.session.destroy(() => {
        response.redirect('/user/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};