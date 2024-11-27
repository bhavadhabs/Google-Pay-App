import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Types/types';

const MobileRechargeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://static.thenounproject.com/png/12934-200.png' }}
            style={styles.leftArrowIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png' }}
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>Search billers</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' }}
            style={styles.dotsIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Select Electricity Supplier */}
      <Text style={styles.electricityTitle}>Select your electricity supplier</Text>

      {/* Middle Section*/}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.freepik.com/512/12538/12538335.png?ga=GA1.1.1517299171.1726634454' }}
          style={styles.profileImage}
        />
      </View>

      {/* Suggested Profiles Section */}
      <View style={styles.suggestedSection}>
        <Text style={styles.suggestedText}>Suggested</Text>
        <TouchableOpacity
          style={styles.suggestContainer}
          onPress={() => {
            console.log('Navigating to TNEBScreen');
            navigation.navigate('TNEBScreen');
          }}
        >
          <View style={styles.suggestContainer}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/6/62/TANGEDCO_Logo.png' }}
              style={styles.suggestImage}
            />
            <Text style={styles.suggestText}>Tamil Nadu Electricity (TNEB)</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Mobile Operators Section */}
      <View style={styles.operatorsSection}>
        <Text style={styles.operatorsTitle}>All electricity suppliers</Text>
        <View style={styles.operatorsList}>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to JioScreen');
            navigation.navigate('AdaniScreen');
          }}
        >
            <View style={styles.Adanioperator}>
              <Image
                source={{ uri: 'https://play-lh.googleusercontent.com/l7IrBIUb71YoOIQ3PI5QPC7N2TCqr6fkb0AeaHi3oO8r0h53fIMkdCbX5_y_w2fNrQ' }}
                style={styles.AdaniIcon}
              />
              <Text style={styles.AdaniText}>Adani Electricity</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to AirtelScreen');
            navigation.navigate('AjmerScreen');
          }}
        >
            <View style={styles.Ajmeroperator}>
              <Image
                source={{ uri: 'https://play-lh.googleusercontent.com/NEB_Q8jMZLQJTp9LIoKRogw7NhWizLLK6NTgObepX3sWEaw468QGpKFKJlxnsTVLRFZ2' }}
                style={styles.AjmerIcon}
              />
              <Text style={styles.AjmerText}>Ajmer Vidyut (AVVNL)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to ViScreen');
            navigation.navigate('AndhraScreen');
          }}
        >
            <View style={styles.Andhraoperator}>
              <Image
                source={{ uri: 'https://play-lh.googleusercontent.com/bK0lG6oL4DtSfLRZeyJ8wqUoUqXYlx8_mwMRjs0wcmox3lBrN3JsjYy1t59qkO7JWA' }}
                style={styles.AndhraIcon}
              />
              <Text style={styles.AndhraText}>Andhra Pradesh Central{'\n'}Power Distribution Cooperation</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to BSNLScreen');
            navigation.navigate('ArunachalScreen');
          }}
        >
            <View style={styles.Arunachaloperator}>
              <Image
                source={{ uri: 'https://play-lh.googleusercontent.com/pkjVbuOqPnbgF-kV1EpQn85B3Jm0Ug0ePXjzfcbNrdFzywc-Hi2O_VsmtI-Xrxa7fQ' }}
                style={styles.ArunachalIcon}
              />
              <Text style={styles.ArunachalText}>Arunachal Pradesh Power{'\n'}(DOPAP)- Bill Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to MumbaiScreen');
            navigation.navigate('AssamScreen');
          }}
        >
            <View style={styles.Assamoperator}>
              <Image
                source={{ uri: 'https://play-lh.googleusercontent.com/zNCkWerOvcmjkk6AKpuy0oJO4szR2G_CgEKgNSw0wm6LPkzTgfhiW3e6slJr00UV9Q' }}
                style={styles.AssamIcon}
              />
              <Text style={styles.AssamText}>Assam Power (APDCL)- Bill Payment </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to DelhiScreen');
            navigation.navigate('BesomiScreen');
          }}
        >
            <View style={styles.Besomioperator}>
              <Image
                source={{ uri: 'https://pbs.twimg.com/profile_images/1420366643411124227/YiZtnymg_400x400.jpg' }}
                style={styles.BesomiIcon}
              />
              <Text style={styles.BesomText}>BESCOM - Banglore Electricity</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  electricityTitle:{
    color: '#FFF',
    fontSize: 22,
    fontWeight: '400',
    left: 40,
    top: 50,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  leftArrowIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: '#FFF',
    left: 6,
  },
  dotsButton: {
    padding: 10,
  },
  dotsIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: '#FFF',
  },
  searchBar: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    width: '200%',
    height: '170%',
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
  },
  searchText: {
    color: '#AAA',
    fontSize: 16,
    marginLeft: 10,
  },
  middleSection: {
    alignItems: 'center',
    marginTop: 30,
  },
  flagIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  countryCode: {
    fontSize: 27,
    color: '#FFF',
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  placeholderText: {
    position: 'absolute',
    fontSize: 27,
    color: '#FFF',
    left: 10,
  },
  input: {
    fontSize: 20,
    color: '#FFF',
    backgroundColor: 'transparent',
    padding: 0,
    marginLeft: 10,
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    top: -116,
    left: 169,
  },
  suggestContainer: {
    alignItems: 'center',
    top: 20,
  },
  suggestImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    left: -110,
    top: -25,
  },
  suggestedSection: {
    marginTop: 40,
    alignItems: 'center',
  },
  suggestedText: {
    fontSize: 19,
    fontWeight: '500',
    color: '#FFF',
    marginBottom: 10,
    left: -102,
    top: 10,
  },
  suggestText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    marginTop: 5,
    left: 20,
    top: -60,
  },
  operatorsSection: {
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  operatorsTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF',
    marginBottom: 10,
    left: -80,
    top: -20,
  },
  operatorsList: {
    marginTop: 10,
    width: '100%',
    top: -40,
    left: -15, 
  },
  operator: {
    alignItems: 'center',
    marginBottom: 20, // Adds spacing between operators
  },
  Adanioperator:{
    alignItems: 'center',
    marginBottom: 20, // Adds spacing between operators
  },
  Ajmeroperator:{
    alignItems: 'center',
    marginBottom: 20, // Adds spacing between operators
  },
  Andhraoperator:{
    alignItems: 'center',
    marginBottom: 20, // Adds spacing between operators
    top: -5,
  },
  Arunachaloperator:{
    alignItems: 'center',
    marginBottom: 20, // Adds spacing between operators
    top: -30,
  },
  Assamoperator:{
    alignItems: 'center',
    marginBottom: 20, // Adds spacing between operators
    top: -55,
  },
  Besomioperator:{
    alignItems: 'center',
    marginBottom: 20, // Adds spacing between operators
    top: -85,
  },
  AdaniText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: -30,
    top: -12,
  },
  AjmerText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: -10,
    top: -42,
  },
  AndhraText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: 25,
    top: -70,
  },
  ArunachalText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: 7,
    top: -90,
  },
  AssamText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: 50,
    top: -103,
  },
  BesomText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: 27,
    top: -102,
  },
  AdaniIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    top: 20,
    left: -120,
  },
  AjmerIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: -10,
  },
  AndhraIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: -30,
  },
  ArunachalIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: -50,
  },
  AssamIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: -70,
  },
  BesomiIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: -70,
  },
  operatorText: {
    color: '#FFF',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default MobileRechargeScreen;
