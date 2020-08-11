const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
const { DB } = require('./db');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/login', (req, res) => {
    const db = new DB();
    db.exec(`select count(*) from user where login = '${user}' and password = '${password}'`, function(resp) {
       console.log(resp);
       if (resp > 0) {
           res.send({
               msg: "Login com sucesso"
           });
       } else {
           res.send({
               msg: "Erro ao fazer logins"
           });
       }
    });


 });

app.post("/login", (req, res) => {
    const {
        user,
        password
    } = req.body;
    //const db = new DB();

    //db.exec(`select count(*) from user where login = '${user}' and password = '${password}'`, function(resp) {
    //    console.log(resp);
    //    if (resp > 0) {
    //        res.send({
    //            msg: "Login com sucesso"
    //        });
    //    } else {
    //        res.send({
    //            msg: "Erro ao fazer logins"
    //        });
    //    }
    //});

    res.send({
        msg: "Login com sucesso"
    });
    
} );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})