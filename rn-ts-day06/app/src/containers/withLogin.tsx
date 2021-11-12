import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Login } from "../components"
import { LoginProps } from "../components/Login/Login";
import { AuthNavProps } from "../interface/AuthParamList";
import SQLite from "react-native-sqlite-storage";
import DbConnection from "../model/Db"

interface WithLoginProps extends AuthNavProps<"Login"> {

}
export interface State {
    username: string;
    password: string;
    isLogin: boolean;
}
// SQLite.enablePromise(true);
// const db = SQLite.openDatabase(
//     {
//         name: "MainDB",
//         location: "default"
//     },
//     () => console.log("success"),
//     error => console.log("db connection error")
// )

const db = new DbConnection();
const withLogin = (Component: React.FC<LoginProps>): React.FC<WithLoginProps> => {
    return ({
        navigation
    }, props) => {
        const [state, setState] = useState<State>({
            username: "",
            password: "",
            isLogin: false,
        });
        useEffect(() => {
            db.createTable;
            return()=>{
                db.close();
            }
        }, [])
        // const createTable = () => {
        //     db.transaction((tx) => {
        //         tx.executeSql(
        //             "CREATE TABLE IF NOT EXISTS"
        //             + "Users"
        //             + "(ID INTEGER PRIMARY KEY AUTOINCREMENT,Username TEXT, Password INTEGER);"
        //         )
        //     })
        // }
        const handleChangeText = (value: any, isFlag: boolean) => {
            isFlag
                ?
                setState({
                    ...state,
                    username: value,
                })
                :
                setState({
                    ...state,
                    password: value,
                })
        }
        const handleSubmit = async () => {
            if (state.username.length > 0 && state.password.length > 0) {
                if (state.username.trim() && state.password.trim()) {
                    navigation?.navigate("Home")      
                }
            } else {
                Alert.alert("Warning!!", "Please enter your username and password");
            }
        }
        const handleRegister = () => {
            try {
                if (state.username.length > 0 && state.password.length > 0) {
                    if (state.username.trim() && state.password.trim()) {
                        // await db.transaction(async (tx) => {
                        //     //await db.executeSql(`INSERT INTO Users (Username,Password) VALUES ("${state.username}","${state.password}")`)
                        //     await db.executeSql(`INSERT INTO Users (Username,Password) VALUES (?,?)`, [state.username, state.password])
                        //     Alert.alert("Success", "Register is successfully")
                        // })
                        db.insert(state.username,state.password)
                    }
                } else {
                    Alert.alert("Warning!", "Register input can not empty")
                }
            } catch (err) {
                Alert.alert("Waring!", "Register problem")
            }
        }
        return (
            <Component
                {...props}
                state={state}
                handleChangeText={handleChangeText}
                handleSubmit={handleSubmit}
                handleRegister={handleRegister}
            />
        )
    }
}

export default withLogin(Login)