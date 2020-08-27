//connect
const connectionString = 'postgres://xxbaefvimfpxga:ca9fed0f54881b71797cc1c8055bcecdcc10a33cd46739cbc6aaa441f9cb9c24@ec2-34-236-215-156.compute-1.amazonaws.com:5432/dbl90pc2jp5i80';
const { Client } = require('pg');
const client = new Client({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false }
})
client.connect();

//
var CaSi = class{
  constructor(key, HOTEN, HINH, MOTA){
    this.id = key,
    this.hoten = HOTEN
  }
};

const getAll = (request, response) => {
  client.query('SELECT * FROM products', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getAllCaSi = (request, response) => {
  client.query('SELECT * FROM casi', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getAll: getAll,
  getAllCaSi:getAllCaSi
}