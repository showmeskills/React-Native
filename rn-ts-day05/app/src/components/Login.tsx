import React, { Dispatch, SetStateAction } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { State } from "../containers/WithLogin";
import ScrollViewContainer from "../layouts/ScrollViewContainer"
import CutomeButton from "../utils/CustomeButton";
export interface LoginProps{
    state?:{
        name:string;
    } 
    setState?:Dispatch<SetStateAction<State>>;
    onPressFunction?():void;
}
const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#00080ff",
    },
    logo:{
        width:100,
        height:100,
        margin:20,
    },
    txt:{
        fontSize:30,
        color:"#ffffff",
    },
    iptTxt:{
        width:300,
        borderWidth:1,
        borderColor:"#555",
        borderRadius:10,
        backgroundColor:"#ffffff",
        textAlign:"center",
        fontSize:20,
        marginTop:130,
        marginBottom:10,
    }
})

const Login:React.FC<LoginProps> = ({state,setState,onPressFunction})=>{

    return(
        <ScrollViewContainer>
            <View style={styles.body}>
                <Image style={styles.logo} source={require("../assets/images/1.jpg")}/>
                <Text style={styles.txt}>
                    Async Storage
                </Text>
                <TextInput
                    style={styles.iptTxt}
                    placeholder="Enter your name"
                    onChangeText={(value)=>setState!({
                        ...state,
                        name:value,
                    })}
                />
                <CutomeButton
                    color="white"
                    backgroundColor="yellowgreen"
                    width={150}
                    height={50}
                    borderRadius={10}
                    fontSize={20}
                    fontWeight="bold"
                    handleClick={onPressFunction}
                    title="login"
                />
            </View>
        </ScrollViewContainer>
    )
}

export default Login;