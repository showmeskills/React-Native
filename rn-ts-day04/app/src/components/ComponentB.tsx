import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { AuthDrawerProps } from "../interface/AuthParamList";
import SafeContainer from "../layout/SafeContainer";
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
const ComponentB = ({ navigation,route }:AuthDrawerProps<"ComponentB">) => {
   
    return (
      <SafeContainer>
        <View>
          <Text style={styles.txt}>Component B</Text>
          <Pressable
            onPress={() =>{
              navigation.navigate(
                "ComponentA",
                {
                  ItemName:"Item from ComponentB",
                  ItemId:"B",
                }
              )
              //navigation.toggleDrawer()
            }}
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#ddd" : "pinck"
            })}
          >
            <Text>Go to screen A</Text>
          </Pressable>
            <Text>ItemName:{route.params.ItemName&&route.params.ItemName}</Text>
            <Text>ItemId:{route.params.ItemId&&route.params.ItemId}</Text>
        </View>
      </SafeContainer>
    )
}

export default ComponentB;