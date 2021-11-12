
import { Alert } from "react-native";
import SQLite, { SQLiteDatabase } from "react-native-sqlite-storage";

class DbConnection {
    static db: SQLiteDatabase;
    static {
        SQLite.enablePromise(true);
        DbConnection.db = SQLite.openDatabase(
            {
                name: "MariDb",
                location: "default"
            },
            () => console.log("success"),
            error => console.log("db connection error")
        )
    }

    constructor() { 
        
    }
    createTable() {
        DbConnection.db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS"
                + "ReactTable"
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT,Username TEXT, Password INTEGER);"
            )
        })
    }
    close(){return DbConnection.db.close()}
    select() { }
    async insert(username: string, password: string) {
        // return DbConnection.db.transaction((tx) => {
        //     return tx.executeSql(
        //         `INSERT INTO usertable (username,password) VALUES ("${username}","${password}")`
        //     )
        // }, (err) => {
        //     return err
        // })
        await DbConnection.db.transaction(async (tx) => {
            //await tx.executeSql(`INSERT INTO Users (Username,Password) VALUES ("${state.username}","${state.password}")`)
            await DbConnection.db.executeSql(`INSERT INTO Users (Username,Password) VALUES (?,?)`, [username, password])
            Alert.alert("Success", "Register is successfully")
        })
    }
    update() {

    }
}

export default DbConnection;
