import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Portfolio from "../screens/Portfolio";


// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator>

        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> */}
        <Drawer.Screen name="Portfolio" component={Portfolio} />
        <Drawer.Screen name="Weather App" component={HomeScreen}

        />
      </Drawer.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigation;
