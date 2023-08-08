const validateUserAuth= (req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success:true,
            data:{},
            message: 'something went wrong ',
            email: 'Email or password are missing the  request'
        });
    }
}

module.exports={
    validateUserAuth
}