import react, { Component } from 'react';
//aqui se importan todos los componenetes que se van usar de react native
import { View, Text, Image, Button, Alert, TextInput, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './SettingsScreen';
import Profile from './Profile';
import { AntDesign } from '@expo/vector-icons';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // declaracion de las variables

    };
  }

  render() {
    // aqui va la programaion de los objetos 
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="setting" size={24} color="black" />
          )
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="profile" size={24} color="black" />
          )
        }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  //stilos
})