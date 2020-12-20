import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Detail(props) {
  const { route } = props
  const { item } = route.params
  const { id, status, serialNumber } = item
  const updateElevator = 'https://codeboxx-alexa.azurewebsites.net/api/Elevator/';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>ID: {id}</Text>
        <Text style={styles.cardText}>STATUS: {status}</Text>
        <Text style={styles.cardText}>SN: {serialNumber}</Text>
        <TouchableOpacity style={styles.buttonContainerLogout}
            onPress={ elevatorStat}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  buttonContainerLogout: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    top:0,
    left:0,
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    width: 350,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#101010',
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  cardText: {
    fontSize: 18,
    color: '#ffd700',
    marginBottom: 5
  },
})

export default Detail

// src/screens/Detail.js