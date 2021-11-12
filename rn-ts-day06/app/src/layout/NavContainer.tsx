import React from "react";
import { NavigationContainer } from "@react-navigation/native";


interface NavContainer{}



const NavContainer:React.FC<NavContainer> = ({children})=>{

    return(
        <NavigationContainer>
            {children}
        </NavigationContainer>
    )
}

export default NavContainer;