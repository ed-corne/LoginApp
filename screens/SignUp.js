import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import React, { Component, useState } from "react";
import AlertGreen from "../components/AlertGreen";
import Layaut from "../components/Layaut";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // declaracion de las variables
      name: "",
      email: "",
      password: "",
      result: "",
      completeData: false,
      modalVisible: false,
    };
  }

  render() {
    // aqui va la programaion de los objetos

    const userregistration = () => {
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          //document.getElementById("demo").innerHTML = xhttp.responseText;
          console.log(xhttp.responseText);
          _this.setState({ result: xhttp.responseText });
        }
      };
      xhttp.open(
        "GET",
        "https://edcorne.000webhostapp.com/registro.php?name=" +
          this.state.name +
          "&email=" +
          this.state.email +
          "&password=" +
          this.state.password,
        true
      );
      xhttp.send();
      showModal();
    };

    const showModal = () => {
      this.setState({ modalVisible: true });
    };

    return (
      <Layaut>
        <Image source={require("../assets/ball.png")} style={styles.logo} />

        <View style={styles.containerTittle}>
          <Text style={styles.txtSingUp}>Sign Up</Text>
          <Text style={styles.txtSubTittle}>Create an account to continue</Text>
        </View>

        <View style={styles.signUpContainer}>
          <TextInput
            style={styles.inputData}
            onChangeText={(name) => this.setState({ name })}
            placeholder="Name"
            placeholderTextColor="#919191"
          ></TextInput>
          <TextInput
            style={styles.inputData}
            onChangeText={(email) => this.setState({ email })}
            placeholder="Email"
            placeholderTextColor="#919191"
            keyboardType="email-address"
          ></TextInput>
          <TextInput
            style={styles.inputData}
            onChangeText={(password) => this.setState({ password })}
            placeholder="Password"
            placeholderTextColor="#919191"
            secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity style={styles.btnSignUp} onPress={userregistration}>
            <Text>Sign Up →</Text>
          </TouchableOpacity>

          <AlertGreen
            visible={this.state.modalVisible}
            onClose={() => this.setState({ modalVisible: false })}
            result={this.state.result}
          ></AlertGreen>

          <View style={{ position: "absolute", bottom: -160, right: 0 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={{ marginRight: 10, color: "#FFF" }}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={styles.txtSubText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Layaut>
    );
  }
}

const styles = StyleSheet.create({
  //stilos
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  logo: {
    width: 170,
    height: 170,
    position: "absolute",
    top: 40,
    right: -40,
  },
  imgContainer: {
    position: "relative",
  },
  signUpContainer: {
    alignItems: "flex-end",
  },
  containerTittle: {
    margin: 30,
  },
  txtSingUp: {
    fontSize: 32,
    color: "#FFCB74",
    fontWeight: "bold",
  },
  txtSubTittle: {
    color: "#FFF",
  },
  txtSubText: {
    color: "#FFCB74",
  },
  inputData: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    width: 200,
    marginBottom: 10,
    borderColor: "#FFF",
    color: "#FFF",
  },
  btnSignUp: {
    alignItems: "center",
    backgroundColor: "#FFCB74",
    padding: 10,
    width: 90,
    borderRadius: 20,
    marginTop: 10,
  },
});
