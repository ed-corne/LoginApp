import react, { Component } from 'react';
//aqui se importan todos los componenetes que se van usar de react native
import { View, Text, Image, Button, Alert, TextInput, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // declaracion de las variables
      
    };
  }

  render() {
    // aqui va la programaion de los objetos 

    return (
      <View
      style={styles.view}>
        <Text>Welcome {this.props.route.params.name}</Text>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  //stilos
})