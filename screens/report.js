import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Navbar from '../components/navbar'; // Asumsi Navbar.js berada di direktori components
import Footer from '../components/footer'; // Asumsi Footer.js berada di direktori components

function ReportScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation}/>
      <ScrollView style={styles.content}>
        <Text>Report Screen Content</Text>
        {/* Konten lainnya */}
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    // Tambahkan padding atau margin jika diperlukan
  },
});

export default ReportScreen;
