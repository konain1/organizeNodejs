
function userRoute(req,res){

    res.json({msg:"get method called by user"})
}


function adminRoute(req,res){
    res.json({msg:'get request by admin'})
}


module.exports = {userRoute,adminRoute}