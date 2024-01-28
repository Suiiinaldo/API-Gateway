const CrudRepository = require("./crud-repository");
const { User } = require("../models");
const { Op, or } = require("sequelize");

class UserRepository extends CrudRepository {
    constructor(){
        super(User);
    }

    async findUser(emailOrUsername){
        const user = await User.findOne({
            where:{
                [Op.or] :[
                    {
                        email : {
                            [Op.eq] : emailOrUsername
                        }
                    },
                    {
                        username : {
                            [Op.eq] : emailOrUsername
                        }
                    }
                ]
            }
        });
        return user;

    }
}

module.exports = UserRepository;