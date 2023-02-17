const express = require('express');

const bodyParser = require('body-parser');

const mysql = require('mysql');
const app = express();
app.use(bodyParser.json());
   
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'employees'
});
   

conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected');
});
   




app.get('/api/employees',(req, res) => {
  let sqlQuery = "SELECT * FROM employees";
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   



app.get('/api/employees/:id',(req, res) => {
  let sqlQuery = "SELECT * FROM employees WHERE id=" + req.params.id;
    
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   

app.post('/api/employees',(req, res) => {
  let data = {name: req.body.name, body: req.body.body};
  
  let sqlQuery = "INSERT INTO employees SET ?";
  
  let query = conn.query(sqlQuery, data,(err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   

app.put('/api/employees/:id',(req, res) => {
  let sqlQuery = "UPDATE employees SET name='"+req.position.name+"', position='"+req.position.position+"' WHERE id="+req.params.id;
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   


app.delete('/api/employees/:id',(req, res) => {
  let sqlQuery = "DELETE FROM employees WHERE id="+req.params.id+"";
    
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
      res.send(apiResponse(results));
  });
});
  

function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}
   

app.listen(3000,() =>{
  console.log('Server started on port');
});