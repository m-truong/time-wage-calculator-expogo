import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// Tip: If using 'export default' don't destructure import. 
import WelcomeScreen from './screens/WelcomeScreen'
import InfoScreen from './screens/InfoScreen'
import MainScreen from './screens/MainScreen'

// Creates Stack
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    color: 'black',
    fontSize: 30
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: (100 / 2)
  }
})

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          // Update #1: Changed screen titles to "Time Wager"
          options={{ title: 'Time Wager' }} />
        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen}
          options={{ title: 'Time Wager' }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Time Wager' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
