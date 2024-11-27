import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BankTransferScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Top Section with Arrow */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://static.thenounproject.com/png/12934-200.png' }}
            style={styles.leftarrowicon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dotsButton}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' }}
            style={styles.dotsIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Phone Number Section */}
      <View style={styles.middleSection}>
        <Text style={styles.enterrecipientText}>Enter recipient details</Text>
        
        {/* Phone Number Input */}
        <View style={styles.baccContainer}>
          <View style={styles.baccInnerContainer}>
            <Text style={styles.bacc}>Bank account number</Text>
            <View style={styles.baccinputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="transparent"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
        </View>

        {/* IFSC Code Input */}
        <View style={styles.ifscContainer}>
          <View style={styles.ifscInnerContainer}>
            <Text style={styles.ifsc}>IFSC code</Text>
            <View style={styles.ifscinputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="transparent"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search for IFSC</Text>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue </Text>
        </TouchableOpacity>
        
        {/* Security Information */}
        <Text style={styles.securityText}>This information will be securely saved as {'\n'}per Google Pay Terms of Service and{'\n'}Privacy policy</Text>
      </View>

      {/* Recent Bank Transfers Section */}
      <View style={styles.recentTransfersSection}>
        <Text style={styles.recentTransfersTitle}>Recent Bank Transfers</Text>
        <View style={styles.recentTransfersContainer}>
          <View style={styles.transferItem}>
            <Image
              source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png' }}
              style={styles.transferImage1}
            />
            <Text style={styles.transferText}>1990</Text>
          </View>
          <View style={styles.transferItem}>
            <Image
              source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-2.png' }}
              style={styles.transferImage2}
            />
            <Text style={styles.transferText}>2000</Text>
          </View>
          <View style={styles.transferItem}>
            <Image
              source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-7.png' }}
              style={styles.transferImage3}
            />
            <Text style={styles.transferText}>XXX</Text>
          </View>
          <View style={styles.transferItem}>
            <Image
              source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-6.png' }}
              style={styles.transferImage4}
            />
            <Text style={styles.transferText}>YYY</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
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
  leftarrowicon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    left: 10,
  },
  dotsButton: {
    padding: 10,
  },
  dotsIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  middleSection: {
    alignItems: 'center',
    marginTop: 30,
  },
  enterrecipientText: {
    fontSize: 26,
    color: '#FFF',
    marginBottom: 10,
  },
  baccContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '93%',
    paddingVertical: 10,
  },
  baccInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 19,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#222',
    width: '90%',
  },
  bacc: {
    fontSize: 16,
    color: '#FFF',
    left: -10,
  },
  baccinputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    fontSize: 20,
    color: '#FFF',
    backgroundColor: 'transparent',
    padding: 0,
    marginLeft: 10,
    flex: 1,
  },
  ifscContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '93%',
  },
  ifscInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 19,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#222',
    width: '90%',
  },
  ifsc: {
    fontSize: 16,
    color: '#FFF',
    left: -10,
  },
  ifscinputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchButton: {
    backgroundColor: '#222',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 30,
    top: -57,
    left: 60,
  },
  searchButtonText: {
    color: '#79b2f2',
    fontSize: 15,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#333',
    paddingVertical: 9,
    paddingHorizontal: 110,
    borderRadius: 30,
    top: -20,
  },
  continueButtonText: {
    color: '#999',
    fontSize: 15,
  },
  securityText: {
    fontSize: 14,
    color: '#BBB',
    marginTop: 10,
    textAlign: 'center',
  },
  recentTransfersSection: {
    alignItems: 'center',
    marginTop: 40,
    width: '100%',
  },
  recentTransfersTitle: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 20,
  },
  recentTransfersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  transferItem: {
    alignItems: 'center',
  },
  transferImage1: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  transferImage2: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  transferImage3: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  transferImage4: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  transferText: {
    color: '#FFF',
    marginTop: 5,
  },
});

export default BankTransferScreen;
