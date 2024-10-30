import express from 'express';
const app = express();


// app.get('/',(req,res)=>{
//     res.status(200).send('Hello World');
// });

// app.get('/about',(req,res)=>{
//     res.header({
//         "token":"ldkjasfjaksas"
//     }).status(200).send('About');
// });




app.listen("3001",()=>{
    console.log(`Server  listening on port 3001`);
})