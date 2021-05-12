import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// Tip: If using 'export default' don't destructure import. 
import WelcomeScreen from './screens/WelcomeScreen'
import InfoScreen from './screens/InfoScreen'
import MainScreen from './screens/MainScreen'

// Creates Stack
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  //  TODO: Update the grey border aroung the screens
  container: {
    // flex: 1,
    // paddingTop: 60,
    margin: 0,
    padding: 0,
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
