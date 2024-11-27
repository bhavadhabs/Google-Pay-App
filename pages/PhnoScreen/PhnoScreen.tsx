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
        <Text style={styles.enterPhoneText}>Enter a phone number   </Text>
        <Image
            source={{ uri: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png' }}
            style={styles.UPIcon}
          />
        <Text style={styles.payUPIText}> Pay any            app using phone {'\n'} number  </Text>

        <View style={styles.phoneContainer}>
          <View style={styles.phoneInnerContainer}>
            <Image
              source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/13/14/15/india-162319_640.png' }}
              style={styles.flagIcon}
            />
            <Text style={styles.countryCode}>+91  </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.placeholderText}>{phoneNumber ? '' : '00000 00000    '}</Text>
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

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://cdn-icons-png.freepik.com/512/12538/12538335.png?ga=GA1.1.1517299171.1726634454' }}
          style={styles.profileImage}
        />
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
    tintColor: '#999',
  },
  dotsButton: {
    padding: 10,
  },
  dotsIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: '#999',
  },
  middleSection: {
    alignItems: 'center',
    marginTop: 30,
  },
  enterPhoneText: {
    fontSize: 20,
    color: '#BBB',
    marginBottom: 10,
    top: -30,
    left: -45,
    paddingHorizontal: 10,
  },
  payUPIText: {
    fontSize: 16,
    color: '#BBB',
    marginBottom: 20,
    left: -12,
    top: -60,
  },
  UPIcon: {
    width: 55,
    height: 20,
    tintColor: '#BBB',
    top: -36,
    left: -46,
  },
  phoneContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    left: 10,
    top: -70,
  },
  phoneInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#759af0',
    backgroundColor: '#222',
    width: '86%',
    left: -15,
  },
  flagIcon: {
    width: 33,
    height: 33,
    resizeMode: 'contain',
    left: 0,
  },
  countryCode: {
    fontSize: 22,
    color: '#FFF',
    left: 9,
    top: -1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  placeholderText: {
    position: 'absolute',
    fontSize: 22,
    color: '#FFF',
    left: 3,
  },
  input: {
    fontSize: 10,
    color: '#FFF',
    backgroundColor: 'transparent',
    padding: 0,
    marginLeft: 10,
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  profileImage: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    top: -154,
    left: 147,
  },
  payFriendsImages: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    borderRadius: 20,
    left: -133,
    top: -90,
  },
  payFriendscontainer:{
    alignItems: 'center',
    marginVertical: 20,
  },
  payFriendsText: {
    fontSize: 15,
    color: '#FFF',
    top: -135,
  },
  syncButton: {
    backgroundColor: '#222',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 30,
    top: 5,
  },
  syncButtonText: {
    color: '#6C99CB',
    fontSize: 14,
    fontWeight: 'bold',
    top: -144,
    left: -55,
  },
});

export default PhnoScreen;
