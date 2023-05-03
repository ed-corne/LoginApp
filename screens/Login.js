import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React, { Component, useState, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AlertGreen from "../components/AlertGreen";
import Layaut from "../components/Layaut";

const Login = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [completeData, setCompleteData] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const inputRefEmail = useRef(null);

  const validateData = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //document.getElementById("demo").innerHTML = xhttp.responseText;
        console.log(xhttp.responseText);
        setResult(xhttp.responseText);
        //this.setState({ result: xhttp.responseText });
        //console.log("resultado = " + _this.state.result);
        if (xhttp.responseText == 0) {
          setResult("Empty data");
        } else if (xhttp.responseText == -1) {
          setResult("Invalid credentials or you have not verified your email");
        } else {
          props.navigation.replace('TabNavigation', { name: xhttp.responseText });
          console.log("my log: "+xhttp.responseText);
        }
      }
    };
    xhttp.open(
      "GET",
      "https://edcorne.000webhostapp.com/Login.php?email=" +
        email +
        "&password=" +
        password,
      true
    );
    xhttp.send();
    showModal();
    console.log(email);
    console.log(password);
  };

  const userregistration = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //document.getElementById("demo").innerHTML = xhttp.responseText;
        console.log(xhttp.responseText);
        setResult(xhttp.responseText);

        if (xhttp.responseText == 0) {
          setResult("Campos vacios");
        } else if (xhttp.responseText == -1) {
          setResult("Error al insertar datos Prueba de nuevo");
        } else if (xhttp.responseText == 1){
          setResult("Registration successful, please verify in the registered Email-Id")
          setIsSignUp(false);
          setName("");
          setEmail("");
          setPassword("");
          inputRefEmail.current.focus();
        }
      }
    };
    xhttp.open(
      "GET",
      "https://edcorne.000webhostapp.com/registro.php?name=" +
        name +
        "&email=" +
        email +
        "&password=" +
        password,
      true
    );
    xhttp.send();
    showModal();
  };

  const showModal = () => {
    setModalVisible(true);
  };

  return (
    <Layaut>
      <Image source={require("../assets/ball.png")} style={styles.logo} />

      {isSignUp ? (
        <View style={styles.containerTittle}>
          <Text style={styles.txtLogin}>Sign Up</Text>
          <Text style={styles.txtSubTittle}>Create an account to continue</Text>
        </View>
      ) : (
        <View style={styles.containerTittle}>
          <Text style={styles.txtLogin}>Login</Text>
          <Text style={styles.txtSubTittle}>Please sing in to continue</Text>
        </View>
      )}

      <View style={styles.loginContainer}>
        {isSignUp ? (
          <TextInput
            style={styles.inputData}
            onChangeText={(name) => setName(name)}
            placeholder="Name"
            placeholderTextColor="#919191"
            value={name}
          ></TextInput>
        ) : null}
        <TextInput
          style={styles.inputData}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          placeholderTextColor="#919191"
          keyboardType="email-address"
          value={email}
          ref={inputRefEmail}
        ></TextInput>
        <TextInput
          style={styles.inputData}
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          placeholderTextColor="#919191"
          secureTextEntry={true}
          value={password}
        ></TextInput>
        {isSignUp ? (
          <TouchableOpacity style={styles.btnLogin} onPress={userregistration}>
            <Text>Sign Up →</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btnLogin} onPress={validateData}>
            <Text>Login →</Text>
          </TouchableOpacity>
        )}
        <AlertGreen
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          result={result}
        ></AlertGreen>

        <View style={isSignUp ? styles.bottomTXT : styles.bottomTXT2}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
            }}
          >
            {isSignUp ? (
              <Text style={{ marginRight: 10, color: "#FFF" }}>
                Already have an account?
              </Text>
            ) : (
              <Text style={{ marginRight: 10, color: "#FFF" }}>
                Don't have an account?
              </Text>
            )}
            <TouchableOpacity
              title="Presiona aquí"
              onPress={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? (
                <Text style={styles.txtSubText}>Login</Text>
              ) : (
                <Text style={styles.txtSubText}>Sing up</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layaut>
  );
};

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
  loginContainer: {
    alignItems: "flex-end",
  },
  containerTittle: {
    margin: 30,
  },
  txtLogin: {
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
    marginBottom: 20,
    borderColor: "#FFF",
    color: "#FFF",
  },
  btnLogin: {
    alignItems: "center",
    backgroundColor: "#FFCB74",
    padding: 10,
    width: 90,
    borderRadius: 20,
    marginTop: 10,
  },
  bottomTXT: { position: "absolute", bottom: -135, right: 0 },
  bottomTXT2: { position: "absolute", bottom: -170, right: 0 },
});

export default Login;
