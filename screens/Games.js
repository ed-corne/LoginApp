import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Layaut from "../components/Layaut";
import NoImg from "../assets/logo.png";

const Games = () => {
  const [dataLeagues, setDataLeagues] = useState([]);

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
        setDataLeagues(datos.response);
      }
    };
    xhttp.open("GET", "https://edcorne.000webhostapp.com/leagues.php", true);
    xhttp.send();
  }, []);

  return (
    <Layaut>
      <Text style={styles.text}>NBA Games</Text>
      <FlatList
        data={dataLeagues}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>League: {item.league}</Text>
            <Text style={styles.itemText}>Season: {item.season}</Text>
            <Text style={styles.itemText}>
              Arena: {item.arena.name}, {item.arena.city}
            </Text>
            <View style={styles.imageContainer}>
              <Image
                source={
                  !item.teams.visitors.logo 
                    ? { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" }
                    : { uri: item.teams.visitors.logo }
                }
                style={styles.image}
              />
              <Text style={styles.vsText}>VS</Text>
              <Image
                source={
                  !item.teams.home.logo 
                    ? { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" }
                    : { uri: item.teams.home.logo }
                }
                style={styles.image}
              />
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
    color: "#FFCB74",
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
    color: "#fff",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  vsText: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: "#FFF"
  },
});

export default Games;
