const jwt = require('jsonwebtoken');

//How to know if user is already logged in 
//with the JWT userToken
const  isLoggedIn = (req, res, next) => {
    const token = req.cookies.userToken;
    if (!token) {
        return res.redirect('/');
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
        return next(new Error('JWT_SECRET is not configured'));
    }

    try {
        const user = jwt.verify(token, secret);
        if (typeof user !== 'object' || !user || typeof user.firstName !== 'string') {
            res.clearCookie('userToken');
            return res.redirect('/');
        }

        res.locals.currentUser = { firstName: user.firstName };
        return next();
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            res.clearCookie('userToken');
            return res.redirect('/');
        }
        return next(err);
    }
}

const isRegisterLoginEn = (req, res, next) => {
    if(!req.cookies.userToken){
        next();
    } else {
        res.redirect('/');
    }
}
module.exports = {
    isLoggedIn,
    isRegisterLoginEn
}