import React from "react";
import { Text, View } from "react-native";
import { State } from "../../containers/withHome";
import ScrollViewContainer from "../../layout/ScrollViewContainer";
import Button from "../CommonComponents/Button"
export interface HomeProps{
    state:State
    handleRemove():void
    handleChange():void
}

const Home:React.FC<HomeProps> = (
    {
        state,
        handleRemove,
        handleChange
    }
)=>{
    return(
        <ScrollViewContainer>
            <View>
                <Text>Username:{state.userName}</Text>
            </View>
            <Button
                    width={"80%"}
                    height={40}
                    borderRadius={10}
                    fontSize={18}
                    fontWeight="700"
                    title="Remove"
                    backgroundColor="#23ab25"
                    textAlign="center"
                    color="white"
                    handleClick={handleRemove}
                />
                  <Button
                    width={"80%"}
                    height={40}
                    borderRadius={10}
                    fontSize={18}
                    marginTop={10}
                    fontWeight="700"
                    title="Change"
                    backgroundColor="yellowgreen"
                    textAlign="center"
                    color="white"
                    handleClick={handleChange}
                />
        </ScrollViewContainer>
    )
}

export default Home