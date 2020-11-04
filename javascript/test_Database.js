let Database = require('./Database');
Database = new Database()

const {
  log,
  error
} = console

query = "select * from TBL_ADMIN"

// Database.Connect()
Database.Execute()
  .then(result => log(result))
  // .then(Database.Close())
  .catch(err => log(err))