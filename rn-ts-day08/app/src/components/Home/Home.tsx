import React from "react";
import { Text, View } from "react-native";
import { State } from "../../containers/withHome";
import ScrollViewContainer from "../../layout/ScrollViewContainer";

export interface HomeProps{
    state:State
}

const Home:React.FC<HomeProps> = (
    {
        state
    }
)=>{
    return(
        <ScrollViewContainer>
            <View>
                <Text>Username:{state.userName}</Text>
                <Text>Password:{state.passWord}</Text>
            </View>
        </ScrollViewContainer>
    )
}

export default Home