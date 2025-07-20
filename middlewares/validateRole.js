export const validateRole = (roles) => {
    return (req, res, next) => {
        const userRole = req.user.role  

       
        if (roles.includes(userRole)) {
            return next()   
        }

        return res.status(403).send({ message: 'Access Denied: Insufficient permissions' }) 
    } 
} 
