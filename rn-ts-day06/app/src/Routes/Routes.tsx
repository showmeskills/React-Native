import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Login } from "../containers";
import { AuthParamList } from "../interface/AuthParamList";
import NavContainer from "../layout/NavContainer";


const Stack = createNativeStackNavigator<AuthParamList>();

interface RoutesProps{

}

const Routes:React.FC<RoutesProps> = ()=>{

    return(
        <NavContainer>
            <Stack.Navigator
                initialRouteName="Login"
            >
                <Stack.Screen 
                    name="Login" component={Login}
                    options={{
                        headerShown:false,
                    }}
                />
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavContainer>
    )
}

export default Routes;

