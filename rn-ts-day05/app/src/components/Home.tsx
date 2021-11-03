import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ScrollViewContainer from "../layouts/ScrollViewContainer";
import CutomeButton from "../utils/CustomeButton";

export interface HomeProps {
    state?: {
        name: string;
    }
    onUpdateUserName?(value: string): void
    handleUpdateName?(): void;
    removeName?():void
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    txt: {
        color: "black",
        fontSize: 30,
        fontWeight: "700",
    },
    iptTxt: {
        width: 300,
        borderWidth: 1,
        borderColor: "#555",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        textAlign: "center",
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    }
})

const Home: React.FC<HomeProps> = ({ state, onUpdateUserName, handleUpdateName ,removeName }) => {
    return (
        <ScrollViewContainer>
            <View style={styles.container}>
                <Text style={styles.txt}>Welcome! {state?.name ? state?.name : "there are no name"}</Text>
                <TextInput
                    style={styles.iptTxt}
                    onChangeText={onUpdateUserName}
                    value={state!.name ? state!.name : "no name"}
                />
                <CutomeButton
                    color="white"
                    backgroundColor="yellowgreen"
                    width={150}
                    height={50}
                    borderRadius={10}
                    fontSize={20}
                    fontWeight="bold"
                    handleClick={handleUpdateName}
                    title="update"
                />
                  <CutomeButton
                    color="white"
                    backgroundColor="yellowgreen"
                    width={150}
                    height={50}
                    borderRadius={10}
                    fontSize={20}
                    fontWeight="bold"
                    handleClick={removeName}
                    title="Remove Date"
                />
            </View>
        </ScrollViewContainer>
    )
}

export default Home;