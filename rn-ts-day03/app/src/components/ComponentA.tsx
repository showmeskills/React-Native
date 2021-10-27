import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { AuthNavProps } from "../interface/AuthParamList";
import CenterProvider from "../layout/CenterContainer";
import common from "../utils/impl/commonImpl"
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    txt: {
      fontSize: 20,
      fontWeight: "700"
    }
})


const ComponentA = ({ navigation }: AuthNavProps<"ComponentA">) => {
    return (
        <CenterProvider>
            <View>
                <Text style={styles.txt}>Component A</Text>
                <Pressable
                    onPress={() => common.onPressHandler(navigation, "ComponentB")}
                    style={({ pressed }) => ({
                        backgroundColor: pressed ? "#ddd" : "pink"
                    })}
                >
                    <Text>Go to screen B</Text>
                </Pressable>
            </View>
        </CenterProvider>
    )
}

export default ComponentA;