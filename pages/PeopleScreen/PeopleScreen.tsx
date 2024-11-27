import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const PeopleScreen = () => {
  const navigation = useNavigation();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContent}
      enableAutomaticScroll
      keyboardShouldPersistTaps="handled"
    >
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/023/465/696/original/leftwards-arrow-dark-mode-glyph-ui-icon-setting-menu-selection-mode-user-interface-design-white-silhouette-symbol-on-black-space-solid-pictogram-for-web-mobile-isolated-illustration-vector.jpg' }}
            style={styles.leftarrowicon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Pay anyone on UPI"
          placeholderTextColor="#999"
        />
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        <Image
          source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/social-security-benefit-illustration-download-in-svg-png-gif-file-formats--happy-disabled-person-retirement-insurance-elderly-couple-pack-people-illustrations-6247973.png' }}
          style={styles.middleImage}
        />
        <Text style={styles.findFriendsText}>Find Friends on Google Pay</Text>
        <TouchableOpacity style={styles.syncButton}>
          <Text style={styles.syncButtonText}>Sync Contact</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  searchBarContainer: {
    backgroundColor: '#222',
    paddingVertical: -6,
    width: 300,
    paddingHorizontal: 5,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    top: -330,
    left: 18,
  },
  leftarrowicon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    borderRadius: 30,
    left: 5,
  },
  searchBar: {
    flexGrow: 1,
    fontSize: 16,
    color: '#222',
    marginLeft: 10,
    resizeMode: 'contain',
  },
  middleSection: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: Dimensions.get('window').height * .10, // Adjust to position it correctly
    left: 10,
  },
  middleSectionWithKeyboard: {
    top: Dimensions.get('window').height * .10,
  },
  middleImage: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  findFriendsText: {
    fontSize: 18,
    marginVertical: 16,
    color: '#FFF',
    top: -80,
  },
  syncButton: {
    backgroundColor: '#222',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 30,
    width: 160,
    borderColor: '#666',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    top: -80,
  },
  syncButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    left: 10,
    top: -2,
  },
});

export default PeopleScreen;
