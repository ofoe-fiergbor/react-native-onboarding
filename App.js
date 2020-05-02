import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import AddToCart from './Components/AddToCart';
import PaymentSuccessful from './Components/PaymentSuccessful'

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      {/* <AddToCart/> */}
      {/* <PaymentSuccessful/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 32,
    marginTop: 65,
    backgroundColor: '#fff',
    
  },
});
