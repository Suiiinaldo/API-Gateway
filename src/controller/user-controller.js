const { UserService } = require("../services");
const { StatusCodes} = require("http-status-codes");
const { SuccessResponse, ErrorResponse} = require("../utils/common")


/*
 * POST : /signup 
 * req-body : { name : abcd123@gmail.com,
 *              password : *******,
 *              username : ABC_123
 *            }
 */
async function signup(req,res){
    try {
        const user = await UserService.createUser({
            email : req.body.email,
            password : req.body.password,
            username : req.body.username
        });
        SuccessResponse.data = user;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);   
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCodes)
                .json(ErrorResponse);
    }
}

module.exports = {
    signup,

}
