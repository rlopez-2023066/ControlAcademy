'use strict'

import  jwt  from "jsonwebtoken"

export const validateJwt = async(req,res,next)=>{
    try {
        let secretKey = process.env.SECRET_KEY
        let { Authorization } = req.headers; 
        if (!Authorization) return res.status(401).send({ message: 'Unauthorized' });
        let user = jwt.verify(autorization, secretKey)
        req.user = user
        next()
    } catch (error) {
        console.error(error)
        return res.status(401).send({message: 'Invalid credentials'})
    }
}