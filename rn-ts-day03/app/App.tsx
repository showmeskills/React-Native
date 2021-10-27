import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./src/routes/StackNav"
import TabNav from "./src/routes/TabNav"
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";





class App extends React.PureComponent {
  state = {
    isShow: true,
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <Pressable
            onPress={() => this.setState({
              ...this.state,
              isShow: !this.state.isShow
            })}
            style={
              ({pressed})=>(
                {
                  backgroundColor:pressed? "red" : "blue",
                })
            }
          >
            <Text style={{
               fontSize:25,
               fontWeight:"900",
               color:"white"
            }}>Change nav style</Text>
          </Pressable>
        </SafeAreaView>
        <View style={{height:5,width:"100%",backgroundColor:"black"}}></View>
        <NavigationContainer>
          {
            this.state.isShow
              ?
              <StackNav />
              :
              <TabNav />
          }
        </NavigationContainer>
      </>

    )
  }
}

export default App;