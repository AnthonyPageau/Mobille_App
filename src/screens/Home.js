import React, { useEffect, useState, Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView, StatusBar, Button } from 'react-native'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }
  
  componentDidMount() {
    fetch `https://codeboxx-alexa.azurewebsites.net/api/Elevator/Active`
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      })
    })
  }
  _renderItem = ({item, index}) => {
    const info = {
      id: item.id,
      status: item.elevator_status,
      serialNumber: item.serial_number
    }
    return (
      <View >
        <TouchableOpacity
        onPress={()=> this.props.navigation.navigate('Detail', {item: info })}>
        <Text style={styles.text}> ID:{item.id}  SerialNumber:{item.serial_number} </Text>
        </TouchableOpacity>
      </View>  
    )
  }
  render() {
    let {dataSource, isloading} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Elevator</Text>
        <TouchableOpacity
          style={styles.buttonContainerLogout}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonText}>LogOut</Text>
        </TouchableOpacity>
        <FlatList
          data={dataSource}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    top:0,
    right:0,
  },
  buttonContainerLogout: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    top:0,
    left:0,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})


