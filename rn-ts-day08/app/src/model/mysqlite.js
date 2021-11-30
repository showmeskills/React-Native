import SQLite from "react-native-sqlite-storage";
import {Platform} from "react-native";

class MySqlite {
    db = null;
    results = [];
    msg=true
    constructor() {
        // Platform.OS === "ios" 
        // ? 
        this.db = SQLite.openDatabase(
            "test.db", "1.0", "Test Database", 200000, openCB, errorCB
        )
        // :
        // this.db = SQLite.openDatabase({
        //     name: "rn_sqlite",
        //     location: "Library",
        // },successCB,errorCB)
    }
    createTable() {
        this.db.transaction((txn) => {
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS users 
                (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  username VARCHAR(20),
                  password INTEGER(10)
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
    addUsername(username,password) {
        return new Promise((resolve,reject)=>{
            this.db.transaction((txn) => {
                txn.executeSql(
                    `INSERT INTO users (username,password) VALUES (?,?)`,
                    [username,password],
                    (sqlTxn, res) => {
                            console.log(`username:${username} register added successfully`);
                            let {rowsAffected} = res
                            if(rowsAffected > 0){
                                resolve(this.msg= true);
                            }else{
                                reject(this.msg= false);
                            }
                            this.close()
                        },
                        error => {
                            console.log("error on adding register")
                        }
                )
            })
        })
    }
    selectAll() {
        return new Promise((resolve,reject)=>{
            this.db.transaction((txn) => {
                txn.executeSql(
                    `SELECT * FROM users ORDER BY id DESC`,
                    [],
                    (sqlTxn, res) => {
                        console.log("categories retrieved successfully");
                        let len = res.rows.length;
                        if (len > 0) {
                            for (let i = 0; i < len; i++) {
                                let item = res.rows.item(i);
                                this.results.push({
                                    id: item.id,
                                    username: item.username,
                                    password: item.password,
                                });
                            }
                        }
                    },
                    error => {
                        console.log("error on getting categories")
                    }
                )
            })
        })
    }
    selectUser(username,password){
        return new Promise ((resolve,reject)=>{
            this.db.transaction( (txn)=>{
                txn.executeSql(
                    `SELECT * FROM users WHERE username=? and password=?`,
                    [username,password],
                    (sqlTxn,res)=>{
                        //console.log("selectUser",res)
                        let len = res.rows.length;
                        let userList = []
                        if(len > 0){
                            for (let i = 0; i < len; i++) {
                                let item = res.rows.item(i);
                                userList.push({
                                    id: item.id,
                                    username: item.username,
                                    password: item.password,
                                });
                            }
                            if(userList.length > 0){
                                resolve({msg:true,userList})
                            }else{
                                reject({msg:false,userList})
                            }
                           
                            this.close();
                        }
                      
                    }
                )
            })
        })
    }
    deleteUser(username){
        return new Promise((resolve,reject)=>{
            this.db.transaction((txn)=>{
                txn.executeSql(
                    `DELETE FROM users WHERE username=?`,
                    [username],
                    (sqlTxn,res)=>{
                        //console.log(res)
                        const {rowsAffected} = res
                        if(rowsAffected > 0){
                            resolve(this.msg = true)
                        }else{
                            reject(this.msg = false);
                        }
                        this.db.close()
                    }
                )
            })
        })
    }
    updateUser(newName,oldName){
        return new Promise((resolve,reject)=>{
            this.db.transaction((txn)=>{
                txn.executeSql(
                    `UPDATE users SET username = ? WHERE username = ?`,
                    [newName,oldName],
                    (sqlTxn,res)=>{
                        const {rowsAffected} = res;
                        if(rowsAffected > 0){
                            resolve(this.msg = true)
                        }else{
                            reject(this.msg = false)
                        }
                    }
                )
            })
        })
    }
    close() {
        this.db.close()
    }
}

function errorCB(err) {
    console.log("SQL Error: " + err);
}

function successCB() {
    console.log("SQL executed fine");
}

function openCB() {
    console.log("Database OPENED");
}

export default new MySqlite();