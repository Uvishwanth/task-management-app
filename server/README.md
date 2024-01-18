// import express from 'express'
// import mysql from 'mysql'
// import cors  from 'cors'
// import dotenv from 'dotenv'



// const app=express();

// dotenv.config()

// app.use(cors());

// app.use(express.json())

// app.use(express.urlencoded({extended: true}))

// const connection=mysql.createConnection(
//    {
//     host: process.env.db_host,
//     password:process.env.db_password,
//     user: process.env.db_user,
//     database: process.env.db_database
//    }
// )


// app.get('/',(req,res)=>{
//     connection.query(sql,(err,results)=>{
//         if(err){
//             res.status(500).json({success:false, Message: ' you got an error in server'})
//         }
//         else{
//             res.json({Message: results})
//         }
//     })
// })
// connection.connect((err)=>{
//     if(err){
//         console.log('error in connecting to database')
//     }
//     else{
//         console.log('connection succesfull')
//     }
// })

// app.listen(50001,()=>{
//     console.log('yes i am listening '+'http://localhost:5001/')
// })


