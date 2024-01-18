
import express, { urlencoded } from 'express' // for server enviroment
import mysql from 'mysql2' // for local storage
import cors from 'cors' // middleware for security
import dotenv from 'dotenv'
const port = 5050; // por number which the server is running



// express environment

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())
dotenv.config();

// database creating connection

const connection = mysql.createConnection(
    {
        host: process.env.db_host,
        password: process.env.db_password,
        database: process.env.db_database,
        user: process.env.db_user
    }
)


// data base connectivity check

connection.connect((err) => {
    if (err) {
        console.log("error in connecting server ", err)
    }
    else {
        console.log("successfully connected to the database")
    }
})

// get methods here

app.get('/', (req, res) => {

    connection.query('select * from to_do', (err, result) => {
        if (err) {
            res.serverStatus(500).json({ message: "error at your server side " })
        }
        else {
            res.json(result)
        }
    })
})

// viewing task
app.get('/view/:id', (req, res) => {

    const id = req.params.id;

    connection.query('select * from to_do where id=?', [id], (err, result) => {
        if (err) {
            res.serverStatus(500).json({ message: "error at your server side " })
        }
        else {
            res.json(result)
        }
    })
})



//  post methods here

app.post('/task', (req, res) => {
    const { task, formatDeadline  } = req.body;

    const sql = "INSERT INTO to_do(task,deadline) VALUES(?,?)";

    connection.query(sql, [task,formatDeadline], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        } else {
            return res.status(200).json({ success: true, message: 'Data successfully posted to the database' });
        }
    });
});



// updating task

app.post('/edit/:id', (req, res) => {
    const {formatDeadline, taskData}= req.body
    const id=req.params.id;

    const sql = "UPDATE to_do SET task=?,deadline=? WHERE id=?";

    connection.query(sql, [taskData,formatDeadline, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error at your server' });
        } else {
            return res.status(200).json({ success: true, message: 'Successfully posted your data to the database' });
        }
    });
});


// daleting task

app.delete('/delete/:task', (req, res) => {
    
    
    connection.query('DELETE FROM to_do where task=?', [req.params.task], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'error at your server' });
        }
        else {
            return res.status(200).json({ success: 'true', message: 'successfully deleted' })
        }
    })
})



app.listen(port, () => {
    console.log('successfully connected server is running at ', `http://localhost:${port}`)
})

