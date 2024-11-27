import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PhnoScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Top Section with Arrow and 3 Dots */}
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

      {/* Middle Section with Title and Subtitle */}
      <View style={styles.middleSection}>
        <Text style={styles.enterPhoneText}>Enter a phone number</Text>
        <Image
            source={{ uri: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png' }}
            style={styles.UPIcon}
          />
        <Text style={styles.payUPIText}> Pay any              app using UPI ID{'\n'} or number</Text>
        <View style={styles.phoneContainer}>
          {/* Custom Placeholder */}
          {phoneNumber === '' && (
            <Text style={styles.placeholderText}>UPI ID or number  </Text>
          )}
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue  </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  leftArrowIcon: {
    width: 28,
    height: 28,
    tintColor: '#999',
    left: 7,
  },
  dotsButton: {
    padding: 10,
  },
  dotsIcon: {
    width: 24,
    height: 24,
    tintColor: '#999', // White color for dots icon
  },
  middleSection: {
    marginTop: 50,
    alignItems: 'center',
  },
  enterPhoneText: {
    fontSize: 22,
    color: '#AAA',
    fontWeight: '500',
    marginBottom: 8,
    left: -15,
    top: -40,
  },
  payUPIText: {
    fontSize: 14,
    color: '#AAA',
    textAlign: 'left', // Align text to the left
    marginBottom: 20,
    width: '100%', // Ensure text spans the full width
    top: -60,
    left: 12,
  },
  phoneContainer: {
    width: '95%',
    borderWidth: 1.4,
    borderColor: '#759af0',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    position: 'relative',
    top: -63,
  },
  UPIcon: {
    width: 56,
    height: 20,
    tintColor: '#888',
    top: -38,
    left: -54,
  },
  placeholderText: {
    position: 'absolute',
    left: 15,
    color: '#759af0',
    backgroundColor: '#000',
    top: -10,
    fontSize: 11,
  },
  input: {
    fontSize: 18,
    color: '#FFF',
    paddingLeft: 15,
    paddingVertical: 0,
  },
  continueButton: {
    backgroundColor: '#222',
    paddingVertical: 9,
    paddingHorizontal: 100,
    borderRadius: 30,
    top: 360,
  },
  continueButtonText: {
    color: '#777',
    fontSize: 15,
    left: -2,
  },
});

export default PhnoScreen;
