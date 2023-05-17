import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Layaut from "../components/Layaut";

const TeamsStatistics = (props) => {
  const { id, name, logo } = props.route.params;

  const [teamsStatistics, setTeamsStatistics] = useState([
    {
      games: 87,
      fastBreakPoints: 9,
      pointsInPaint: 48,
      biggestLead: 5,
      secondChancePoints: 21,
      pointsOffTurnovers: 21,
      longestRun: 10,
      points: 9592,
      fgm: 3569,
      fga: 7875,
      fgp: "61.6",
      ftm: 1537,
      fta: 2063,
      ftp: "74.5",
      tpm: 917,
      tpa: 2826,
      tpp: "32.4",
      offReb: 972,
      defReb: 2915,
      totReb: 3887,
      assists: 2154,
      pFouls: 1769,
      steals: 676,
      turnovers: 1245,
      blocks: 456,
      plusMinus: -601,
    },
  ]);
  return (
    <Layaut>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <Image source={{ uri: logo }} style={styles.logo} />

          {teamsStatistics.map((data, index) => (
            <View key={index} style={styles.statisticsContainer}>
              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Games</Text>
                <Text style={styles.statisticValue}>{data.games}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Fast Break Points</Text>
                <Text style={styles.statisticValue}>
                  {data.fastBreakPoints}
                </Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Points in Paint</Text>
                <Text style={styles.statisticValue}>{data.pointsInPaint}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Biggest Lead</Text>
                <Text style={styles.statisticValue}>{data.biggestLead}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Second Chance Points</Text>
                <Text style={styles.statisticValue}>
                  {data.secondChancePoints}
                </Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Points off Turnovers</Text>
                <Text style={styles.statisticValue}>
                  {data.pointsOffTurnovers}
                </Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Longest Run</Text>
                <Text style={styles.statisticValue}>{data.longestRun}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Points</Text>
                <Text style={styles.statisticValue}>{data.points}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Field Goals M</Text>
                <Text style={styles.statisticValue}>{data.fgm}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Field Goals A</Text>
                <Text style={styles.statisticValue}>{data.fga}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Field Goal P</Text>
                <Text style={styles.statisticValue}>{data.fgp}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Free Throws M</Text>
                <Text style={styles.statisticValue}>{data.ftm}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Free Throws A</Text>
                <Text style={styles.statisticValue}>{data.fta}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Free Throw P</Text>
                <Text style={styles.statisticValue}>{data.ftp}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Three-Pointers M</Text>
                <Text style={styles.statisticValue}>{data.tpm}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>
                  Three-Pointers A
                </Text>
                <Text style={styles.statisticValue}>{data.tpa}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>
                  Three-Point P
                </Text>
                <Text style={styles.statisticValue}>{data.tpp}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Offensive Rebounds</Text>
                <Text style={styles.statisticValue}>{data.offReb}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Defensive Rebounds</Text>
                <Text style={styles.statisticValue}>{data.defReb}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Total Rebounds</Text>
                <Text style={styles.statisticValue}>{data.totReb}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Assists</Text>
                <Text style={styles.statisticValue}>{data.assists}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Personal Fouls</Text>
                <Text style={styles.statisticValue}>{data.pFouls}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Steals</Text>
                <Text style={styles.statisticValue}>{data.steals}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Turnovers</Text>
                <Text style={styles.statisticValue}>{data.turnovers}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Blocks</Text>
                <Text style={styles.statisticValue}>{data.blocks}</Text>
              </View>

              <View style={styles.statistic}>
                <Text style={styles.statisticLabel}>Plus/Minus</Text>
                <Text style={styles.statisticValue}>{data.plusMinus}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Layaut>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#FFCB74",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
    borderRadius: 8,
  },
  statisticsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },

  statistic: {
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  statisticLabel: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
  },
  statisticValue: {
    fontSize: 16,
    textAlign: "center",
    color: "#F6F6F6",
  },
});

export default TeamsStatistics;
