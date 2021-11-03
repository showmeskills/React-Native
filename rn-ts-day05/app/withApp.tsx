import React from "react";
export interface InjectedAppProps{

}

interface WithAppState{

}

export const widthApp = <P extends InjectedAppProps>(
  Component:React.ComponentType<P>
)=>{
  return class extends React.PureComponent<Extract<P,InjectedAppProps>,WithAppState>{
    state:WithAppState={

    }
    render(){
      return(
        <Component {...this.props as P}/>
      )
    }
  }
}