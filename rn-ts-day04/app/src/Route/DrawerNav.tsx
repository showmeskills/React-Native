import React, { PropsWithChildren } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ComponentA from "../components/ComponentA";
import ComponentB from "../components/ComponentB";
const Drawer = createDrawerNavigator();

interface DrawerNavProps {
 
}

const DrawerNav = (props: PropsWithChildren<DrawerNavProps>) => {

    return (
        <Drawer.Navigator
            initialRouteName="ComponentA"            
            //defaultStatus="open"
            screenOptions={({route})=>({
                headerShown:true,
                swipeEnabled:false,//滑动左边自动出现bar
                gestureEnabled:true,
                headerTitleAlign:"left",//header title 的 位置左中右
                headerStyle:{
                    backgroundColor:"#0080ff"
                },
                headerTintColor:"white",
                drawerStyle: {
                  //backgroundColor: '#c6cbef',
                  width: 240,
                },
                overlayColor: 'transparent',
                drawerPosition:"left",
                drawerStatusBarAnimation:"fade",
                //drawerHideStatusBarOnOpen:false,
                drawerIcon:(({color,focused,size})=>{
                    //here is like tab nav 
                    // can get route.name from screenOptions callback
                    return null
                })
            })}
            detachInactiveScreens={false}
            // drawerContent={({state,navigation,descriptors})=>{
            //     //console.log(descriptors) descriptors[route.key].options.
            //     return null;
            // }}
        >
            <Drawer.Screen name="ComponentA" component={ComponentA} 
                options={{
                    title:"Screen_A Title"
                }}
                initialParams={{ItemName:"initialParams_ComponentA",ItemId:"initialParams_A"}}            
            />
            <Drawer.Screen name="ComponentB" component={ComponentB}
                  options={{
                    title:"Screen_B Title"
                }}  
                initialParams={{ItemName:"initialParams_ComponentB",ItemId:"initialParams_B"}}            
            />
        </Drawer.Navigator>
    )
}

interface WithDrawerNavProps {
   
}

const withDrawerNav = (Component: (props: PropsWithChildren<DrawerNavProps>) => JSX.Element) => {
    return (props: WithDrawerNavProps) => {
    
        return (
            <Component {...props} />
        )
    }
}

export default withDrawerNav(DrawerNav);