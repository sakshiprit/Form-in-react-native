/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Text,View,Button,TextInput,StyleSheet} from 'react-native';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:"",
      password:"",
      address:""
    }
  }
 
  submit()
  {
    console.warn("All value",this.state)
  }
render(){
  return (
  <View>
  <TextInput placeholder = "Enter name" 
  style={[styles.textBox,styles.firstBox]}
  onChangeText={(text)=>{this.setState({name:text})}}
  >
  </TextInput>
  <TextInput placeholder = "Enter password" 
  style={styles.textBox}
  secureTextEntry={true}
  onChangeText={(text)=>{this.setState({password:text})}}
  >
  </TextInput>

  <TextInput placeholder = "Enter address" 
  style={styles.textBox}
  onChangeText={(text)=>{this.setState({address:text})}}
  >
  </TextInput>
  <Button onPress={()=>{this.submit()}} title="submit"/>
  </View>

);
}  
};

const styles = StyleSheet.create({
  textBox:{
    borderColor:"skyblue",
    borderWidth:2,
    padding:10,
    marginHorizontal:20,
    marginVertical:50,
    
  },

  firstBox:{
    marginTop:80,
  }
})

export default App;
