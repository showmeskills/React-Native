import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthParamList } from "../interface/AuthParamList";
import ComponentA from "../components/ComponentA";
import ComponentB from "../components/ComponentB";


const Stack = createNativeStackNavigator<AuthParamList>();

const StackNav = () => {
    return (
        <Stack.Navigator
          initialRouteName="ComponentA"
          screenOptions={{
            // header:()=>null,
          }}
        >
          <Stack.Screen name="ComponentA" component={ComponentA} 
            options={{
              // header:()=>null,            
            }}
          
          />
          <Stack.Screen name="ComponentB" component={ComponentB} />
        </Stack.Navigator>
    )
}

export default StackNav;
  