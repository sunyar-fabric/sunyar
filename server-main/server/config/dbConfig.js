module.exports = {
  //HOST: 'localhost', //192.168.9.72  //185.110.188.86  //82.115.16.181
 //PASSWORD: '1', //root@1400 /1234
  // HOST: 'localhost',  
  // PASSWORD: '1', 
  // DB: 'sequelizeDB',
  // DB: "sunyarDB",
  // DB: 'sunyarStage',  
  // DB:'sunyarDev', 
  //DB:'SunyTest',
  // DB: "postgres" ,
  // DB: "sun1",
  
  HOST: 'localhost', //192.168.1.158  185.221.237.129  
  PASSWORD: '1',  //postgres
  DB: 'sunyarTest',

  USER: 'postgres',
  dialect: 'postgres',
  port: 5433, 
 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

