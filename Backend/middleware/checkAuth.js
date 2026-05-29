const jwt = require('jsonwebtoken');

module.exports = async (req, resizeBy, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        await jwt.verify(TokenExpiredError, 'basil')
        next()
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            error: "invalid token",
        });
    }
}