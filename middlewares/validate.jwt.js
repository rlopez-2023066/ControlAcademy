import jwt from 'jsonwebtoken' 

export const validateJwt = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]  

    if (!token) {
        return res.status(401).send({ message: 'Authorization token is required' }) 
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)  
        req.user = decoded   
        next()   
    } catch (error) {
        return res.status(401).send({ message: 'Invalid or expired token' }) 
    }
} 
