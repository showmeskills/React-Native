import React, { PropsWithChildren } from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


interface PropsSafeContainer {

}


const {width,height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
      width,
      height,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
  })
const SafeContainer = (props: PropsWithChildren<PropsSafeContainer>) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {props.children}
            </ScrollView>
        </SafeAreaView>
    )
}

export default SafeContainer;