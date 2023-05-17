import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Layaut from "../components/Layaut";
import Search from "../components/Search";
import { useNavigation } from '@react-navigation/native';

const Teams = () => {
  const navigation = useNavigation();

  const [dataTeams, setDataTeams] = useState([{
    "id": 1,
    "name": "Atlanta Hawks",
    "nickname": "Hawks",
    "code": "ATL",
    "city": "Atlanta",
    "logo": "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png",
    "allStar": false,
    "nbaFranchise": true,
    "leagues": {
      "standard": {
        "conference": "East",
        "division": "Southeast"
      },
      "vegas": {
        "conference": "summer",
        "division": null
      },
      "utah": {
        "conference": "East",
        "division": "Southeast"
      },
      "sacramento": {
        "conference": "East",
        "division": "Southeast"
      }
    }
  },
  {
    "id": 2,
    "name": "Boston Celtics",
    "nickname": "Celtics",
    "code": "BOS",
    "city": "Boston",
    "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png",
    "allStar": false,
    "nbaFranchise": true,
    "leagues": {
      "standard": {
        "conference": "East",
        "division": "Atlantic"
      },
      "vegas": {
        "conference": "summer",
        "division": null
      },
      "utah": {
        "conference": "East",
        "division": "Atlantic"
      },
      "sacramento": {
        "conference": "East",
        "division": "Atlantic"
      }
    }
  },]);
  const [search, setSearch] = useState("");

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const navigateToStatistics = (id, name, logo) => {
    navigation.navigate('TeamsStatistics', {id: id, name: name, logo: logo});
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
        setDataTeams(datos.response);
      }
    };
    xhttp.open("GET", "https://edcorne.000webhostapp.com/teams.php", true);
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
        setDataTeams(datos.response);
      }
    };
    xhttp.open("GET", "https://edcorne.000webhostapp.com/teams.php?search=" + search, true);
    xhttp.send();
  }, [search]);
*/
  return (
    <>
      <Search handleSearch={handleSearch} />
      <Layaut>
        <Text style={styles.text}>NBA Teams</Text>
        <FlatList
          data={dataTeams}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToStatistics(item.id, item.name, item.logo)}>
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>Name: {item.name}</Text>
                <Text style={styles.itemText}>NickName: {item.nickname}</Text>
                <Text style={styles.itemText}>City: {item.city}</Text>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.logo }} style={styles.image} />
                </View>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
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
    color: "#FFF",
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
