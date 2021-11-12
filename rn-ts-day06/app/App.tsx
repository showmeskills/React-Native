import React from "react";
import Routes from "./src/Routes/Routes"
interface AppProps extends InjectedAppProps{

}

class App extends React.PureComponent<AppProps> {


  render(){
    return(
      <Routes/>
    )
  }
}

interface InjectedAppProps{

}

interface WithAppState{

}

const withApp = <P extends InjectedAppProps>(
  Component:React.ComponentType<P>
)=>{
  return class extends React.PureComponent<Extract<P,InjectedAppProps>,WithAppState>{

    render(){
      return(
        <Component {...this.props as P}/>
      )
    }
  }
}

export default withApp(App);