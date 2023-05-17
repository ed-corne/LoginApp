import { View, Text, StyleSheet,  Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import Layaut from '../components/Layaut'


const GamesStatistics = (props) => {
  const { id } = props.route.params;


  const  [dataGamesStatistics, setDataGamesStatistics] = useState([{
    "team": {
      "id": 11,
      "name": "Golden State Warriors",
      "nickname": "Warriors",
      "code": "GSW",
      "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/1200px-Warriors_de_Golden_State_logo.svg.png"
    },
    "statistics": [
      {
        "fastBreakPoints": 12,
        "pointsInPaint": 36,
        "biggestLead": 10,
        "secondChancePoints": 15,
        "pointsOffTurnovers": 19,
        "longestRun": 12,
        "points": 96,
        "fgm": 29,
        "fga": 79,
        "fgp": "36.7",
        "ftm": 31,
        "fta": 40,
        "ftp": "77.5",
        "tpm": 7,
        "tpa": 26,
        "tpp": "26.9",
        "offReb": 10,
        "defReb": 52,
        "totReb": 62,
        "assists": 18,
        "pFouls": 27,
        "steals": 6,
        "turnovers": 17,
        "blocks": 3,
        "plusMinus": "9",
        "min": "240:00"
      }
    ]
  },
  {
    "team": {
      "id": 41,
      "name": "Washington Wizards",
      "nickname": "Wizards",
      "code": "WAS",
      "logo": "https://upload.wikimedia.org/wikipedia/fr/archive/d/d6/20161212034849%21Wizards2015.png"
    },
    "statistics": [
      {
        "fastBreakPoints": 7,
        "pointsInPaint": 36,
        "biggestLead": 4,
        "secondChancePoints": 4,
        "pointsOffTurnovers": 7,
        "longestRun": 12,
        "points": 87,
        "fgm": 31,
        "fga": 84,
        "fgp": "36.9",
        "ftm": 19,
        "fta": 30,
        "ftp": "63.3",
        "tpm": 6,
        "tpa": 35,
        "tpp": "17.1",
        "offReb": 7,
        "defReb": 37,
        "totReb": 44,
        "assists": 20,
        "pFouls": 27,
        "steals": 12,
        "turnovers": 14,
        "blocks": 10,
        "plusMinus": "-9",
        "min": "240:00"
      }
    ]
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
        setDataGamesStatistics(datos.response);
      }
    };
    xhttp.open("GET", "https://edcorne.000webhostapp.com/GamesStatistics.php?id=" + id, true);
    xhttp.send();
  },[])
*/

  return (
    <Layaut>
    <View style={styles.container}>
      {dataGamesStatistics.map((data) => (
        <View key={data.team.id} style={styles.teamContainer}>
          <Image style={styles.logo} source={{ uri: data.team.logo }} />
          <Text style={styles.teamName}>{data.team.name}</Text>
          <View style={styles.statisticsContainer}>
            <View style={styles.statistic}>
              <Text style={styles.statisticLabel}>Points</Text>
              <Text style={styles.statisticValue}>
                {data.statistics[0].points}
              </Text>
            </View>
            <View style={styles.statistic}>
              <Text style={styles.statisticLabel}>FG%</Text>
              <Text style={styles.statisticValue}>
                {data.statistics[0].fgp}%
              </Text>
            </View>
            <View style={styles.statistic}>
              <Text style={styles.statisticLabel}>3P%</Text>
              <Text style={styles.statisticValue}>
                {data.statistics[0].tpp}%
              </Text>
            </View>
            <View style={styles.statistic}>
              <Text style={styles.statisticLabel}>FT%</Text>
              <Text style={styles.statisticValue}>
                {data.statistics[0].ftp}%
              </Text>
            </View>
            <View style={styles.statistic}>
              <Text style={styles.statisticLabel}>Rebounds</Text>
              <Text style={styles.statisticValue}>
                {data.statistics[0].totReb}
              </Text>
            </View>
            <View style={styles.statistic}>
              <Text style={styles.statisticLabel}>Assists</Text>
              <Text style={styles.statisticValue}>
                {data.statistics[0].assists}
              </Text>
            </View>
            <View style={styles.statistic}>
              <Text style={styles.statisticLabel}>Steals</Text>
              <Text style={styles.statisticValue}>
                {data.statistics[0].steals}
              </Text>
            </View>
            <View style={styles.statistic}>
              <Text style={styles.statisticLabel}>Blocks</Text>
              <Text style={styles.statisticValue}>
                {data.statistics[0].blocks}
              </Text>
            </View>
            <View style={styles.statistic}>
              <Text style={styles.statisticLabel}>Turnovers</Text>
              <Text style={styles.statisticValue}>
                {data.statistics[0].turnovers}
              </Text>
            </View>
            <View style={styles.statistic}>
              <Text style={styles.statisticLabel}>Fouls</Text>
              <Text style={styles.statisticValue}>
                {data.statistics[0].pFouls}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  </Layaut>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#FFCB74"
  },
  statisticsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  statistic: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  statisticLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#FFF"
  },
  statisticValue: {
    fontSize: 16,
    textAlign: 'center',
    color: "#F6F6F6"
  },
});


export default GamesStatistics