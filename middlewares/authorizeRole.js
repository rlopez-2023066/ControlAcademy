export const authorizeRole = (roles) => {
    return (req, res, next) => {
        const userRole = req.user.role; // Suponiendo que el rol del usuario está en el token

        if (!roles.includes(userRole)) {
            return res.status(403).json({ message: 'Access denied' })
        }

        next()
    }
}