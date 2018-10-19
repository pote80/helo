require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');


const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance);
        console.log('connected to the db')
    })

app.post('/api/register', (req, res) => {
    console.log(req.body)
    const dbInstance = req.app.get('db');
    const { username, password } = req.body;
    dbInstance.add_new_user([username, password]).then((response) => {
        res.status(200).send(response)
    })
})

app.post('/api/login', (req, res) => {
    const dbInstance = req.app.get('db');
    const { username, password } = req.body;
    dbInstance.login_user([username, password]).then((response) => {
        res.status(200).send(response)
        console.log(response)
    })
})


app.listen(port, () => {
    console.log(`Ship docked at port: ${port}`)
})