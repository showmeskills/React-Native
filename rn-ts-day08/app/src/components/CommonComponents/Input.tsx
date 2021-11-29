import React from "react";
import { TextInput } from "react-native-gesture-handler";


interface InputProps {
    placeholder?: string;
    keyboardType?: any;
    autoFocus?: boolean;
    maxLength?: number;
    secureTextEntry?: boolean;
    backgroundColor?: string;
    color?: string;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    fontSize?: number;
    fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
    textAlign?: "left" | "right" | "auto" | "center" | "justify" | undefined;
    borderWidth?:number,
    borderColor?: string,
    marginTop?:number,
    marginBottom?:number,
    paddingLeft?:number,
    onChangeText?(value: any): void;
}

const Input: React.FC<InputProps> = (
    {
        placeholder,
        keyboardType,
        autoFocus,
        maxLength,
        secureTextEntry,
        backgroundColor,
        color,
        width,
        height,
        borderRadius,
        fontSize,
        fontWeight,
        textAlign,
        borderWidth,
        borderColor,
        marginTop,
        marginBottom,
        paddingLeft,
        onChangeText
    }
) => {
    return (
        <TextInput
            style={{
                backgroundColor,
                color,
                width,
                height,
                borderRadius,
                fontSize,
                fontWeight,
                textAlign,
                borderWidth,
                borderColor,
                marginTop,
                marginBottom,
                paddingLeft,
            }}
            placeholder={placeholder? placeholder : "default value"}
            onChangeText={onChangeText}
            keyboardType={keyboardType ? keyboardType : "default"}
            autoFocus={autoFocus}
            maxLength={maxLength}
            secureTextEntry={secureTextEntry}
        />
    )
}

export default Input;