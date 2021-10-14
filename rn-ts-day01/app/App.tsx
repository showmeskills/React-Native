import React, { useState } from "react";
import { 
  Button, 
  Dimensions, 
  FlatList, 
  Keyboard, 
  KeyboardAvoidingView, 
  Platform, 
  RefreshControl, 
  SafeAreaView, 
  ScrollView, 
  SectionList, 
  StyleSheet, 
  Text, 
  TextInput, 
  TextInputChangeEventData, 
  TouchableWithoutFeedback, 
  View 
} from "react-native";




// const App = () => {
//   const { container, box, box1, box2, wrapper, listStyle } = styles();
//   const [list, setList] = useState([
//     { id: 0, item: "item 1" },
//     { id: 1, item: "item 2" },
//     { id: 2, item: "item 3" },
//     { id: 3, item: "item 4" },
//     { id: 4, item: "item 5" },
//     { id: 5, item: "item 6" },
//     { id: 6, item: "item 7" },
//     { id: 7, item: "item 8" },
//     { id: 8, item: "item 9" },
//     { id: 9, item: "item 10" },
//     { id: 10, item: "item 11" },
//   ])
//   const [refresh, setRefresh] = useState(false)
//   const onRefresh = () => {
//     setRefresh(true)
//     setList([
//       ...list,
//       {
//         id: new Date().getTime(),
//         item: `item ${new Date().getTime()}`
//       }
//     ])
//     setRefresh(false);
//   }
//   const renderItem = () => {

//   }
//   return (
//     <SafeAreaView style={container}>
//       {/* <View style={wrapper}>
//         <Text style={box}>1</Text>
//         <Text style={[box,box1]}>2</Text>
//         <Text style={[box,box2]}>3</Text>
//       </View> */}
//       {/* <ScrollView horizontal={false}
//         refreshControl={
//           <RefreshControl
//             refreshing={refresh}
//             onRefresh={onRefresh}
//           />
//         }
//       >
//         {
//           list.map(item=>{
//             return(
//               <Text style={listStyle} key={item.id}>{item.item}</Text>
//             )
//           })
//         }
//       </ScrollView> */}

//       <FlatList
//         data={list}
//         renderItem={item => {
//           return (
//             <Text style={listStyle} key={item.index}>{item.item}</Text>
//           )
//         }}
//         />

//     </SafeAreaView>
//   )
// }



// const App = () => {
//   const { container, listStyle, txt } = styles();
//   const [lists, setLists] = useState([
//     { name: "item 1" },
//     { name: "item 2" },
//     { name: "item 3" },
//     { name: "item 4" },
//     { name: "item 5" },
//     { name: "item 6" },
//     { name: "item 7" },
//     { name: "item 8" },
//     { name: "item 9" },
//     { name: "item 10" },
//     { name: "item 11" },
//   ])
//   const renderItem = ({ item }: any) => {
//     return (
//       <View style={listStyle}>
//         <Text style={txt}>{item.name}</Text>
//       </View>
//     )
//   }
//   const [refresh, setRefresh] = useState(false)
//   const onRefresh = () => {
//     setRefresh(true)
//     setLists([
//       ...lists,
//       {
//         name: `item ${new Date().getTime()}`
//       }
//     ])
//     setRefresh(false);
//   }
//   return (
//     <SafeAreaView style={container}>
//       <FlatList
//         style={container}
//         keyExtractor={(item, index) => index.toString()}//获取key 值
//         horizontal={false}
//         inverted={false} // 属性功能类似于reverse
//         numColumns={1}
//         data={lists}
//         renderItem={renderItem}
//         refreshControl={
//           <RefreshControl
//             refreshing={refresh}
//             onRefresh={onRefresh}
//             colors={['#ff00ff']}
//           />
//         }
//       />
//     </SafeAreaView >
//   )
// }


