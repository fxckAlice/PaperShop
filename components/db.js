const mysql = require('mysql2')
const res = require("express/lib/response");

class DBRepo{
    //TODO:change this shit
    connection = mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'drvrVIRT56',
        port: process.env.DB_PORT || 3306,
        database: process.env.DB_DATABASE || 'shop',
    })
    static getCategories() {
        const query = 'SELECT * FROM categories';

        return new Promise((resolve, reject) => {
            this.instance.connection.query(query, (err, result) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    static instance = null;
    static getDBRepo(){
        if(this.instance == null){
            this.instance = new DBRepo();
        }
        return this.instance;
    }

}

module.exports = DBRepo
