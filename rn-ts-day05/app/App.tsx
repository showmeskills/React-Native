import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/containers/WithLogin";
import Home from "./src/containers/WithHome";
import { AuthParamList } from "./src/interface/AuthParamList";
import Container from "./src/layouts/Container"
import {InjectedAppProps, widthApp} from "./withApp";

interface AppProps extends InjectedAppProps{

}

const Stack = createNativeStackNavigator<AuthParamList>();

class App extends React.PureComponent<AppProps>{

  render(){
    return(
      <Container>
          <Stack.Navigator
            
          >
            <Stack.Screen name="Login" component={Login}
              options={{
                headerShown:false,
              }}
            />
            <Stack.Screen name="Home" component={Home}/>
          </Stack.Navigator>
      </Container>
    )
  }
}



export default widthApp(App);

