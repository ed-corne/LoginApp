import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Layaut from "../components/Layaut";
const Teams = () => {
  const [dataTeams, setDataTeams] = useState([]);

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
        setDataTeams(datos.response);
      }
    };
    xhttp.open("GET", "https://edcorne.000webhostapp.com/teams.php", true);
    xhttp.send();
  }, []);

  return (
    <Layaut>
      <Text style={styles.text}>NBA Teams</Text>
      <FlatList
        data={dataTeams}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Name: {item.name}</Text>
            <Text style={styles.itemText}>NickName: {item.nickname}</Text>
            <Text style={styles.itemText}>City: {item.city}</Text>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.logo }} style={styles.image} />
            </View>
          </View>
        )}
      ></FlatList>
    </Layaut>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFCB74"
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#FFF"
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default Teams;
