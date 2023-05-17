import { View, Text, FlatList, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Layaut from "../components/Layaut";
import { StyleSheet } from "react-native";
import Search from "../components/Search";

const HomeScreen = (props) => {
  //https://edcorne.000webhostapp.com/seasons.php
  const { name } = props.route.params;

  const [dataSeasons, setDataSeasons] = useState([
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  ]);
  const [dataLeagues, setDataLeagues] = useState([
    "africa",
    "orlando",
    "sacramento",
    "standard",
    "utah",
    "vegas",
  ]);
  /*
    useEffect(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //document.getElementById("demo").innerHTML = xhttp.responseText;
        console.log(xhttp.responseText);
        var temp = xhttp.responseText;
        var datos = JSON.parse(temp);
        //pasar el response a dataLeagues
        setDataSeasons(datos.response);
      }
    };
    xhttp.open("GET", "https://edcorne.000webhostapp.com/seasons.php", true);
    xhttp.send();
    console.log(dataLeagues[0]);
    console.log("hola");
    //

    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //document.getElementById("demo").innerHTML = xhttp.responseText;
        console.log(xhttp2.responseText);
        var temp2 = xhttp2.responseText;
        var datos2 = JSON.parse(temp2);
        //pasar el response a dataLeagues
        setDataLeagues(datos2.response);
        console.log("dataLeagues");
      }
    };
    xhttp2.open("GET", "https://edcorne.000webhostapp.com/leagues.php", true);
    xhttp2.send();
  }, []);
*/
  return (
    <ScrollView nestedScrollEnabled={true}>
      <Layaut>
        <Image source={require("../assets/back5.jpg")} style={styles.logo} />
        <Image source={require("../assets/logo.png")} style={styles.logo2} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome {name.trim()}</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.subText2}>
            In this app you can find data aboute:
          </Text>
          <Text style={styles.subText}>leagues </Text>
          <ScrollView horizontal={true} style={{ width: "100%" }}>
            {dataLeagues.map((item) => (
              <View key={item} style={styles.itemContainer}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </ScrollView>
          <Text style={styles.subText}>Seasons</Text>
          <ScrollView horizontal={true} style={{ width: "100%" }}>
            {dataSeasons.map((item) => (
              <View key={item} style={styles.itemContainer}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </Layaut>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFCB74",
  },
  subText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F6F6F6",
    padding: 18,
  },
  subText2: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#F6F6F6",
    paddingLeft: 18,
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    width: "100%",
  },
  itemContainer: {
    flex: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111111",
  },
  logo: {
    width: "116%",
    height: 520,
    position: "relative",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 0,
    borderColor: "#f2f2f2",
    top: -25,
  },
  logo2: {
    width: "100%",
    height: 200,
    position: "absolute",
    top: -30,
  },
});

export default HomeScreen;
