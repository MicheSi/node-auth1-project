// module.exports = (req, res, next) => {
//     if (req.session && req.session.loggedIn) {
//         next();
//     } else {
//         res.status(401).json({message: 'Unauthorized user'});
//     }
// }

const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
    const {authorization} = req.headers;

    if (authorization) {
        jwt.verify(authorization, secrets.jwtSecret, function(err, authorized) {
            if (err) {
                res.status(401).json({message: 'unauthorized'});
            } else {
                req.token = authorized;
                next();
            }
        })
    } else {
        res.status(400).json({message: 'unable to process request'})
    }
}
