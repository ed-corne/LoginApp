import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Layaut from "../components/Layaut";
import NoImg from "../assets/logo.png";

import { useNavigation } from '@react-navigation/native';



const Games = () => {

  const navigation = useNavigation();

  const navigateToStatistics = (id) => {
    navigation.navigate('GamesStatistics', {id: id});
  };
  
  const [dataLeagues, setDataLeagues] = useState([{
    "id": 10980,
    "league": "standard",
    "season": 2022,
    "date": {
      "start": "2022-09-30T10:00:00.000Z",
      "end": "2022-09-30T12:34:00.000Z",
      "duration": "2:18"
    },
    "stage": 1,
    "status": {
      "clock": null,
      "halftime": false,
      "short": 3,
      "long": "Finished"
    },
    "periods": {
      "current": 4,
      "total": 4,
      "endOfPeriod": false
    },
    "arena": {
      "name": "Saitama Super Arena",
      "city": "Tokyo",
      "state": null,
      "country": "Japan"
    },
    "teams": {
      "visitors": {
        "id": 11,
        "name": "Golden State Warriors",
        "nickname": "Warriors",
        "code": "GSW",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/1200px-Warriors_de_Golden_State_logo.svg.png"
      },
      "home": {
        "id": 41,
        "name": "Washington Wizards",
        "nickname": "Wizards",
        "code": "WAS",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/archive/d/d6/20161212034849%21Wizards2015.png"
      }
    },
    "scores": {
      "visitors": {
        "win": 1,
        "loss": 0,
        "series": {
          "win": 1,
          "loss": 0
        },
        "linescore": [
          "16",
          "25",
          "28",
          "27"
        ],
        "points": 96
      },
      "home": {
        "win": 0,
        "loss": 1,
        "series": {
          "win": 0,
          "loss": 1
        },
        "linescore": [
          "12",
          "25",
          "27",
          "23"
        ],
        "points": 87
      }
    },
    "officials": [
      "James Williams",
      "Gediminas Petraitis",
      "JB DeRosa"
    ],
    "timesTied": 4,
    "leadChanges": 5,
    "nugget": null
  },
  {
    "id": 10981,
    "league": "standard",
    "season": 2022,
    "date": {
      "start": "2022-10-01T02:00:00.000Z",
      "end": "2022-10-01T04:41:00.000Z",
      "duration": "2:25"
    },
    "stage": 1,
    "status": {
      "clock": null,
      "halftime": false,
      "short": 3,
      "long": "Finished"
    },
    "periods": {
      "current": 4,
      "total": 4,
      "endOfPeriod": false
    },
    "arena": {
      "name": "Climate Pledge Arena",
      "city": "Seattle",
      "state": "WA",
      "country": "USA"
    },
    "teams": {
      "visitors": {
        "id": 165,
        "name": "Ra'anana Maccabi Ra'anana",
        "nickname": "Maccabi Ra'anana",
        "code": "MRA",
        "logo": ""
      },
      "home": {
        "id": 16,
        "name": "LA Clippers",
        "nickname": "Clippers",
        "code": "LAC",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/d/d6/Los_Angeles_Clippers_logo_2010.png"
      }
    },
    "scores": {
      "visitors": {
        "win": 0,
        "loss": 1,
        "series": {
          "win": 0,
          "loss": 1
        },
        "linescore": [
          "16",
          "14",
          "29",
          "22"
        ],
        "points": 81
      },
      "home": {
        "win": 1,
        "loss": 0,
        "series": {
          "win": 1,
          "loss": 0
        },
        "linescore": [
          "37",
          "28",
          "29",
          "27"
        ],
        "points": 121
      }
    },
    "officials": [
      "Tony Brothers",
      "Kevin Cutler",
      "John Butler"
    ],
    "timesTied": 2,
    "leadChanges": 0,
    "nugget": null
  },]);
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
        setDataLeagues(datos.response);
      }
    };
    xhttp.open("GET", "https://edcorne.000webhostapp.com/games.php", true);
    xhttp.send();
  }, []);
*/
  return (
    <Layaut>
      <Text style={styles.text}>NBA Games</Text>

      <FlatList
        data={dataLeagues}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> navigateToStatistics(item.id)}>
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
                      ? {
                          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
                        }
                      : { uri: item.teams.visitors.logo }
                  }
                  style={styles.image}
                />
                <Text style={styles.vsText}>VS</Text>
                <Image
                  source={
                    !item.teams.home.logo
                      ? {
                          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
                        }
                      : { uri: item.teams.home.logo }
                  }
                  style={styles.image}
                />
              </View>
            </View>
          </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: "#FFF",
  },
});

export default Games;
