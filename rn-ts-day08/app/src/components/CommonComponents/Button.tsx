import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps{
    title ?: string;
    backgroundColor ?: string;
    color ?: string;
    width ?: number | string;
    height ?: number;
    borderRadius ?: number;
    fontSize ?: number;
    fontWeight ?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
    textAlign?:"auto" | "left" | "right" | "center" | "justify" | undefined;
    marginTop?:number;
    handleClick ? (): void;
}


const Button: React.FC<ButtonProps> = ({ 
    title,
    backgroundColor,
    color,
    width,
    height,
    borderRadius,
    fontSize,
    fontWeight,
    textAlign,
    marginTop,
    handleClick
}) => {
    return (
        <Pressable
            style={({pressed})=>({
                backgroundColor,
                width,
                height,
                borderRadius,
                marginTop
            })}
            onPress={handleClick}
        >
            <Text
                style={{
                    color,
                    fontSize,
                    fontWeight,
                    lineHeight:height,
                    textAlign
                }}
            >
                {title?title : "Default"}
            </Text>
        </Pressable>
    )
}

export default Button;