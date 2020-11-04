let mssql = require('mssql');

const {
    log,
    error
} = console

class Database {
    constructor() {
        this.pool = new mssql.ConnectionPool({
            "user": "_USERNAME_", //default is sa
            "password": "_PASSWORD_",
            "server": "_SERVER_ADDRESS_", // for local machine
            "database": "_DATABASE_NAME_" // name of database
        });
    }
    Database() {

        // TODO: 생성자 논리를 여기에 추가합니다.

    }
    Connect() {
        return this.pool.connect()
            .then(conn => {
                log('▶ DB CONNECTED')
                return conn;
            })
    }
    Execute() {
        const conn = this.Connect();
        // log(conn.then(obj => {
        //     return obj._connected
        // }))
        return conn
            .then(pool => {
                return pool.request().query(query)
            })
            .then(result => {
                return result;
            })
            .catch(err => {
                log('Query failed!', err);
            });
    }

    BeginTransaction(transactionName) {
        if (transactionName == null || transactionName == '') {
            var transaction = new mssql.Transaction(globalConnection);
            transaction.begin(function (err) {
                if (err) {
                    log(err, "트랜잭션 실행에 실패했습니다.");
                }

                log("트랜잭션이 시작되었습니다.");
                var request = new mssql.Request(transaction);
                request.query(query, function (err, recordset) {
                    if (err) {
                        log(err, "쿼리 전송에 실패했습니다.");
                    }
                    this.Commit()

                });
            });
            req.results = recordset;
            next();
        } else {
            log("트랜잭션 이름이 있을 때 함수 미기재");
        }
    }

    Commit() {
        transaction.commit(function (err, recordset) {
            if (err) {
                log(err, "트랜잭션 적용에 실패했습니다.");
            }
            log("트랜잭션이 적용되었습니다.");
        });

    }
    Close() {
        this.pool.close()
        log("▶ DB CLOSED")
    }

    error() {

        mssql.on('error', err => {
            // ... error handler 
            log(err, "Sql database connection error ");
        })
    }
}


module.exports = Database;