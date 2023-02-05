const jwt = require('jsonwebtoken')

function verify(req, res, next) {
    const token = req.header("Authorization")?.split('Bearer ')[1];
    if(!token){
        res.status(403).send('Access Forbidden')
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
        
    } catch (error) {
        return res.status(500).send(error);
        
    }

}

module.exports = verify;