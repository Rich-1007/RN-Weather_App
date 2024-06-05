import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        {/* <Drawer.Screen name="Portfolio" component={Portfolio}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
