const mysql = require('mysql');
const { database} = require ('./keys');
const { promisify } = require('util');
const pool = mysql.createPool(database); 

pool.getConnection((err, connection)=>{
     if(err){
          if(err.code==='PROTOCOL_CONNECTION_LOST'){
               console.error('DATABSE CONNECTION WAS CLOSED');
          }
          else if(err.code==='ER_CON_COUNT_ERROR'){
               console.error('DATABASE HAS TO MANY CONNECTIONS');
          }else if(err.code === 'ECONNREFUSED'){
               console.error('DATABASE CONNECTION WAS REFUSED');
          }
     }
     if(connection) connection.release();
          console.log('DB is connected');
})
// promisefy Pool query
pool.query = promisify(pool.query);

module.exports = pool;