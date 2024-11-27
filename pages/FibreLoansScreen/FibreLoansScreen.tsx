import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const FiberLoansLoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [isRobotVerified, setRobotVerified] = useState(false);

  const handleGetStarted = () => {
    // Add your logic here, e.g., navigate to the next screen or validate the inputs
    console.log('Get Started button pressed');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://play-lh.googleusercontent.com/MFHG0TxFdTmauy-5Bjp1AUa9WzeySn490X_2kpYniErCmn4khU4ZCQxHX7iGJnH4iw',
        }}
        style={styles.logoImage}
      />
      <Text style={styles.title}>Verify Phone Number</Text>
      <Text style={styles.otp}>An OTP will be sent for verification</Text>

      <TextInput
        style={styles.input}
        placeholder="   Enter phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <View style={styles.robotContainer}>
        <View style={styles.robotCheckbox}>
          <CheckBox value={isRobotVerified} onValueChange={setRobotVerified} />
          <Text style={styles.robotText}>I'm not a robot</Text>
        </View>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/ReCAPTCHA_icon.svg/220px-ReCAPTCHA_icon.svg.png',
          }}
          style={styles.robotImage}
        />
      </View>

      <View style={styles.recaptchaFooter}>
        <Text style={styles.recaptchaText}>reCAPTCHA</Text>
        <Text style={styles.recaptchaLinks}>
          <Text style={styles.linkText}>Privacy</Text> .{' '}
          <Text style={styles.linkText}>Terms</Text>
        </Text>
      </View>

      <View style={styles.robotCheckbox2} />
      <CheckBox value={isSelected} onValueChange={setSelection} />
      <Text style={styles.consentText}>      By continuing, you agree to our privacy policies and T&C. You also
        authorize us to retrieve your credit report & communicate with you via
        phone, e-mails, WhatsApp, etc.
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.getButton} onPress={handleGetStarted}>
        <Text style={styles.getButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    top: 45,
  },
  logoImage: {
    width: 160,
    height: 160,
    tintColor: '#FFF',
    top: 75,
    left: 70,
  },
  otp: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    top: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
    color: '#000',
    width: '91%',
    left: 6,
    backgroundColor: '#333',
    top: 30,
  },
  robotContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'center',
    color: '#000',
    backgroundColor: '#222',
    width: '90%',
    height: '8%',
    top: 39,
    left: 5,
  },
  robotCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    left: -40,
    top: 10,
  },
  robotCheckbox2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    top: -40,
  },
  robotImage: {
    width: 20,
    height: 20,
    marginRight: 10,
    left: 30,
  },
  robotText: {
    fontSize: 16,
    color: '#fff',
    left: 10,
  },
  recaptchaFooter: {
    alignItems: 'center',
    marginBottom: 20,
  },
  recaptchaText: {
    fontSize: 4,
    color: '#808080',
    marginTop: 5,
    top: 12,
    left: 83,
  },
  recaptchaLinks: {
    fontSize: 3,
    color: '#808080',
    top: 12,
    left: 83,
  },
  linkText: {
    fontSize: 3,
    color: '#007AFF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  consentText: {
    flex: 1,
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
    top: -26,
  },
  getButton: {
    backgroundColor: '#444',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 45, // Rounded corners
    marginTop: 20,
    marginHorizontal: 10,
  },
  getButtonText: {
    color: '#FFF',
    fontSize: 19,
    fontWeight: 'bold',
  },
});

export default FiberLoansLoginPage;
