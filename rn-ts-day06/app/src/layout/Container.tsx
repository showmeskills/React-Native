import React from "react";
import { FlexAlignType, useWindowDimensions, View } from "react-native";

const {width,height} = useWindowDimensions()
interface CenterContainerProps{
    flex?:number,
    justifyContent?:"center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined,
    alignItems?:FlexAlignType,
    marginTop?:number,
    marginBottom?:number,
    marginLeft?:number,
    marginRight?:number,
    backgroundColor?:string;
}

const Container:React.FC<CenterContainerProps> = (
    {
        children,
        flex,
        justifyContent,
        alignItems,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        backgroundColor
    }
)=>{

    return(
        <View
            style={{
                width,
                height,
                flex,
                justifyContent,
                alignItems,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                backgroundColor
            }}
        >
            {children}
        </View>
    )
}

export default Container;