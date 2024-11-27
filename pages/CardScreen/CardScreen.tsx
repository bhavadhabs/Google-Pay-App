import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Types/types';

const DthScreen = () => {
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
      <Text style={styles.electricityTitle}>Select your bank</Text>

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
            console.log('Navigating to TataScreen');
            navigation.navigate('TataScreen');
          }}
        >
          <View style={styles.tataContainer}>
            <Image
              source={{ uri: 'https://i.pinimg.com/originals/2a/2c/1d/2a2c1d90075390b22e7e6060254dab0d.jpg' }}
              style={styles.tataImage}
            />
            <Text style={styles.tataText}>SBI Card</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to AirtelTvScreen');
            navigation.navigate('AirtelTvScreen');
          }}
        >
          <View style={styles.operator}>
            <Image
              source={{ uri: 'https://play-lh.googleusercontent.com/POGVZhNvSh05yA01H2VTlElv0Mw6r4R7hj9w7DaOvJVgiGoi0Fcawi02yITkyMT1zwqO' }}
              style={styles.airtelIcon}
            />
            <Text style={styles.airtelText}>HDFC Bank Card</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to D2HScreen');
            navigation.navigate('D2HScreen');
          }}
        >
          <View style={styles.operator}>
            <Image
              source={{ uri: 'https://play-lh.googleusercontent.com/0Cy8D1U0HAI_7d2Y8Xe1bSgJZWbtsVkk2ORS24Q7CSlxHLbM1EbbnbjztT-B40A48s-c' }}
              style={styles.d2hIcon}
            />
            <Text style={styles.d2hText}> Axis Bank Card</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to SunDirectScreen');
            navigation.navigate('SunScreen');
          }}
        >
          <View style={styles.operator}>
            <Image
              source={{ uri: 'https://play-lh.googleusercontent.com/V8Zlwk92MUcMQiLOdo_k28MiweE91XqeaF8gczs50-Eo45mu1fNLNA2_b6wE5HJKAt4' }}
              style={styles.sunIcon}
            />
            <Text style={styles.sunText}>RBL Bank Credit Card</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to DishTVScreen');
            navigation.navigate('DishScreen');
          }}
        >
          <View style={styles.operator}>
            <Image
              source={{ uri: 'https://play-lh.googleusercontent.com/YH4tv0TgQ5vLLpmrTaGDDMe9DmPBgEjLu6cz597uDbnQIsyBnQMlnKIGhYtjEcbTaA' }}
              style={styles.dishIcon}
            />
            <Text style={styles.dishText}>ICICI Bank Credit Card</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Mobile Operators Section */}
      <View style={styles.operatorsSection}>
        <Text style={styles.operatorsTitle}>All Banks</Text>
        <View style={styles.cityoperatorsList}>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to JioScreen');
            navigation.navigate('AdaniScreen');
          }}
        >
            <View style={styles.Adanioperator}>
              <Image
                source={{ uri: 'https://play-lh.googleusercontent.com/qbqs-PfK5bnqob7_QJKdkHknii6G0QkJXQRUH-okfVkt9sOsKMEiDXHjssfBOJ5m0X8E' }}
                style={styles.AdaniIcon}
              />
              <Text style={styles.AdaniText}>AU Bank Credit Card</Text>
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
                source={{ uri: 'https://play-lh.googleusercontent.com/c8oisII4zLnZjpba-fpVOmdRUbmZHpPRVzBW-dee049P74S4zpX8cUD2-0p_AHrKog' }}
                style={styles.AjmerIcon}
              />
              <Text style={styles.AjmerText}>American Express Credit Card</Text>
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
                source={{ uri: 'https://play-lh.googleusercontent.com/pyj__iWq2dHDTJx0kwHNA9WX6Mg-y59XwfbPcVtfKTbp1WcMlIg__khhgiUNQ0wcISTe' }}
                style={styles.AndhraIcon}
              />
              <Text style={styles.AndhraText}>Axis Bank Credit Card</Text>
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
                source={{ uri: 'https://play-lh.googleusercontent.com/Rvr_Z24TXfc1iBkcX-3ENupW7ZI92-3WoumuTRgvb1x2jYjBLhq-5YArjgXoTNWtFJ0' }}
                style={styles.ArunachalIcon}
              />
              <Text style={styles.ArunachalText}>Bank of India Credit Card</Text>
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
                source={{ uri: 'https://play-lh.googleusercontent.com/Zun0LsQ5m5zYGEhEgVDS-A9QQlgiZGJmGYuCeoGg7N3KcQm831svC5JH-Ip3xMBWrh8' }}
                style={styles.AssamIcon}
              />
              <Text style={styles.AssamText}>Bank of Baroda Credit Card</Text>
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
                source={{ uri: 'https://play-lh.googleusercontent.com/xloncpOO2ZFWKQzYCaQrPZpHsmYIQnwNUWrKN2Jy1kMi4IxFIWAXOnOKPWvgA41MOf4' }}
                style={styles.BesomiIcon}
              />
              <Text style={styles.BesomText}>Canara Bank Credit Card</Text>
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
  tataContainer: {
    alignItems: 'center',
    top: 20,
  },
  suggestContainer: {
    alignItems: 'center',
    top: 20,
  },
  tataImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    left: -130,
    top: -25,
    borderRadius: 35,
  },
  suggestedSection: {
    marginTop: 40,
    alignItems: 'center',
    top: 20,
  },
  suggestedText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
    marginBottom: 10,
    left: -109,
    top: -5,
  },
  tataText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
    marginBottom: 10,
    top: -57,
    left: -68,
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
    left: -110,
    top: -50,
  },
  cityoperatorsList: {
    marginTop: 10,
    width: '100%',
    top: -50,
    left: 0, 
  },
  operator: {
    alignItems: 'center',
    marginBottom: 20, // Adds spacing between operators
  },
  d2hIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -126,
    top: 5,
  },
  dishIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -125,
    top: -22,
  },
  sunIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -125,
    top: -10,
  },
  airtelIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -127,
    top: 26,
  },
  d2hText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
    alignItems: 'center',
    left: -45,
    top: -25,
  },
  airtelText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    alignItems: 'center',
    left: -38,
    top: -5,
  },
  sunText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    alignItems: 'center',
    left: -20,
    top: -40,
  },
  dishText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    alignItems: 'center',
    left: -15,
    top: -52,
  },
  jioIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    top: 40,
    left: -120,
  },
  viIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: 10,
  },
  bsnlIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: -3,
  },
  mumbaiIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: -12,
  },
  delhiIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: -18,
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
    left: -15,
    top: -12,
  },
  AjmerText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: 20,
    top: -42,
  },
  AndhraText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: -5,
    top: -65,
  },
  ArunachalText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: 5,
    top: -63,
  },
  AssamText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: 14,
    top: -68,
  },
  BesomText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: 6,
    top: -65,
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
    top: -5,
  },
  AndhraIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -118,
    top: -30,
  },
  ArunachalIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: -30,
  },
  AssamIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: -34,
  },
  BesomiIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: -30,
  },
  operatorText: {
    color: '#FFF',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default DthScreen;