// const App = () => {
//   const { container, listStyle, txt } = styles();
//   const DATA = [
//     {
//       title:"Title 1",
//       data:["Item 1-1","Item 1-2","Item 1-3"],
//     },
//     {
//       title:"Title 2",
//       data:["Item 2-1","Item 2-2","Item 2-3"],
//     },
//     {
//       title:"Title 3",
//       data:["Item 3-1"],
//     },
//     {
//       title:"Title 4",
//       data:["Item 4-1","Item 4-2"],
//     },
//   ]
//   const renderItem = ({section:{title},item}:any) => {
//     return (
//       <View style={listStyle}>
//         <Text style={txt}>{title}-{item}</Text>
//       </View>
//     )
//   }
//   const renderSectionHeader = ({section}:any)=>{
//     return (
//       <View style={[listStyle,{backgroundColor:"pink"}]}>
//         <Text style={txt}>{section.title}</Text>
//       </View>
//     )
//   } 
//   return (
//     <SafeAreaView style={container}>
//       <SectionList
//         sections={DATA}
//         renderItem={renderItem}
//         renderSectionHeader={renderSectionHeader}//title 会置顶
//       />
//     </SafeAreaView >
//   )
// }


// const App = () => {
//   const { container, listStyle, txt } = styles();
//   const DATA = [
//     {
//       title:"Title 1",
//       data:["Item 1-1","Item 1-2","Item 1-3"],
//     },
//     {
//       title:"Title 2",
//       data:["Item 2-1","Item 2-2","Item 2-3"],
//     },
//     {
//       title:"Title 3",
//       data:["Item 3-1"],
//     },
//     {
//       title:"Title 4",
//       data:["Item 4-1","Item 4-2"],
//     },
//   ]
//   const [data,setData] = useState([DATA[0]])
//   const [refreshing,setRefreshing] = useState(false);
//   const [idx,setIndex] = useState(1);
//   const renderItem = ({section:{title},item}:any) => {
//     return (
//       <View style={listStyle}>
//         <Text style={txt}>{title}-{item}</Text>
//       </View>
//     )
//   }
//   const renderSectionHeader = ({section}:any)=>{
//     return (
//       <View style={[listStyle,{backgroundColor:"pink"}]}>
//         <Text style={txt}>{section.title}</Text>
//       </View>
//     )
//   } 
//   const onRefresh = ()=>{
//     setIndex(idx+1);
//     setRefreshing(true);
//     setData(()=>([
//       ...data,
//       DATA[idx]
//     ]))
//     setRefreshing(false);
//   }
//   return (
//     <SafeAreaView style={container}>
//       <SectionList
//         sections={data}
//         renderItem={renderItem}
//         renderSectionHeader={renderSectionHeader}//title 会置顶
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//           />
//         }
//       />
//     </SafeAreaView >
//   )
// }



// const styles = () => StyleSheet.create({
//   container: {
//     width,
//     height,
//     // backgroundColor:"#0020e9"
//   },
//   wrapper: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "stretch",
//   },
//   box: {
//     flex: 2,
//     backgroundColor: "#1ffffc",
//     fontSize: 25,
//     fontWeight: "800",
//     textAlign: "center",
//     lineHeight: 100,
//   },
//   box1: {
//     flex: 6,
//     backgroundColor: "#fd1eee"
//   },
//   box2: {
//     flex: 4,
//     backgroundColor: "#fffc3a"
//   },
//   listStyle: {
//     backgroundColor: "#1ffffc",
//     margin: 10,
//     alignItems: 'center'
//   },
//   txt: {
//     fontSize: 25,
//     fontWeight: "800",
//     lineHeight: 100,
//   }
// })

// const { width, height } = Dimensions.get("window");
// const styles = () => StyleSheet.create({
//   container: {
//     width,
//     height,
//     alignItems: "center"
//   },
//   text: {
//     fontSize: 20,
//     margin: 10,
//   },
//   txtIpt: {
//     borderWidth: 1,
//     width: 200,
//     height: 50,
//     borderColor: "#555",
//     borderRadius: 5,
//     textAlign: "center",
//   }
// })
// const App = () => {
//   const { container, text, txtIpt } = styles();
//   const [name,setName] = useState();
//   return (
//     <SafeAreaView style={container}>
//       <Text style={text}>
//         Please write your name:
//       </Text>
//         <TextInput
//           style={txtIpt}
//           placeholder="e.g. John"
//           onChangeText={(value:any)=>setName(value)}//双向数据绑定
//           keyboardType="default"//键盘类型
//           keyboardAppearance="light"//键盘背景色
//           autoFocus={false}//获取聚焦
//           maxLength={6}//最大输入长度
//           secureTextEntry={true}//变成密码输入
//         />  
//         <Text style={text}>
//           Your name is :{name}
//         </Text>
//     </SafeAreaView >
//   )
// }


const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} autoFocus={true} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

export default KeyboardAvoidingComponent;
//export default App;