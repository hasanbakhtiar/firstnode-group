import mongoose from "mongoose";

const authdb = {
    username:"backendapi20",
    password:"firstnode24",
    clusterName:"firstcluster"
}

 const connectdb = async()=>{
    try {
        await mongoose.connect(`mongodb+srv://${authdb.username}:${authdb.password}@firstcluster.7fepk.mongodb.net/?retryWrites=true&w=majority&appName=${authdb.clusterName}`)
        console.log("mongodb connect is successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default connectdb;

