import React from "react";
import { NavigationContainer } from "@react-navigation/native";

interface ContainerProps {

}

const Container: React.FC<ContainerProps> = ({ children }) => {

    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    )
}
export default Container;