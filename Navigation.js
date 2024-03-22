import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

//SCREENS
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
            tabBarAtiveTintColor: 'purple',
        }}
      >

        
        <Tab.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{
                tabBarIcon: ({ color, size}) => (
                    <MaterialCommunityIcons name="login" size={24} color={color} />
                ),
            }}
        />
        <Tab.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{
                tabBarIcon: ({ color, size}) => (
                    <MaterialCommunityIcons name="account" size={24} color={color} />
                ),
            }}
        />
      </Tab.Navigator>
    );
  }

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}