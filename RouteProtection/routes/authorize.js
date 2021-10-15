function authorize(permissionRoles){
    return (req,res,next)=>{
        // first get the user from the request
       console.log(permissionRoles)
       console.log(req.user)
       req.user = verified;
       

       if(permissionRoles!="admin"|| permissionRoles!="user")
      return  res.send('you are not  allowed')

        //if yes allow 

        next();

    }
}

module.exports = authorize;