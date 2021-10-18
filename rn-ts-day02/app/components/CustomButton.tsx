import React, { PropsWithChildren } from "react";

import { Pressable, StyleSheet, Text } from "react-native"


interface MashButtonProps {
    onPressHandler(): void;
    title: string;
    bgColor:string;
    marginTop?:number
}

const styles = StyleSheet.create({
    btn: {
        width: "80%",
        fontSize: 20,
        alignItems: "center",
        padding: 10
    },
    txt: {
        fontSize: 20,
        fontWeight: "700"
    },
})

const MashButton = (props: PropsWithChildren<MashButtonProps>) => {
    const { onPressHandler, title,bgColor } = props;
    return (
        <Pressable
            style={[styles.btn,{backgroundColor:bgColor,marginTop:props.marginTop}]}
            onPress={onPressHandler}
        >
            <Text style={styles.txt}>
                {title}
            </Text>
        </Pressable>
    )
}

export default MashButton