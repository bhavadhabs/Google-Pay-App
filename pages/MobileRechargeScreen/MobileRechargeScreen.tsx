import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Types/types';

const MobileRechargeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Top Bar with Arrow and More Options */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://static.thenounproject.com/png/12934-200.png' }}
            style={styles.leftArrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dotsButton}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' }}
            style={styles.dotsIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Phone Number Input Section */}
      <View style={styles.middleSection}>
        <Text style={styles.enterPhoneText}>Enter mobile number</Text>
        <Text style={styles.validPhoneText}>Ensure this is a valid mobile number</Text>

        <View style={styles.phoneContainer}>
          <View style={styles.phoneInnerContainer}>
            <Image
              source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/13/14/15/india-162319_640.png' }}
              style={styles.flagIcon}
            />
            <Text style={styles.countryCode}>+91</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.placeholderText}>{phoneNumber ? '' : '00000 00000'}</Text>
              <TextInput
                style={styles.input}
                placeholder="00000 00000"
                placeholderTextColor="transparent"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Middle Section*/}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.freepik.com/512/12538/12538335.png?ga=GA1.1.1517299171.1726634454' }}
          style={styles.profileImage}
        />
      </View>

      {/* Suggested Profiles Section */}
      <View style={styles.suggestedSection}>
        <Text style={styles.suggestedText}>Suggested for you</Text>
        <TouchableOpacity
          style={styles.suggestContainer}
          onPress={() => {
            console.log('Navigating to MRScreen');
            navigation.navigate('MRScreen');
          }}
        >
          <View style={styles.suggestContainer}>
            <Image
              source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-2.png' }}
              style={styles.suggestImage}
            />
            <Text style={styles.suggestText}>xxx</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Mobile Operators Section */}
      <View style={styles.operatorsSection}>
        <Text style={styles.operatorsTitle}>Mobile Operators</Text>
        <View style={styles.operatorsList}>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to JioScreen');
            navigation.navigate('JioScreen');
          }}
        >
            <View style={styles.operator}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/1024px-Reliance_Jio_Logo.svg.png' }}
                style={styles.jioIcon}
              />
              <Text style={styles.jioText}>Jio Prepaid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to AirtelScreen');
            navigation.navigate('AirtelScreen');
          }}
        >
            <View style={styles.operator}>
              <Image
                source={{ uri: 'https://i1.sndcdn.com/avatars-000052885533-pppa8n-t500x500.jpg' }}
                style={styles.airtelIcon}
              />
              <Text style={styles.airtelText}>Airtel Prepaid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to ViScreen');
            navigation.navigate('ViScreen');
          }}
        >
            <View style={styles.operator}>
              <Image
                source={{ uri: 'https://s3-symbol-logo.tradingview.com/vodafone-idea--600.png' }}
                style={styles.viIcon}
              />
              <Text style={styles.viText}>Vi Prepaid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to BSNLScreen');
            navigation.navigate('BSNLScreen');
          }}
        >
            <View style={styles.operator}>
              <Image
                source={{ uri: 'https://play-lh.googleusercontent.com/vn5N4HDC9YhIACOKNht8xrK3xk4xNmXmvFpNDHRIz5JN7NX5Pz5eUr8zEBVutTEegpo' }}
                style={styles.bsnlIcon}
              />
              <Text style={styles.bsnlText}>BSNL Prepaid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to MumbaiScreen');
            navigation.navigate('MumbaiScreen');
          }}
        >
            <View style={styles.operator}>
              <Image
                source={{ uri: 'https://images.sftcdn.net/images/t_app-icon-m/p/dfa88600-4573-44b7-875d-73190873c677/3444497643/mtnl-selfcare-logo' }}
                style={styles.mumbaiIcon}
              />
              <Text style={styles.mumbaiText}>MTNL Mumbai Prepaid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.operator}
          onPress={() => {
            console.log('Navigating to DelhiScreen');
            navigation.navigate('DelhiScreen');
          }}
        >
            <View style={styles.operator}>
              <Image
                source={{ uri: 'https://images.sftcdn.net/images/t_app-icon-m/p/dfa88600-4573-44b7-875d-73190873c677/3444497643/mtnl-selfcare-logo' }}
                style={styles.delhiIcon}
              />
              <Text style={styles.delhiText}>MTNL Delhi Prepaid</Text>
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
    left: 20,
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
  middleSection: {
    alignItems: 'center',
    marginTop: 30,
  },
  enterPhoneText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: '500',
    marginBottom: 10,
    left: -59,
    top: 3,
  },
  validPhoneText: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
    top: 70,
    left: -26,
  },
  phoneContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 10,
  },
  phoneInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#222',
    width: '99%',
    left: -5,
    top: -50,
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
  suggestedSection: {
    marginTop: 40,
    alignItems: 'center',
  },
  suggestedText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#FFF',
    marginBottom: 10,
    left: -80,
    top: -70,
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
    top: -20,
  },
  suggestImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    left: -110,
    top: -25,
  },
  suggestText: {
    fontSize: 19,
    color: '#FFF',
    marginTop: 5,
    left: -110,
    top: -30,
  },
  operatorsSection: {
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  operatorsTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: '#FFF',
    marginBottom: 10,
    left: -80,
    top: -70,
  },
  operatorsList: {
    marginTop: 10,
    width: '100%',
    top: -110,
  },
  operator: {
    alignItems: 'center',
    marginBottom: 20, // Adds spacing between operators
  },
  jioText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: -30,
    top: 8,
  },
  airtelText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: -25,
    top: -6,
  },
  viText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: -42,
    top: -22,
  },
  bsnlText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: -31,
    top: -35,
  },
  mumbaiText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: -2,
    top: -44,
  },
  delhiText: {
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    left: -14,
    top: -52,
  },
  jioIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    top: 40,
    left: -120,
  },
  airtelIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 35,
    left: -120,
    top: 22,
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
  operatorText: {
    color: '#FFF',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default MobileRechargeScreen;
