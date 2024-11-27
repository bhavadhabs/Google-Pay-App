import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const MakeMyTripDesign = () => {
  const [selectedTab, setSelectedTab] = useState("One Way");

  const specialFares = [
    { title: "Student", description: "Extra discounts/baggage" },
    { title: "Senior Citizen", description: "Up to ₹600 off" },
    { title: "Armed Forces", description: "Up to ₹600 off" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/8637/8637512.png?ga=GA1.1.2104870483.1730698714' }} // Replace with the actual URI for the close icon
            style={styles.closeicon}
          />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://media.licdn.com/dms/image/D4D12AQGWd9kBYwYG-g/article-cover_image-shrink_600_2000/0/1689525229752?e=2147483647&v=beta&t=1bXFd51Sf39Q-VP9pqWgS5tnORUY_4LCVmq_U0aR8jk' }} // Replace with the redBus logo URI
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>redBus</Text>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' }} // Replace with actual URI for menu icon
            style={styles.menuicon}
          />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Image
            source={{ uri: "https://files.oaiusercontent.com/flight-icon-uri" }}
            style={styles.tabIcon}
          />
          <Text style={styles.tabText}>Flights</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image
            source={{ uri: "https://files.oaiusercontent.com/car-icon-uri" }}
            style={styles.tabIcon}
          />
          <Text style={styles.tabText}>Cabs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image
            source={{ uri: "https://files.oaiusercontent.com/bus-icon-uri" }}
            style={styles.tabIcon}
          />
          <Text style={styles.tabText}>Bus</Text>
        </TouchableOpacity>
      </View>

      {/* Trip Selection */}
      <View style={styles.tripSelection}>
        {["One Way", "Roundtrip", "Multicity"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tripButton,
              selectedTab === tab && styles.selectedTripButton,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tripButtonText,
                selectedTab === tab && styles.selectedTripButtonText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Trip Details Section */}
      <View style={styles.tripDetails}>
        <View style={styles.detailRow}>
          <Image
            source={{ uri: "https://files.oaiusercontent.com/from-icon-uri" }}
            style={styles.detailIcon}
          />
          <View>
            <Text style={styles.detailLabel}>FROM</Text>
            <Text style={styles.detailValue}>Delhi DEL</Text>
            <Text style={styles.detailSubtext}>Delhi Airport</Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <Image
            source={{ uri: "https://files.oaiusercontent.com/to-icon-uri" }}
            style={styles.detailIcon}
          />
          <View>
            <Text style={styles.detailLabel}>TO</Text>
            <Text style={styles.detailValue}>Mumbai BOM</Text>
            <Text style={styles.detailSubtext}>
              Chhatrapati Shivaji International Airport
            </Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <Image
            source={{ uri: "https://files.oaiusercontent.com/date-icon-uri" }}
            style={styles.detailIcon}
          />
          <View>
            <Text style={styles.detailLabel}>DEPARTURE DATE</Text>
            <Text style={styles.detailValue}>25 Nov, Mon 2024</Text>
          </View>
          <TouchableOpacity style={styles.addReturnDate}>
            <Text style={styles.addReturnDateText}>+ ADD RETURN DATE</Text>
            <Text style={styles.returnSubtext}>Save more on round trips!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailRow}>
          <Image
            source={{ uri: "https://files.oaiusercontent.com/traveller-icon-uri" }}
            style={styles.detailIcon}
          />
          <View>
            <Text style={styles.detailLabel}>TRAVELLER & CLASS</Text>
            <Text style={styles.detailValue}>1, Eco/Prem. Eco</Text>
          </View>
        </View>
      </View>

      {/* Special Fares Section */}
      <View style={styles.specialFare}>
        <Text style={styles.specialFareTitle}>SELECT A SPECIAL FARE</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {specialFares.map((fare, index) => (
            <View key={index} style={styles.fareCard}>
              <Text style={styles.fareCardTitle}>{fare.title}</Text>
              <Text style={styles.fareCardDescription}>{fare.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Search Flights Button */}
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>SEARCH FLIGHTS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FFF", 
    padding: 10 
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D32F2F', // redBus header color
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '108%',
    left: -20,
    top: -10,
  },
  closeButton: {
    padding: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
    backgroundColor: '#000',
    borderBottomWidth: 6,
    borderRadius: 20,
    left: -50,
    shadowColor: '#000',
  },
  headerTitle: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    left: -50,
  },
  menuButton: {
    padding: 10,
  },
  menuicon: {
    width: 20,
    height: 20,
    tintColor: '#FFF'
  },
  closeicon: {
    width: 13,
    height: 13,
    tintColor: '#FFF'
  },
  icon: { 
    width: 24, 
    height: 24 
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  tab: { 
    alignItems: "center" 
  },
  tabIcon: { 
    width: 40, 
    height: 40 
  },
  tabText: { 
    fontSize: 14, 
    marginTop: 5 
  },
  tripSelection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  tripButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  selectedTripButton: { 
    backgroundColor: "#FFF", 
    borderColor: "#007bff" 
  },
  tripButtonText: { 
    color: "#000" 
  },
  selectedTripButtonText: { 
    color: "#000" 
  },
  tripDetails: { 
    backgroundColor: "#FFF", 
    borderRadius: 10, 
    padding: 15, 
    marginBottom: 10 
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  detailIcon: { 
    width: 30, 
    height: 30, 
    marginRight: 10 
  },
  detailLabel: { 
    fontSize: 12, 
    color: "#555" 
  },
  detailValue: { 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  detailSubtext: { 
    fontSize: 12, 
    color: "#888" 
  },
  addReturnDate: { 
    marginTop: 5 
  },
  addReturnDateText: { 
    color: "#007bff" 
  },
  returnSubtext: { 
    fontSize: 12, 
    color: "#555" 
  },
  specialFare: { 
    marginBottom: 10 
  },
  specialFareTitle: { 
    fontSize: 14, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  fareCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: "center",
  },
  fareCardTitle: { 
    fontSize: 14, 
    fontWeight: "bold" 
  },
  fareCardDescription: { 
    fontSize: 12, 
    color: "#555" 
  },
  searchButton: {
    backgroundColor: "#007bff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  searchButtonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
});

export default MakeMyTripDesign;
