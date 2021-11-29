import SQLite from "react-native-sqlite-storage";

function errorCB(err) {
    console.log("SQL Error: " + err);
}
  
function  successCB() {
    console.log("SQL executed fine");
  }
  
function  openCB() {
    console.log("Database OPENED");
}

class MYSQLite {
    static db
    static{
        MYSQLite.db = SQLite.openDatabase(
            "test.db", 
            "1.0", 
            "Test Database", 
            20000,
            openCB,
            errorCB,
        )
    }
    createTable() {
        MYSQLite.db.transaction((txn) => {
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS categories 
              (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(20)
              )
            `,
            [],
            (sqlTxn, res) => {
              console.log("table created successfully")
            },
            error => {
              console.log("error on creating table", error);
            }
          )
        })
      }
}

export default MYSQLite
