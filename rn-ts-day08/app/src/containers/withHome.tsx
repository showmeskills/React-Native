import React, { useEffect, useState } from "react";
import { Home } from "../components"
import { HomeProps } from "../components/Home/Home";
import { Alert } from "react-native";
interface WithHomeProps {

}
export interface State {
    userName:string,
    passWord:string,
}

const withHome = (Component: React.FC<HomeProps>) => {
    return (props: WithHomeProps) => {
        const [state, setState] = useState<State>({
            userName:"",
            passWord:"",
        });
        useEffect(() => {
            getData();
            return () => {
                //db.close();
            }
        }, [])
        const getData = async () => {

        }
        return (
            <Component 
                {...props} 
                state={state}
            />
        )
    }
}

export default withHome(Home);