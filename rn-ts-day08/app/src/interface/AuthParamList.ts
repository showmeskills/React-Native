import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthParamList = {
    Home:any;
    Login:any;
}

export type AuthNavProps<T extends keyof AuthParamList> = {
    navigation?:NativeStackNavigationProp<AuthParamList,T>;
    route?:RouteProp<AuthParamList,T>;
}