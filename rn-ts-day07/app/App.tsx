import React from "react";
import { Alert, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase({
  name: "rn_sqlite",
  location: "Library",
  createFromLocation:'~example.db'
},
  () => console.log("success"),
  error => console.log("error")
)

interface Categories {
  id: string;
  name: string;
}

interface State {
  iptTxt: string;
  categories: Array<Categories>
}

class App extends React.Component {
  state: State = {
    iptTxt: "",
    categories: [],
  }
  componentDidMount() {
    this.createTable();
  }
  componentDidUpdate() {
    return true;
  }
  createTable() {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS categories 
          (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(20)
          )
        `,
        [],
        (sqlTxn: SQLite.Transaction, res: SQLite.ResultSet) => {
          console.log("table created successfully")
        },
        error => {
          console.log("error on creating table", error);
        }
      )
    })
  }
  async addCategory() {
    let iptTxt = this.state.iptTxt;
    if (!iptTxt) {
      Alert.alert("Warining", "Enter category");
      return false;
    }
    await db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO categories (name) VALUES (?)`,
        [iptTxt],
        async (sqlTxn: SQLite.Transaction, res: SQLite.ResultSet) => {
          console.log(`${iptTxt} category added successfully`);
        },
        error => {
          console.log("error on adding category")
        }
      )
    })
  }
  getCategories = async () => {
    let results: Categories[] = [];
    await db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM categories ORDER BY id DESC`,
        [],
        (sqlTxn: SQLite.Transaction, res: SQLite.ResultSet) => {
          console.log("categories retrieved successfully");
          let len = res.rows.length;
          console.log(len)
          if (len > 0) {

            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                id: item.id,
                name: item.name
              });
            }
            this.setState({
              ...this.state,
              categories: results
            })
          }
        },
        error => {
          console.log("error on getting categories")
        }
      )
    })
  }
  onHandleInput = (value: string) => {
    this.setState({
      ...this.state,
      iptTxt: value
    })
  }

  render() {

    return (
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <StatusBar backgroundColor="orange" />
            <TextInput
              style={{
                borderWidth: 2,
                width: "80%",
                color: "black",
                fontSize: 18,
              }}
              onChangeText={(value) => this.onHandleInput(value)}
              placeholder="what the fuck"
            />
            <TouchableOpacity
              style={{
                width: "80%",
                backgroundColor: "#ccc",
                marginTop: 18,
              }}
              onPress={this.addCategory.bind(this)}
              activeOpacity={.2}
            >
              <Text style={{
                color: "white",
                textAlign: "center",
                fontSize: 18,
                padding: 12,
                fontWeight: "700"
              }}>
                submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "80%",
                backgroundColor: "#ccc",
                marginTop: 18,
              }}
              onPress={this.getCategories.bind(this)}
              activeOpacity={.2}
            >
              <Text style={{
                color: "white",
                textAlign: "center",
                fontSize: 18,
                padding: 12,
                fontWeight: "700"
              }}>
                getCategories
              </Text>
            </TouchableOpacity>
            {
              this.state.categories.length > 0 && this.state.categories.map((item) => {
                return (
                  <Text
                    style={{
                      color: "pink",
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                    key={item.id}>
                    {item.name}
                  </Text>
                )
              })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default App;