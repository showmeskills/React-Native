import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login,{LoginProps} from "../components/Login";
import { AuthNavProps } from "../interface/AuthParamList";



interface WithLoginProps extends AuthNavProps<"Login">{

}
export interface State{
    name:string
}

const WithLogin = (Component:React.FC<LoginProps>)=>{
    return(props:WithLoginProps)=>{
        const {navigation} = props
        const [state,setState] = useState<State>({
            name:""
        });
        const onPressFunction = async ()=>{
            if(state.name.length === 0){
                Alert.alert("Warning!","Please write your data")
            }else{
                try{
                    await AsyncStorage.setItem("UserName",state.name)
                    navigation?.navigate("Home")
                }catch(e){
                    console.log("AsyncStorage function has an error")
                }
            }
        }
        return(
            <Component 
                {...props} 
                state={state} 
                setState={setState}
                onPressFunction={onPressFunction}
            />
        )
    }
}

export default WithLogin(Login);
