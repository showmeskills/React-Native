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
        fontWeight: "700",
        fontFamily:"Roboto-LightItalic"
    }
})


const ComponentA = ({ navigation, route }: AuthDrawerProps<"ComponentA">) => {

    return (
        <SafeContainer>
            <View>
                <Text style={styles.txt}>Component A</Text>
                <Pressable
                    onPress={() => {
                        navigation.navigate(
                            "ComponentB",
                            {
                                ItemName: "Item from ComponentA",
                                ItemId: "A",
                            }
                        )
                        //navigation.openDrawer();
                    }}
                    style={({ pressed }) => ({
                        backgroundColor: pressed ? "#ddd" : "pink"
                    })}
                >
                    <Text>Go to screen B</Text>
                </Pressable>
                <Text>ItemName:{route.params.ItemName && route.params.ItemName}</Text>
                <Text>ItemId:{route.params.ItemId && route.params.ItemId}</Text>
            </View>
        </SafeContainer>
    )
}

export default ComponentA;