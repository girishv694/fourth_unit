function authorize(permissionRoles){
    return (req,res,next)=>{

        // get user from the request
        const user = req.user


        //check if atleast one role of that user match permissions

        // if he yes then allow

        next();

    }
}

module.exports = authorize;