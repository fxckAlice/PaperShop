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
    static getCategories(){
        const query = 'SELECT * FROM categories';
        this.instance.connection.query(query, (err, result) => {
            if (err) {
                console.error(err);
            }
            else{
                console.log(JSON.stringify(result));
                return JSON.stringify(result)
            }
        })
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
