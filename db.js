//connect
const connectionString = 'postgres://xxbaefvimfpxga:ca9fed0f54881b71797cc1c8055bcecdcc10a33cd46739cbc6aaa441f9cb9c24@ec2-34-236-215-156.compute-1.amazonaws.com:5432/dbl90pc2jp5i80';
const { Client } = require('pg');
const client = new Client({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false }
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const getAllCaSi = (request, response) => {
  client.query('SELECT * FROM casi', (error, results) => {
    if (error) {
      throw error
    }
    return response.status(200).json({
      data: results.rows,
      status: 200
    })
  })
}


const getCasiByPage=(request, response)=>{
  var page = parseInt(request.query.page) || 1;
  var perPage = 5;
  var end = (page -1) * perPage;
  var sql = `SELECT * FROM casi LIMIT ${perPage} OFFSET ${end}`;
  console.log(end);
  client.query(sql,  (error, results) =>{
    if (error) {
      throw error
    }
    return response.status(200).json({
      data: results.rows,
      status: 200
    })
});
}

module.exports = {
  getCasiByPage:getCasiByPage
}