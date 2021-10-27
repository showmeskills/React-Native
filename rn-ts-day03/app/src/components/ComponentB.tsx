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
const ComponentB = ({ navigation }:AuthNavProps<"ComponentB">) => {
    return (
      <CenterProvider>
        <View>
          <Text style={styles.txt}>Component B</Text>
          <Pressable
            onPress={() => common.onPressHandler(navigation, "ComponentA")}
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#ddd" : "pinck"
            })}
          >
            <Text>Go to screen A</Text>
          </Pressable>
        </View>
      </CenterProvider>
    )
}

export default ComponentB;