import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'

const Stack = createStackNavigator()

import Detail from '../screens/Detail'
import Login from '../screens/Login'

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          gestureEnabled: true
        }}>
         <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login Screen' }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={({navigation}) => ({  headerRight: () => (
            <Button
              onPress={() => navigation.navigate ('Login')}
              title="Logout"
              color="#A3060E"
            />
          ), })}
        />
         <Stack.Screen
          name='Detail'
          component={Detail}
          options={({navigation}) => ({  headerRight: () => (
            <Button
              onPress={() => navigation.navigate ('Login')}
              title="Logout"
              color="#A3060E"
            />
          ), })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator