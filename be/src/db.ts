import * as mysql from 'mysql';


export class DB {

    conect() {
        return mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'samuel',
            password: 'MySql2019!',
            database: 'testedb'
        });
    }

    exec(sql: any, res: any) {
        const cx = this.conect();
        cx.query(sql, function (error, results, fields) {
            if (error) {
                console.error(error);
                res(error);
            } else {
                res(results);
            }
            cx.end();
            console.log('executou!');
        });
    }

};
