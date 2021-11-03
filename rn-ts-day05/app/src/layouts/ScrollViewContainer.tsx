import React from "react";
import { ScrollView } from "react-native-gesture-handler";

interface ScrollViewContainerProps {

}


const ScrollViewContainer: React.FC<ScrollViewContainerProps> = ({ children }) => {

    return (
        <ScrollView>
            {children}
        </ScrollView>
    )
}
export default ScrollViewContainer;