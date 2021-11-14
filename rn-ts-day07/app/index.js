/**
 * @format
 */
import React from "react";
import SQLite from "react-native-sqlite-storage";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


function errorCB(err) {
    console.log("SQL Error: " + err);
}
  
function  successCB() {
    console.log("SQL executed fine");
  }
  
function  openCB() {
    console.log("Database OPENED");
  }
  
  var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000, openCB, errorCB);
  function createTable() {
    db.transaction((txn) => {
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
 
  function addCategory() {
   db.transaction(async (txn) => {
      txn.executeSql(
        `INSERT INTO categories (name) VALUES (?)`,
        ["Terry"],
        async (sqlTxn, res) => {
          console.log(`Terry category added successfully`);
        },
        error => {
          console.log("error on adding category")
        }
      )
    })
  }
  //createTable()
  setTimeout(()=>addCategory(),100)
  function select(){
    db.transaction((tx) => {
        db.transaction((txn) => {
            txn.executeSql(
              `SELECT * FROM categories ORDER BY id DESC`,
              [],
              (sqlTxn, res) => {
                console.log("categories retrieved successfully");
                let len = res.rows.length;
                console.log(len)
                if (len > 0) {
                  for (let i = 0; i < len; i++) {
                    let item = res.rows.item(i);
                    results.push({
                      id: item.id,
                      name: item.name
                    });
                  }
                }
              },
              error => {
                console.log("error on getting categories")
              }
            )
          })
      });
  }
 select();
AppRegistry.registerComponent(appName, () => App);

