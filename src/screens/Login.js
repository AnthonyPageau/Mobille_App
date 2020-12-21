import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';

import bgImage from '../screens/background.jpg'
import logo from '../screens/Logo-rocket.png'


const { width: WIDTH } = Dimensions.get('window') 

function Login(props) {
  const [text, setText] = useState('');
  const { navigation } = props

  async function getData(email) {

    var url = `https://codeboxx-alexa.azurewebsites.net/api/Employee/find/${email}`;
    const response = await fetch(url);
    const data = await response.json();
    return data
  };
  async function checkData() {
    var getEmployee = await getData(text)
    if (getEmployee.length == 1) {
      navigation.navigate("Home")
    } else {
      alert("WRONG EMAIL")
    }
  }
    return (
      <ImageBackground source={ bgImage }style={styles.backgroundContainer}>
         
        <View style={styles.logoContainer}>
          <Image source={ logo }style={styles.logo}/>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            onChangeText={text => setText(text)}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid= 'transparent'
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}
          onPress={checkData}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </ImageBackground>

    );
}


const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#A3060E',
    fontSize: 50,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    width: WIDTH -55,
    height: 45,
    borderRadius:25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
   loginBtn:{
    width: WIDTH -55,
    backgroundColor:"#A3060E",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  logo: {
    width:400,
    height:150,
    marginBottom:250,
  },

});

export default Login