import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";

const AjmerSection = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/left.png" }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ajmer Electricity (TNEB)</Text>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/menu-2.png" }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Bharat BillPay Subtitle */}
      <Text style={styles.subtitle}>Bharat Billpay</Text>

      {/* Enter Account Details Section */}
      <View style={styles.detailsContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.detailsTitle}>Enter account details</Text>
          <TouchableOpacity>
            <Text style={styles.sampleBillText}>Show sample bill</Text>
          </TouchableOpacity>
        </View>

        {/* Consumer Number Input */}
        <Text style={styles.inputLabel}>Consumer number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your 9–12 digit consumer number"
          placeholderTextColor="#666"
        />

        {/* Nickname Input */}
        <Text style={styles.inputLabel}>Nickname (Optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="E.g., Home"
          placeholderTextColor="#666"
        />

        {/* Info Section */}
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Bharat_BillPay_Logo.png/800px-Bharat_BillPay_Logo.png",
          }}
          style={styles.bharatLogo}
        />
        <Text style={styles.infoText}>
          This allows Google Pay to fetch your current and future bills so that you can view and pay them.
        </Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    marginLeft: 8,
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 16,
  },
  detailsContainer: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 8,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  detailsTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  sampleBillText: {
    fontSize: 14,
    color: "#4a90e2",
    fontWeight: "bold",
  },
  inputLabel: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#2c2c2e",
    color: "#fff",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
  },
  bharatLogo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
    alignSelf: "flex-start",
    marginVertical: 16,
  },
  infoText: {
    fontSize: 12,
    color: "#ccc",
    lineHeight: 18,
  },
  continueButton: {
    backgroundColor: "#4a90e2",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  continueButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AjmerSection;
