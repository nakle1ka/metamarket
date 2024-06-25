const jwt = require('jsonwebtoken');

const userAuth = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(" ")[1]

    if(!token) {
        return res.send("Unautherizated!")
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, result) => {
        if(err) return res.send("Invalid Token!")

        req.token = result.token

        next()
    })
}
 
module.exports = userAuth
