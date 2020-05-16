import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleLineIcons } from "@expo/vector-icons";
import Home from "./src/screens/Home";
import AddToCart from "./src/screens/AddToCart";
import PaymentSuccessful from "./src/screens/PaymentSuccessful";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "Onlline Shopping",
          headerStyle: {
            backgroundColor: "#8470c4",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerRight: () => (
            <Text>
              <SimpleLineIcons
                style={{ color: "#fff" }}
                name="options-vertical"
                size={24}
                color="black"
              />
            </Text>
          ),
          // headerLeft: () => (
          //   <Text style={{ color: "#fff", marginLeft: 10 }}>Back</Text>
          // ),
        }}
      >
        <Stack.Screen
          // options={{
          //   headerLeft: () => null,
          // }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="AddToCart" component={AddToCart} />
        <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessful} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
