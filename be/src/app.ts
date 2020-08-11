import * as express from 'express';
import { DB } from './db';
var bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/login', async (req: any, res: any) => {
    try {
        const db = new DB();
        const resp = await db.exec(`select * from test`);
        console.log(resp.rows);
        // if (resp > 0) {
            res.send({
                msg: "Login com sucesso",
                retorno: resp.rows
            });
        // } else {
        //     res.send({
        //         msg: "Erro ao fazer logins"
        //     });
        // }
    } catch (error) {
        res.send(error);
    }
});

app.post("/login", (req, res) => {
    // const body = req.body;
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

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})