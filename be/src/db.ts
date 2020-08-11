import { Pool } from 'pg';


export class DB {

    async conect() {
        const c = new Pool({
            user: 'samuel',
            host: 'db',
            database: 'samuel_des',
            password: 'postgres',
            port: Number('5432'),
            application_name: `Login Nodejs`,
        });


        return await c.connect();
    }

    async exec(sql: any) {
        const cx = await this.conect();
        const res = await cx.query(sql, []);
        console.log(res.rows);
        return res;
    }

};
