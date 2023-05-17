import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import TabNavigation from "./TabNavigation";
import Games from "./screens/Games";
import GamesStatistics from "./screens/GamesStatistics";
import TeamsStatistics from "./screens/TeamsStatistics";
import PlayersDetails from "./screens/PlayersDetails";
import nbaLogo from "./assets/nba-logo.png";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NBA APP"
          component={Login}
          options={{
            headerLeft: () => <Image source={nbaLogo} style={styles.logo} />,
            headerStyle: { backgroundColor: "#2F2F2F" },
            headerTitleStyle: { color: "#FFF" },
          }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GamesStatistics"
          component={GamesStatistics}
          options={{
            headerBackVisible: true,
            headerShown: true,
            title: "Game statistics",
            headerStyle: { backgroundColor: "#2F2F2F",},
            headerTitleStyle: { color: "#FFF" },
            headerTintColor: "#FFF",
          }}
        />
        <Stack.Screen
          name="TeamsStatistics"
          component={TeamsStatistics}
          options={{
            headerBackVisible: true,
            headerShown: true,
            title: "Team statistics",
            headerStyle: { backgroundColor: "#2F2F2F",},
            headerTitleStyle: { color: "#FFF" },
            headerTintColor: "#FFF",
          }}
        />
        <Stack.Screen
          name="PlayersDetails"
          component={PlayersDetails}
          options={{
            headerBackVisible: true,
            headerShown: true,
            title: "Player Details",
            headerStyle: { backgroundColor: "#2F2F2F",},
            headerTitleStyle: { color: "#FFF" },
            headerTintColor: "#FFF",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 45,
    width: 20,
    borderRadius: 5,
    marginEnd: 10,
  },
});

export default App;
