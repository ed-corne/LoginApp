import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Layaut from "../components/Layaut";
import { StyleSheet } from "react-native";

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
          }
        };
        xhttp2.open("GET", "https://edcorne.000webhostapp.com/leagues.php", true);
        xhttp2.send();
      }, []);

      */
  return (
    <Layaut>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome {name.trim()}</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.subText2}>In this app you can find data aboute:</Text>
        <Text style={styles.subText}>leagues </Text>
        <FlatList
          data={dataLeagues}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item.toString()}
        />
        <Text style={styles.subText}>Seasons</Text>
        <FlatList
          data={dataSeasons}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </Layaut>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
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
    paddingLeft:18
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
});

export default HomeScreen;
