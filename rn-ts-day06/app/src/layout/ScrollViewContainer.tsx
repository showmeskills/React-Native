import React from "react";
import { useWindowDimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const {width,height} = useWindowDimensions()

interface ScrollViewContainerProps{}

const ScrollViewContainer:React.FC<ScrollViewContainerProps>=(
    {
        children,
    }
    )=>{
    return(
        <ScrollView
            style={{
                width,
                height,
            }}
        >
            {children}
        </ScrollView>
    )
}

export default ScrollViewContainer;