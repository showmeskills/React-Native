import React, { useEffect, useState } from "react";
import { Home } from "../components"
import { HomeProps } from "../components/Home/Home";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native";
import sqlite from "../model/mysqlite"
interface WithHomeProps {

}
export interface State {
    userName:string,
}

const withHome = (Component: React.FC<HomeProps>) => {
    return (props: WithHomeProps) => {
        const [state, setState] = useState<State>({
            userName:"",
        });
        useEffect(()=>{
            getData();
        },[])
        const getData = async () => {
            const username = await AsyncStorage.getItem("username") as string;
            setState({
                ...state,
                userName:username
            })
        }
        const handleRemove = async()=>{
            try{
                const result = await sqlite.deleteUser(state.userName);
                if(result){
                    Alert.alert("delete successfully")
                }else{
                    Alert.alert("delete failed")
                }
            }catch(err){
                Alert.alert("handle remove error")
            }
        }
        const handleChange = async()=>{
            try{
                const result = await sqlite.updateUser('te123',state.userName);
                if(result){
                    Alert.alert("change successfully")
                }else{
                    Alert.alert("change failed")
                }
            }catch(err){
                Alert.alert("handle change error")
            }
        }
        return (
            <Component 
                {...props} 
                state={state}
                handleRemove={handleRemove}
                handleChange={handleChange}
            />
        )
    }
}

export default withHome(Home);