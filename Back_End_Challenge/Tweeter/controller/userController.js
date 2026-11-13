const userModel = require ('../models/userModel');
const postModel = require ('../models/tweetModel');

require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// //Handle Error (separate function)
// const handleError = (err) => {
//     console.log(err.mrssage, err.code);
// }

//Register Login Page
const renderLoginRegisterPage = (req, res) => {
    res.render('registerLoginPage',{ttl: 'Signup Login Page',
         errorRegister: null,
         successRegister: null,
         errorLogin: null,
         result:null});
}

//Register
const register = async (req, res) => {
    console.log(req.body);

    if(req.body.password !== req.body.confirmPassword){ /*TODO -ERROR*/
        res.render('registerLoginPage',{
            ttl: 'Register Login Page',
            errorRegister: "Error",
            successRegister: null,
            errorLogin: null,
            result:"Passwords are not matching" });
    } else {
        try{
            //hash the password before saving into model
            let hashedPwd = await bcrypt.hashSync(req.body.password, 12);

                  
            let userData = {
                ...req.body,
                password: hashedPwd
            };

            let newUser = new userModel(userData);
            newUser.save()
                .then(() => {
                    res.render('registerLoginPage', {
                        ttl: 'Register Login Page',
                        errorLogin: null,
                        errorRegister: null,
                        successRegister: true,
                        result: 'User is sucessfully registered. Please login now..'});
                })
        }
        catch(err){
           console.log(err);
        }
    }
    
}

//Login
const login = async (req, res) => {

    try{
        //First check if user exists , if not REgister
        let existsUser = await userModel.findOne({email: req.body.email});
    
        if(existsUser){
            let isCorrectPwd = bcrypt.compareSync(req.body.password,  existsUser.password);
            if(isCorrectPwd) {
                console.log(existsUser);
                // user can go to homepage
                //JWT
                let secret = process.env.JWT_SECRET;
                let userToken = await jwt.sign(
                    { firstName: existsUser.firstName },
                    secret,
                    { expiresIn: '30m' }
                );
                             
                // Send the token to res
                res.cookie('userToken',userToken);
                res.redirect("/tweet");

            } else {
                res.render('registerLoginPage', {
                    ttl: 'Register Login Page', 
                    errorLogin: "Error",
                    errorRegister: null,
                    successRegister: null,
                    result: "Password not correct"});
            }
        } else {
            res.render('registerLoginPage', {
                ttl: 'Register Login Page',
                errorLogin: "Error",
                errorRegister: null,
                successRegister: null,
                result: "User is not existing , Please Register"});
        }
    }
    catch(err){  /*TODO ERROR messages from validation*/
        console.log(err);
    }
}

//logout
const logout = (req, res) => {
    res.clearCookie("userToken");
    res.redirect("/");
}



module.exports = {
    renderLoginRegisterPage,
    register,
    login,
    logout
}