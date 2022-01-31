import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "./screens/navigation/HomeScreen"
import { BookScreen } from "./screens/navigation/BookScreen"
import { SettingsScreen } from "./screens/navigation/SettingsScreen"
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs"
import IconMC from "react-native-vector-icons/MaterialCommunityIcons"
import IconAnt from "react-native-vector-icons/AntDesign"

const HomeStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStackScreen: React.FC = () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen name="Main" component={HomeScreen} />
            <HomeStack.Screen name="Book" component={BookScreen} />
        </HomeStack.Navigator>
    )
}

export const AppNavigation: React.FC = () => {
    return (
        <NavigationContainer>            
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        height: 60,
                        paddingTop: 8,
                        paddingBottom: 8
                    },
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                      if (route.name === 'Home') {
                        return (
                          <IconAnt
                            name="home"
                            size={size}
                            color={color}
                          />
                        );
                      } else if (route.name === 'Settings') {
                        return (
                          <IconMC
                            name="account-circle-outline"
                            size={size}
                            color={color}
                          />
                        );
                      }
                    },
                    tabBarActiveTintColor: '#384F7D',
                    tabBarInactiveTintColor: '#abb3c3'
                  })}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}