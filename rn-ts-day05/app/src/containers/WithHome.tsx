import React, { useEffect, useState } from "react";
import Home,{HomeProps} from "../components/Home"
import { AuthNavProps } from "../interface/AuthParamList";
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { Alert, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
interface WithHomeProps extends AuthNavProps<"Home">{

}

interface State{
    name:string;
}

const withHome = (Component:React.FC<HomeProps>)=>{
    return(props:WithHomeProps)=>{
        const {navigation} = props;
        const [state,setState] = useState<State>({
            name:""
        });
        useEffect(()=>{
            readAsyncStorage();
        },[])
        const readAsyncStorage = async ()=>{
            try{
                const userName = await AsyncStorage.getItem("UserName")
                userName ? setState({
                    ...state,
                    name:userName,
                })
                :
                props.navigation?.navigate("Login",{
                    info:"Please enter your info"
                })
            }catch(e){
                console.log("readAsyncStorage has an error")
            }
        }
        const onUpdateUserName =(value:string)=>{
            setState({
                ...state,
                name:value,
            })
        }
        const handleUpdateName = async() =>{
            if(state.name.length === 0){
                Alert.alert("Warning!","Please write your data")
            }else{
                try{
                    await AsyncStorage.setItem("UserName",state.name)
                    Alert.alert("Congradualtions!",`You reset value has done:${state.name}`)
                }catch(e){
                    console.log("AsyncStorage function has an error")
                }
            }
        }
        const removeName = async ()=>{
            try{
                await AsyncStorage.removeItem("UserName")
                Alert.alert("Congradualtions!",`You have removed data`)
                navigation?.navigate("Login")
            }catch(e){
                console.log("removeName AsyncStorage function has an error")
                
            }
        }
        return(
            <Component 
                {...props}
                state={state}
                onUpdateUserName={onUpdateUserName}
                handleUpdateName={handleUpdateName}
                removeName={removeName}
            />
        )
    }
}

export default withHome(Home);