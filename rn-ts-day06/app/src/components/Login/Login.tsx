import React from "react";
import ScrollViewContainer from "../../layout/ScrollViewContainer";
import { Image, View } from "react-native";
import Txt from "../CommonComponents/Text"
import Button from "../CommonComponents/Button"
import Input from "../CommonComponents/Input";
import Container from "../../layout/Container";
import { State } from "../../containers/withLogin"

export interface LoginProps {
    state: State;
    handleChangeText(value:any,isFlag:boolean): void;
    handleSubmit():void;
    handleRegister():void;
}
const Login: React.FC<LoginProps> = (
    {
        handleChangeText,
        handleSubmit,
        handleRegister
    }
) => {
    return (
        <ScrollViewContainer>
            <Container
                flex={1}
                alignItems="center"
                justifyContent="center"
                backgroundColor="#0177f1"
            >
                <View
                    style={{
                        width:130,
                        height:120,
                    }}
                >
                    <Image
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                        source={require("../../assets/images/logo.png")}
                    />
                </View>
                <Txt
                    title="SQLite"
                    fontSize={25}
                    fontWeight="bold"
                />      
                <Input
                    width={"80%"}
                    height={40}
                    borderColor="black"
                    borderWidth={1}
                    placeholder="Please enter your name"
                    fontWeight="bold"
                    fontSize={18}
                    marginTop={10}
                    borderRadius={10}
                    backgroundColor="white"
                    paddingLeft={15}
                    onChangeText={(value:any)=>handleChangeText(value,true)}
                />
                <Input
                    width={"80%"}
                    height={40}
                    borderColor="black"
                    borderWidth={1}
                    placeholder="Please enter your password"
                    fontWeight="bold"
                    fontSize={18}
                    marginTop={20}
                    marginBottom={20}
                    borderRadius={10}
                    backgroundColor="white"
                    paddingLeft={15}
                    secureTextEntry={true}
                    onChangeText={(value:any)=>handleChangeText(value,false)}
                />
                <Button
                    width={"80%"}
                    height={40}
                    borderRadius={10}
                    fontSize={18}
                    fontWeight="700"
                    title="Login"
                    backgroundColor="#23ab25"
                    textAlign="center"
                    color="white"
                    handleClick={handleSubmit}
                />
                  <Button
                    width={"80%"}
                    height={40}
                    borderRadius={10}
                    fontSize={18}
                    marginTop={10}
                    fontWeight="700"
                    title="Register"
                    backgroundColor="yellowgreen"
                    textAlign="center"
                    color="white"
                    handleClick={handleRegister}
                />
            </Container>
        </ScrollViewContainer>
    )
}

export default Login;