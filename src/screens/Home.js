import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }
  
  // Fetch all info from elevators with a status Inactive or Intervention
  getInfo() {
    fetch `https://last-dance.azurewebsites.net/api/Elevator/Active`
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      })
    })
  }

  // Render a button for each elevator
  _renderItem = ({item, index}) => {
    const info = {
      id: item.id,
      status: item.elevator_status,
      serialNumber: item.serial_number
    }
    return (
      <View style={styles.container}>
        <View style={styles.card}>
        <TouchableOpacity
          // Navigate to the next page and send data from a specific elevator
          onPress={()=> this.props.navigation.navigate('Detail', {item: info })}>
          <Text style={styles.text}> ID:{item.id} </Text>
          <Text style={styles.text}> Status:{item.elevator_status} </Text>
          <Text style={styles.text}> SN:{item.serial_number} </Text>
        </TouchableOpacity>
        </View>
      </View>  
    )
  }
  
  // Render everytime the page is loaded
  render() {
    this.getInfo()
    let {dataSource, isloading} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Not-Active Elevators</Text>
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
    backgroundColor: '#A9A9A9'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textTitle: {
    color: '#101010',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
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
  },
  card: {
    width: 300,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#A3060E',
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
})



