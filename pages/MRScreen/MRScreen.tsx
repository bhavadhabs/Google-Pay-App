import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const MobileRechargeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile recharge</Text>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-2.png',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.phoneNumber}>+91 12345678</Text>
      </View>
      <TextInput style={styles.input} placeholder="Nickname" placeholderTextColor="#aaa" />
      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>Jio Prepaid - All Circles</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        By continuing, you agree to the{' '}
        <Text style={styles.termsLink}>Terms of Service</Text>.
      </Text>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 16 },
  title: { color: '#fff', fontSize: 18, marginBottom: 20 },
  profileContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  phoneNumber: { color: '#fff', fontSize: 16 },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  dropdownText: { color: '#fff', fontSize: 16 },
  termsText: { color: '#fff', fontSize: 12, marginBottom: 20 },
  termsLink: { color: '#00f' },
  continueButton: { backgroundColor: '#4A90E2', padding: 15, borderRadius: 5 },
  continueText: { color: '#fff', textAlign: 'center', fontSize: 16 },
});

export default MobileRechargeScreen;
