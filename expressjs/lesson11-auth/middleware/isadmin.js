import jwt from 'jsonwebtoken';

const isadmin = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).send("You do not have authority");
    }
    try {
        const decodedToken = jwt.verify(token, "jwtPrivateKey");
        req.user = decodedToken;
        if (decodedToken.role !== "admin") {
            return res.status(403).send("Access denied. You don't have permission.");
        }
        next();
    } catch (error) {
        res.status("wrong token")
    }
}

export default isadmin;