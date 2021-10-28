import {Icommon} from "../interface/common"
class Common implements Icommon{
  onPressHandler(navigation: any, component: string){
    //navigate() to designed component
    navigation.navigate(component)
    //go previous screen with history
    //navigation.replace(component)
  }
}

const common = new Common();

export default common;


