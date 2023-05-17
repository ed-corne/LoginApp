import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Layaut from "../components/Layaut";
import Search from "../components/Search";
import { useNavigation } from "@react-navigation/native";

const Players = () => {
  const navigation = useNavigation();
  const [dataPlayers, setDataPlayers] = useState([{
    "id": 2,
    "firstname": "Quincy",
    "lastname": "Acy",
    "birth": {
      "date": "1990-10-06",
      "country": "USA"
    },
    "nba": {
      "start": 2012,
      "pro": 6
    },
    "height": {
      "feets": "6",
      "inches": "7",
      "meters": "2.01"
    },
    "weight": {
      "pounds": "240",
      "kilograms": "108.9"
    },
    "college": "Baylor",
    "affiliation": "Baylor/USA",
    "leagues": {
      "standard": {
        "jersey": 4,
        "active": true,
        "pos": "F"
      }
    }
  },
  {
    "id": 8,
    "firstname": "LaMarcus",
    "lastname": "Aldridge",
    "birth": {
      "date": "1985-07-19",
      "country": "USA"
    },
    "nba": {
      "start": 2006,
      "pro": 15
    },
    "height": {
      "feets": "6",
      "inches": "11",
      "meters": "2.11"
    },
    "weight": {
      "pounds": "250",
      "kilograms": "113.4"
    },
    "college": "Texas-Austin",
    "affiliation": "Texas-Austin/USA",
    "leagues": {
      "standard": {
        "jersey": 21,
        "active": true,
        "pos": "C-F"
      }
    }
  },]);
  const [search, setSearch] = useState("");

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const navigateToDetails = (id) => {
    navigation.navigate('PlayersDetails', {id: id});
  }

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
        setDataPlayers(datos.response);
      }
    };
    xhttp.open("GET", "https://edcorne.000webhostapp.com/Players.php", true);
    xhttp.send();
  }, []);

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
        setDataPlayers(datos.response);
      }
    };
    xhttp.open("GET", "https://edcorne.000webhostapp.com/Players.php?search=" + search, true);
    xhttp.send();
  }, [search]);
*/
  return (
    <>
      <Search handleSearch={handleSearch} />

      <Layaut>
        <Text style={styles.text}>NBA Players</Text>
        <FlatList
          data={dataPlayers}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToDetails(item.id)}>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>
                  {item.firstname} {item.lastname}
                </Text>
                <Text style={styles.vsText}>Information: </Text>
                <Text style={styles.itemText}>
                  <Text style={styles.vsText}>Birth</Text> {item.birth.date},{" "}
                  {item.birth.country}
                </Text>
                <Text style={styles.itemText}>
                  <Text style={styles.vsText}>College</Text> {item.college}
                </Text>
                <Text style={styles.vsText}>NBA: </Text>
                <Text style={styles.itemText}>
                  <Text style={styles.vsText}>start</Text> {item.nba.start}
                </Text>
                <Text style={styles.itemText}>
                  <Text style={styles.vsText}>Pro</Text> {item.nba.pro}
                </Text>
                <Text style={styles.itemText}>
                  <Text style={styles.vsText}>Jersey</Text>{" "}
                  {item.leagues.standard.jersey}
                </Text>
                <Text style={styles.itemText}>
                  <Text style={styles.vsText}>Active</Text>{" "}
                  {item.leagues.standard.active ? (
                    <Text style={styles.activeText}>Yes</Text>
                  ) : (
                    <Text style={styles.inActiveText}>No</Text>
                  )}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </Layaut>
    </>
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
    color: "#74C2FF",
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  activeText: {
    fontSize: 16,
    color: "green",
  },
  inActiveText: {
    fontSize: 16,
    color: "red",
  },
});

export default Players;
