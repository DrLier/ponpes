import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const {width} = Dimensions.get("window")

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navbarContainer}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      <Text style={styles.logotext}>Pondok Pesantren Al Barakah</Text>
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
        <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text style={styles.link}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Report')}>
        <Text style={styles.link}>Monthly Report</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Gallery')}>
        <Text style={styles.link}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.donateButton} onPress={() => navigation.navigate('Donasi')}>
        <Text style={styles.donateText}>Donasi</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "white",
    height: 124,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    width: width
  },
  logo: {
    width: 100,
    height: 65,
    resizeMode: "contain",
    color: "#263238",
    fontSize: 20,
    fontFamily: "DM Sans",
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0.15,
    wordWrap: "break-word",
    marginLeft:128,
    marginRight:100
  },
  logotext: {
    color: "#263238",
    fontSize: 20,
    fontFamily: "DM Sans",
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0.15,
    wordWrap: "break-word",
    marginLeft: -450
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "center",
    display: "inline-flex",
    gap: 40,
    marginLeft: 400,
    marginRight: 128
  },
  link: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    color: "black",
    fontSize: 16,
    fontFamily: 'DM Sans'
  },
  donateButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight:50
  },
  donateText: {
    color: "white",
    fontSize: 16,
    fontFamily: 'DM Sans'
  },
});

export default Navbar;
