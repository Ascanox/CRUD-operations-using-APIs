const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
     host:"127.0.0.1",
     user:"root",
     password:"",
     database:'employees'
    
})

var connection = mysqlConnection.connect((err)=>{
     if(err){
          console.log('Error connecting' + JSON.stringify(err,undefined,2));
     }
     else{
          console.log('Database connected');
     }
}
)
module.exports = connection;