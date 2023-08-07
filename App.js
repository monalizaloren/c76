import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/Login";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return(
      <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Sistem" component={BottomTabNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}