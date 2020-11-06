const ORM = require('../config/orm.js');
const orm = new ORM();

class Burger {
    constructor() {
        
    }

    ListBurgers() {
        return orm.selectAll();
    }

    devourBurger(id,isDevoured) {
        return orm.updateOne(id,isDevoured);
    }

    submitBurger(name) {
        return orm.insertOne(name);

    }
}

module.exports = Burger;