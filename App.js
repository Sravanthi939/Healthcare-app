import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import DoctorScreen from "./screens/DoctorScreen";
import MedicineScreen from "./screens/MedicineScreen";
import TipsScreen from "./screens/TipsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Doctors" component={DoctorScreen} />
        <Stack.Screen name="Medicines" component={MedicineScreen} />
        <Stack.Screen name="Tips" component={TipsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}