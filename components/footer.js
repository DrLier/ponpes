import React from "react";
import { View, Text, Image, StyleSheet,Dimensions } from "react-native";

const {width} = Dimensions.get("window")

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.addressContainer}>
        <Text style={styles.heading}>Alamat</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/map.png")}
            style={styles.mapImage}
          />
          <View style={styles.addressTextContainer}>
            <Text style={styles.addressTitle}>
              YAYASAN INSAAN QURANI AL BARAKAH
            </Text>
            <Text style={styles.address}>
              Masjid No. 44 RT 06/010 Desa Ciater Pondok Sentul Kec. Serpong BSD
              Tangsel, 15310 Banten Indonesia
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.donationContainer}>
        <Text style={styles.heading}>Donasi</Text>
        <View style={styles.donationTextContainer}>
          <Text style={styles.donationText}>
            Mari jadi bagian dari keluarga Allah SWT dengan membantu Mencetak
            Hafidz Quran. Salurkan donasi terbaik anda ke:
          </Text>
          <Text style={styles.accountInfo}>
            YAYASAN INSAAN QURANI AL BARAKAH {"\n"}
            Rek. Bank Syariah Indonesia (BSI) / Bank Syariah Mandiri (BSM) No.
            313-999-9999
          </Text>
        </View>
      </View>
      <View style={styles.contactContainer}>
        <Text style={styles.heading}>Hubungi Kami</Text>
        <Text style={styles.contactInfo}>
          Phone: 0813-1596-9024{"\n"}
          Email: barliankahuripan@gmail.com
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: width,
    paddingHorizontal: 124,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#103E13",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 128
  },
  addressContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 48,
  },
  heading: {
    color: "#4CAF4F",
    fontSize: 24,
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  imageContainer: {
    width: 360,
    height: 148,
    position: "relative",
    marginBottom: 5,
  },
  mapImage: {
    width: 360,
    height: 148,
    position: "absolute",
  },
  addressTextContainer: {
    padding: 16,
    position: "absolute",
    left: 16,
    top: 14,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  addressTitle: {
    color: "#1C1C1E",
    fontSize: 12,
    fontFamily: "DM Sans",
    fontWeight: "700",
    textTransform: "capitalize",
  },
  address: {
    width: 201,
    color: "#1C1C1E",
    fontSize: 8,
    fontFamily: "DM Sans",
    fontWeight: "700",
  },
  donationContainer: {
    height: 114,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 48,
  },
  donationTextContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  donationText: {
    width: 441,
    color: "#1C1C1E",
    fontSize: 12,
    fontFamily: "DM Sans",
    fontWeight: "500",
    lineHeight: 18,
    paddingVertical: 10
  },
  accountInfo: {
    width: 460,
    textAlign: "justify",
    color: "#1C1C1E",
    fontSize: 12,
    fontFamily: "DM Sans",
    fontWeight: "500",
  },
  contactContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  contactInfo: {
    width: 275,
    textAlign: "justify",
    color: "#1C1C1E",
    fontSize: 12,
    fontFamily: "DM Sans",
    fontWeight: "500",
    paddingVertical:10
  },
});

export default Footer;
