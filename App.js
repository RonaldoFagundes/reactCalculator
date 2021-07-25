import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Content from './src/componentes/Content';
import Footer from './src/componentes/Footer';
import Header from './src/componentes/Header';
import { styles } from './styles/style';


export default function App() {
  return (
    <View style={styles.Container}>
      <Header />
      <Content />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}




