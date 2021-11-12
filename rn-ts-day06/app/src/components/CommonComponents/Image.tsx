import React from "react";
import { Image } from "react-native";


interface ImgProps{
    path:string;
    width?:string | number;
    height?:string | number;
}

const Img:React.FC<ImgProps> = (
    {
        path,
        width,
        height
    }
)=>{
    width ? width : "100%";
    height ? height : "100%"
    return(
        <Image
            style={{
                width,
                height
            }}
            source={{uri:path}}
        />
    )
}

export default Img;
