import React, { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text } from "react-native";


interface CutomeButtonProps{
    title?:string;
    backgroundColor?:string;
    color?:string;
    width?:number;
    height?:number;
    borderRadius?:number;
    fontSize?:number;
    fontWeight?:"bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
    handleClick?():void;
}

const styles = StyleSheet.create({
    pressableStyle:{
        textAlign:"center",
    }
})

const CutomeButton = (props:PropsWithChildren<CutomeButtonProps>)=>{
    const {title,backgroundColor,color,handleClick,width,height,borderRadius,fontSize,fontWeight} = props;
    return(
        <Pressable
            style={({pressed})=>({
                backgroundColor,
                width,
                height,
                borderRadius,
                marginTop:20,
            })}
            onPress={handleClick}
        >
            <Text style={[styles.pressableStyle,{color,fontSize,fontWeight,lineHeight:height,}]}>{title?title : "default title"}</Text>
        </Pressable>
    )
}

export default CutomeButton;