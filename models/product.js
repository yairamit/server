const db = require("../config/db");

class Product {
  constructor(name, category,price) {
    this.name = name;
    this.category = category;
    this.price=price;
  }

  save() {
 
    


    let sql = `
    insert into products(
      name,
      category,
      price
    )
    values(
      "${this.name}",
      "${this.category}",
      "${this.price}"
     
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM products;";

    return db.execute(sql);
  }

  static findByName(name) {
    let sql = `SELECT * FROM products WHERE name = ${this.name};`;

    return db.execute(sql);
  }
}

module.exports = Product;
