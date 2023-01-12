import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SpacesScreen from "./src/screens/SpacesScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import MailScreen from "./src/screens/MailScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from"react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="notification"
        screenOptions={{
          tabBarStyle: {
            height: 65,
            backgroundColor: "rgb(0,0,0)",
            borderTopWidth: 1,
            borderTopColor:""
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: "white",
          headerStyle:{
            backgroundColor:"black",
            borderBottomColor:""
          }
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="spaces"
          component={SpacesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="microphone" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="bell" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="mail"
          component={MailScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="mail-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
