import React, { useEffect, useState } from "react";
import { Home } from "../components"
import { HomeProps } from "../components/Home/Home";
import SQLite from "react-native-sqlite-storage";
import { Alert } from "react-native";
interface WithHomeProps {

}
export interface State {
    userName:string,
    passWord:string,
}
// SQLite.enablePromise(true);
// const db = SQLite.openDatabase(
//     {
//         name: "MainDB",
//         location: "default"
//     },
//     () => Alert.alert("success"),
//     error => console.log("db connection error")
// )
const withHome = (Component: React.FC<HomeProps>) => {
    return (props: WithHomeProps) => {
        const [state, setState] = useState<State>({
            userName:"",
            passWord:"",
        });
        useEffect(() => {
            getData();
            return () => {
                //db.close();
            }
        }, [])
        const getData = async () => {
            // try {
            //     db.transaction((tx) => {
            //         tx.executeSql(`
            //             SELECT * from Users;
            //         `,
            //             [],
            //             (tx, results) => {
            //                 console.log(results)
            //                 Alert.alert("length",results.rows.length+"")
            //                 let lenth = results.rows.length;
            //                 if(lenth > 0){
            //                     let userName = results.rows.item(0).Username;
            //                     let passWord = results.rows.item(0).Password;
            //                     setState({
            //                         ...state,
            //                         userName,
            //                         passWord,
            //                     })
            //                 }
            //             }
            //         )
            //     })
            // } catch (err) {
            //     Alert.alert("Warining!!", "Home page getting data error")
            // }
        }
        return (
            <Component 
                {...props} 
                state={state}
            />
        )
    }
}

export default withHome(Home);