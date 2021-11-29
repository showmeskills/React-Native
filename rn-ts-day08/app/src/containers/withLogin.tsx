import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Login } from "../components"
import { LoginProps } from "../components/Login/Login";
import { AuthNavProps } from "../interface/AuthParamList";



interface WithLoginProps extends AuthNavProps<"Login"> {

}
export interface State {
    username: string;
    password: string;
    isLogin: boolean;
}


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
          
        }, [])

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