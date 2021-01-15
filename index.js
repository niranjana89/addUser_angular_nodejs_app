const express = require('express')
app = express();

const body_parser = require('body-parser')
port = 3080

app.use(body_parser.json())
app.use(express.static(process.cwd()+"/my-app/dist/angular-nodejs-example"));


app.listen(port, (req,res)=>{
    console.log(`server is listening to port ${port}`)
})


app.get('/', (req,res)=>{
    res.sendFile(process.cwd()+"/my-app/dist/angular-nodejs-example/index.html")
})

const users = []
app.post('/api/user', (req,res) => {
    const user = req.body.user
    users.push(user)
    res.json("user added")
})

app.get('/api/users',(req,res) =>{
    res.json(users)
})





