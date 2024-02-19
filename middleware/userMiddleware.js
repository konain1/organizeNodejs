
const {User} =require('../model/db')


async function userMiddleware(req,res,next){

    let {username} = req.headers;

    let existance = await User.findOne({username:username})

    try {
        if(existance){
            return res.status(403).json({msg:"user already Exist"})
        }
        next();
    } catch (error) {
        res.status(404).json({msg:'Internal server Error'})
    }
}

async function PurchasedMiddleware(req,res,next){
    let {username} = req.headers;
    let existance = await User.findOne({username});

    if(existance){
         next();
    }else{
        return res.json(403).json({msg:'user does not exist cant purchase courses'})
    }
}

module.exports = {userMiddleware,PurchasedMiddleware}