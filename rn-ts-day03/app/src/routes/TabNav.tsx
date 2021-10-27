import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Enptypo from 'react-native-vector-icons/Entypo';
import { AppParamList } from "../interface/AppParamList";
import ComponentA from '../components/ComponentA';
import ComponentB from "../components/ComponentB";


const Tab = createMaterialTopTabNavigator();

//const Tab = createBottomTabNavigator<AppParamList>();

//const Tab = createMaterialBottomTabNavigator<AppParamList>();

const TabNav = ()=>{

    return(
        <Tab.Navigator
            screenOptions={({route})=>({// four values from route name,keys,path,params
                header:()=>null,
                tabBarStyle:{},
                //focused:when the icon is selected
                //color: tabBarActiveTintColor and tabBarInactiveTintColor two variables from
                //size: icons size
                tabBarIcon:(({focused,color})=>{
                    let size = focused ? 16 : 24;
                    switch(route.name){
                        case "ComponentA":
                            return <Enptypo name="battery" size={size} color={color} />;;
                        case "ComponentB":
                            return <Enptypo name="battery" size={size} color={color} />
                    }
                }),
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                
            })}
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{backgroundColor:"#694fad"}}
            top
        >
            <Tab.Screen name="ComponentA" component={ComponentA}/>
            <Tab.Screen name="ComponentB" component={ComponentB}/>
        </Tab.Navigator>
    )
}

export default TabNav;

