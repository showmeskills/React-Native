import {RouteProp} from "@react-navigation/core";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthParamList = {
    ComponentA:any;
    ComponentB:any;
}

export interface RouteProps{
    ItemName:string;
    ItemId:string;
}

export type AuthNavProps<T extends keyof AuthParamList> = {
    navigation:NativeStackNavigationProp<AuthParamList,T>
    route:RouteProp<AuthParamList,T>
}

export type AuthDrawerProps<T extends keyof AuthParamList> = {
    navigation:DrawerNavigationProp<AuthParamList,T>
    route:any
}