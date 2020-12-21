import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import logo from '../screens/Logo-rocket.png'

function Detail(props) {
  const { route } = props
  const { navigation } = props
  const { item } = route.params
  const { id, status, serialNumber } = item
  async function changeStatus() {
    const url = `https://mobile-app-anthony.azurewebsites.net/api/Elevator/${id}`
    const someData = {
      "elevator_status": "ACTIVE"
    }   
      const putMethod = {
        method: 'PUT',
        headers: {
         'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify(someData)
      }
      fetch(url, putMethod)
  }

  async function getInfo() {
    var url = `https://mobile-app-anthony.azurewebsites.net/api/Elevator/Spec/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data
  }
  if (status == "ACTIVE"){
    return (
      <View style={styles.container}>
        <Image source={ logo }style={styles.logo}/>
        <View>
          <Text style={styles.text}>ID: {id}</Text>
          <Text style={styles.text}>STATUS:</Text>
          <Text style={styles.textGreen}>{status}</Text>
          <Text style={styles.text}>SN: {serialNumber}</Text>
          <TouchableOpacity style={styles.appButtonContainer}
            onPress={() => navigation.navigate ('Home')}>
            <Text style={styles.appButtonText}>HOME SCREEN</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }else {
  return (
    <View style={styles.container}>
    <Image source={ logo }style={styles.logo}/>
    <View>
      <Text style={styles.text}>ID: {id}</Text>
      <Text style={styles.text}>STATUS:</Text>
      <Text style={styles.textRed}>{status}</Text>
      <Text style={styles.text}>SN: {serialNumber}</Text>
        <TouchableOpacity style={styles.appButtonContainer}
            onPress={ async () => { 
              await changeStatus();
              const Elevator = await getInfo();
              const newInfo = {
                id: Elevator.id,
                status: Elevator.elevator_status,
                serialNumber: Elevator.serial_number,
              }
              navigation.navigate('Detail', {item:newInfo})
            } }>
          <Text style={styles.appButtonText}>CHANGE STATUS</Text>
        </TouchableOpacity>
      </View>
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
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  textGreen: {
    color: '#21AF4B',
    fontSize: 30,
    fontWeight: 'bold'
  },
  textRed: {
    color: '#CB2028',
    fontSize: 30,
    fontWeight: 'bold'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#A3060E",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:0
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
})

export default Detail

// src/screens/Detail.js