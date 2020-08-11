const mysql = require('mysql');

module.exports = class DB {

    constructor() {
        this.connection();
    }

    conect() {
        return mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'MySql2019!',
            database: 'testedb'
        });
    }

    exec(sql, res) {
        const cx = this.conect();
        cx.query(sql, function (error, results, fields) {
            if (error) {
                console.error(error);
                res.json(error);
            } else {
                res.json(results);
            }
            connection.end();
            console.log('executou!');
        });
    }

};
