const bcrypt = require('bcryptjs');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');
const secrets = require('../config/secrets');

router.post('/register', (req, res) => {
    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
        .then(newUser => {
            req.session.loggedIn = true;
            res.status(201).json(newUser);
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
})

router.post('/login', (req, res) => {
    const {username, password} = req.body;

    Users.findBy({username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                // session cookies
                // req.session.loggedIn = true;
                // req.session.user = user.username;
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token
                });
            } else {
                res.status(401).json({message: 'You shall not pass!'});
            }
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
})

router.get('/logout', (req, res) => {
    if(req.session) {
        req.session.destroy(err => {
            if(err) {
                res.status(500).json({message: 'Unable to logout'})
            } else {
                res.status(200).json({message: 'successful logout'});
            }
        })
    } else {
        res.status(200).json({message: 'User never logged in'})
    }
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;