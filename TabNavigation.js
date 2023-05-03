import react, { Component } from "react";
//aqui se importan todos los componenetes que se van usar de react native
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  TextInput,
  StyleSheet,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Teams from "./screens/Teams";
import Games from "./screens/Games";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const TabNavigation = (props) => {
  const Tab = createBottomTabNavigator();
  console.log("name: " + props.route.params.name);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ name: props.route.params.name }}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#F6F6F6",
          tabBarActiveBackgroundColor: "#FFCB74",
          tabBarStyle: {
            backgroundColor: "#2F2F2F",
            borderTopColor: "#111111",
          },
          tabBarIcon: () => <AntDesign name="home" size={24} color="white" />,
        }}
      />
      <Tab.Screen
        name="Games"
        component={Games}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#F6F6F6",
          tabBarActiveBackgroundColor: "#FFCB74",
          tabBarStyle: {
            backgroundColor: "#2F2F2F",
            borderTopColor: "#111111",
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="vector-link"
              size={24}
              color="white"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Teams"
        component={Teams}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#F6F6F6",
          tabBarActiveBackgroundColor: "#FFCB74",
          tabBarStyle: {
            backgroundColor: "#2F2F2F",
            borderTopColor: "#111111",
          },
          tabBarIcon: () => <AntDesign name="team" size={24} color="white" />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  //stilos
});

export default TabNavigation;
