import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function PaymentSuccessful({ navigation }) {
  return (
    <View style={styles.homeScreenContainer}>
      <Text style={styles.headingText}>PAYMENT SUCCESSFUL</Text>
      <View>
        <Text style={styles.paragraphText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus odit
          assumenda officia. Quam eos nam, alias possimus aperiam, est
          voluptatum ipsam tempore quo dolor ab delectus repudiandae officia, in
          quisquam?
        </Text>
      </View>
      <View>
        <Image
          source={require("../../assets/images/purchase_successful.png")}
          style={styles.image}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.swiperContainer}>
        <TouchableOpacity
          style={styles.swiper}
          onPress={() => {
            navigation.navigate("Home");
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.swiper}
          onPress={() => {
            navigation.navigate("AddToCart");
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.swiper, styles.swiperHover]}
        ></TouchableOpacity>
        <Text
          style={styles.previous}
          onPress={() => {
            navigation.navigate("AddToCart");
          }}
        >
          Previous
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    backgroundColor:'#fff',
    paddingHorizontal: 32,
  },
  headingText: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  paragraphText: {
    color: "#b1bab3",
  },
  image: {
    width: 220,
    height: 250,
    alignSelf: "center",
    marginVertical: 7,
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#8470c4",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
  },
  swiperContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 520,
    alignSelf: "center",
  },
  swiper: {
    backgroundColor: "#b6a5cc",
    height: 7,
    width: 7,
    borderRadius: 40,
    marginHorizontal: 1,
  },
  swiperHover: {
    backgroundColor: "#735d8f",
    width: 14,
  },
  previous: {
    position: "absolute",
    left: -140,
    bottom: -10,
    color: "#b8b2bf",
  },
});
