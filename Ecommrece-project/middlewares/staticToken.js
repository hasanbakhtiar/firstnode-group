const staticToken = async (req,res,next)=>{
    try {
        const token = process.env.STATICTOKEN;
        const incomingToken = req.headers[`${process.env.STATICKEY}`];

        if (!Object.keys(req.headers).includes(`${process.env.STATICKEY}`)) {
            return res.status(401).send('no access');
        }
        if (!incomingToken) {
            return res.status(401).send('no access');
            
        }
        if (incomingToken !== token) {
            return res.status(401).send('no access');
        }
        next();
    } catch (error) {
        console.log(error);
        
    }
}