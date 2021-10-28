
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./src/Route/DrawerNav"


class App extends React.PureComponent{

  render(){
    return(
      <NavigationContainer>
          <DrawerNav/>
      </NavigationContainer>
    )
  }
}


const WidthApp = (Component:any)=>{

  return class extends React.Component{
    render(){
      return(
        <Component {...this.props}/>
      )
    }
  }
}

export default WidthApp(App);