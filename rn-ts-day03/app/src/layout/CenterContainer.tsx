import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, Dimensions } from "react-native";

const {width,height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
      width,
      height,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    txt: {
      fontSize: 20,
      fontWeight: "700"
    }
  })
const CenterProvider = ({ children }: any) => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {children}
        </ScrollView>
      </SafeAreaView>
    )
}

export default CenterProvider;