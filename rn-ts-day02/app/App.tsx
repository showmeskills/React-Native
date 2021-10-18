import React from "react";
import { Alert, Button, Dimensions, Image, ImageBackground, Modal, Pressable, SafeAreaView, ScrollView, ScrollViewBase, StyleSheet, Text, TextInput, ToastAndroid, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import MashButton from "./components/CustomButton";




// const styles = () => StyleSheet.create({
//   container: {
//     width,
//     height,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   iptTxt: {
//     borderColor: "#eee",
//     borderWidth: 3,
//     width: "80%",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   btn: {
//     //backgroundColor: "blue",
//     width: "80%",
//     fontSize: 20,
//     alignItems: "center",
//     padding: 10
//   },
//   txt: {
//     fontSize: 20,
//     color: "white",
//     fontWeight: "700"
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor:'rgba(0,0,0,.2)',
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// })


interface State {
  name: string,
  submitted: boolean,
  modalVisible: boolean
}

// class App extends React.PureComponent {
//   state: State = {
//     name: "",
//     submitted: false,
//     modalVisible: false,
//   }
//   handleInput = (name: string) => {
//     this.setState({
//       ...this.state,
//       name,
//     })
//   }
//   onPressHandler = () => {
//     if (this.state.name.length > 3) {
//       this.setState({
//         ...this.state,
//         submitted: !this.state.submitted,
//         modalVisible: !this.state.modalVisible
//       })
//     } else {
//       // Alert.alert(
//       //   "warning",//alert title
//       //   "the name must be longer than 3 characters", //alert content
//       //   [
//       //     //可以设置多个button functions
//       //     {
//       //       text:"ok",//close button title
//       //       onPress:()=>console.warn("Ok Pressed!"), //print warning on the bottom
//       //       style:"destructive"
//       //     },
//       //     {
//       //       text:"Cancel",//close button title
//       //       onPress:()=>console.warn("Cancel Pressed!"), //print warning on the bottom
//       //       style:"destructive"
//       //     },
//       //     {
//       //       text:"Do not show again",//close button title
//       //       onPress:()=>console.warn("Do not show again Pressed!"), //print warning on the bottom
//       //       style:"destructive"
//       //     }
//       //   ],
//       //   {
//       //     cancelable:true,
//       //     onDismiss:()=>console.warn("Alert dismissed")
//       //   }
//       //   )

//       // ToastAndroid.show(
//       //   "the name must be longer than 3 characters",//message 
//       //   ToastAndroid.SHORT,//duration about 2 seconds or you can set value by yourself
//       // )
//       // ToastAndroid.showWithGravityAndOffset(
//       //   "the name must be longer than 3 characters",//message
//       //   ToastAndroid.LONG,//duration
//       //   ToastAndroid.TOP,//gravity
//       //   100,//xOffset
//       //   200//yOffset
//       // )
//       // ToastAndroid.showWithGravity(
//       //   "the name must be longer than 3 characters",//message
//       //   ToastAndroid.SHORT,
//       //   ToastAndroid.TOP
//       // )
//     }
//   }
//   Fn = () => {
//     return (
//       <View style={styles().centeredView}>
//         <Modal
//           animationType="slide"
//           hardwareAccelerated={false}//only for android devices
//           transparent={true}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             Alert.alert("Modal has been closed.");
//             this.setState({
//               ...this.state,
//               modalVisible: !this.state.modalVisible
//             });
//           }}
//         >
//           <View style={styles().centeredView}>
//             <View style={styles().modalView}>
//               <Text style={styles().modalText}>Hello World!</Text>
//               <Pressable
//                 style={[styles().button, styles().buttonClose]}
//                 onPress={() => this.setState({
//                   ...this.state,
//                   modalVisible: !this.state.modalVisible
//                 })}
//               >
//                 <Text style={styles().textStyle}>{this.state.name}</Text>
//               </Pressable>
//             </View>
//           </View>
//         </Modal >
//       </View >
//     )
//   }

//   render() {
//     const { iptTxt, container, btn, txt } = styles();
//     return (
//       <SafeAreaView style={container}>
//         <Text style={{ marginBottom: 10, }}>Please enter your name here</Text>
//         <TextInput
//           style={iptTxt}
//           placeholder="e.g. John"
//           onChangeText={this.handleInput}
//         />
//         {/* <Button
//           title={this.state.submitted ? "clear" : "submit"}
//           onPress={this.onPressHandler}
//           disabled={this.state.submitted}
//           color="pink"
//         /> */}
//         {/* <TouchableOpacity
//           style={btn}
//           onPress={this.onPressHandler}
//           activeOpacity={.2}
//         >
//           <Text style={txt}>
//             {this.state.submitted ? "clear" : "submit"}
//           </Text>
//         </TouchableOpacity>

//         <TouchableHighlight
//           style={[btn, { margin: 10 }]}
//           onPress={this.onPressHandler}
//           activeOpacity={.2}
//           underlayColor="#dddddd"
//         >
//           <Text style={txt}>
//             {this.state.submitted ? "clear" : "submit"}
//           </Text>
//         </TouchableHighlight>

//         <TouchableWithoutFeedback
//           onPress={this.onPressHandler}
//         >
//           <View  style={[btn, { margin: 10 }]}>
//             <Text style={txt}>
//               {this.state.submitted ? "clear" : "submit"}
//             </Text>
//           </View>
//         </TouchableWithoutFeedback> */}
//           <Pressable
//             //onPressIn 按住被调用
//             //onPressOut 按住动作结束后被调用
//             //onLongPress 按住超过500ms 被调用
//             delayLongPress={500}//设置按住时间
//             onLongPress={this.onPressHandler}
//             style={({ pressed }) => [//按住事件 可以切换背景颜色或其他
//               { backgroundColor: pressed ? "blue" : "pink" },
//               btn
//             ]}
//           //hitSlop={{ top: 100, bottom: 100 }}//触发按钮的范围
//           //pressRetentionOffset={{ bottom: 100 }}
//           //disabled Pressable component is invalid
//           //android_ripple={} set up android 波纹效果
//           //android_disableSound={true}//if true, it will not play android system sounc;
//           >
//             <Text style={txt}>
//               {this.state.submitted ? "clear" : "submit"}
//             </Text>
//           </Pressable>
//             <this.Fn />
//       </SafeAreaView>
//     )
//   }
// }

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width,
    height
  },
  wrapper: {
    width,
    height,
  },
  img: {
    width: 50,
    height: 50
  }
})

const App = () => {
  const onPressHandler = ()=>{

  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={{uri:"https://cdn.pixabay.com/photo/2013/07/12/13/48/bricks-147309_960_720.png"}}
      >
        <ScrollView>
          {/* <View style={styles.wrapper}>
            <Image
              style={styles.img}
              source={require("./assets/1.png")}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.wrapper}>
            <Image
              style={styles.img}
              source={require("./assets/2.png")}
              resizeMode="stretch"
            />
          </View> */}
          <MashButton
            title="Button one"
            bgColor="pink"
            onPressHandler={onPressHandler}
          />
           <MashButton
            title="Button two"
            bgColor="#ff00ff"
            onPressHandler={onPressHandler}
            marginTop={10}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default App;