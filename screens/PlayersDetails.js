import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import React, { useState } from "react";
import Layaut from "../components/Layaut";

const PlayersDetails = (props) => {
  const { id } = props.route.params;

  const [dataPlayerDetails, setDataPlayerDetails] = useState([
    {
      id: 2,
      firstname: "Quincy",
      lastname: "Acy",
      birth: {
        date: "1990-10-06",
        country: "USA",
      },
      nba: {
        start: 2012,
        pro: 6,
      },
      height: {
        feets: "6",
        inches: "7",
        meters: "2.01",
      },
      weight: {
        pounds: "240",
        kilograms: "108.9",
      },
      college: "Baylor",
      affiliation: "Baylor/USA",
      leagues: {
        standard: {
          jersey: 4,
          active: true,
          pos: "F",
        },
      },
    },
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
        setDataPlayers(datos.response);
      }
    };
    xhttp.open("GET", "https://edcorne.000webhostapp.com/Players.php?id" + id, true);
    xhttp.send();
  }, []);
*/
  const player = dataPlayerDetails[0];
  return (

    <View style={styles.container}>
         <StatusBar backgroundColor="#2F2F2F"></StatusBar>
        <Image source={require("../assets/player.png")} style={styles.logo} />
      {dataPlayerDetails.map((player, index) => (
        <View key={index} style={styles.detailsContainer}>
          <View style={styles.header}>
            <Text style={styles.title}> {player.firstname} {player.lastname}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>Birthdate:</Text>
            <Text style={styles.value}>{player.birth.date}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Country:</Text>
            <Text style={styles.value}>{player.birth.country}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>NBA Start:</Text>
            <Text style={styles.value}>{player.nba.start}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>NBA Pro:</Text>
            <Text style={styles.value}>{player.nba.pro}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Height:</Text>
            <Text style={styles.value}>
              {player.height.feets}'{player.height.inches}" (
              {player.height.meters}m)
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Weight:</Text>
            <Text style={styles.value}>
              {player.weight.pounds} lbs ({player.weight.kilograms} kg)
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>College:</Text>
            <Text style={styles.value}>{player.college}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Affiliation:</Text>
            <Text style={styles.value}>{player.affiliation}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Jersey:</Text>
            <Text style={styles.value}>{player.leagues.standard.jersey}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Active:</Text>
            <Text style={styles.value}>
              {player.leagues.standard.active ? "Yes" : "No"}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Position:</Text>
            <Text style={styles.value}>{player.leagues.standard.pos}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#111111',
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
    detailsContainer: {
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#2F2F2F',
      borderRadius: 5,
      width: '90%',
    },
    header: {
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: "#FFCB74"
    },
    detailRow: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    label: {
      fontWeight: 'bold',
      marginRight: 5,
      color: "#FFF"
    },
    value: {
      flex: 1,
      color: "#F6F6F6"
    },
  });
  
export default PlayersDetails;
