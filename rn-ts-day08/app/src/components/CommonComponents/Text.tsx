import React from "react";
import { Text } from "react-native";



interface TextProps{
    title ?: string;
    backgroundColor ?: string;
    color ?: string;
    width ?: number | string;
    height ?: number;
    borderRadius ?: number;
    fontSize ?: number;
    fontWeight ?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
    textAlign?:"auto" | "left" | "right" | "center" | "justify" | undefined;
}

const Txt:React.FC<TextProps> = (
    {   
        title,
        backgroundColor,
        color,
        width,
        height,
        borderRadius,
        fontSize,
        fontWeight,
        textAlign,
    }
)=>{
    return(
        <Text
            style={{
                backgroundColor,
                color,
                width,
                height,
                borderRadius,
                fontSize,
                fontWeight,
                textAlign,
            }}
        >
            {title}
        </Text>
    )
}

export default Txt;