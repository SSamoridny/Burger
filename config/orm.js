const db = require('./connection.js');

class ORM {
    constructor() {

    }

    selectOne(burgerId) {
        const sql = `SELECT * FROM burgers `+ (burgerId ? `WHERE id = ?` : '' )
        return db.query( sql, [ burgerId ] )
    }

    selectAll() {
        const sql = `SELECT * FROM burgers`;
        return db.query(sql)
    }

    insertOne(burgerName){
        const sql = `INSERT INTO burgers(burger_name,devoured) VALUES (?,?)`;
        return db.query( sql, [burgerName,false] )
    }

    updateOne( id, devoured ){
        console.log(devoured)
        const sql = `UPDATE burgers SET devoured = ? WHERE id = ?`;
        return db.query( sql, [devoured ? 1 : 0, id ] )
    }
}

module.exports = ORM;