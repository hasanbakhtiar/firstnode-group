import jwt from 'jsonwebtoken';

const auth = (req,res,next)=>{
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(401).send("You do not have authority");
        }
        try {
            const decodedToken = jwt.verify(token,"jwtPrivateKey");
            req.user = decodedToken;
            next();
        } catch (error) {
            res.status("wrong token")
        }
}

export default auth;