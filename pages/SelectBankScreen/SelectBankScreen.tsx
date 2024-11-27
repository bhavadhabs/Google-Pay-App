import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Bank {
  name: string;
  imageUri: string;
}

const banks: Bank[] = [
  { name: 'Axis Bank', imageUri: 'https://companieslogo.com/img/orig/AXISBANK.BO-8f59e95b.png?t\u003d1672905040' },
  { name: 'American Bank', imageUri: 'https://via.placeholder.com/50' },
  { name: 'Bank of America', imageUri: 'https://via.placeholder.com/50' },
  { name: 'Citibank', imageUri: 'https://via.placeholder.com/50' },
  { name: 'Chase Bank', imageUri: 'https://via.placeholder.com/50' },
  { name: 'Deutsche Bank', imageUri: 'https://via.placeholder.com/50' },
  // Add more bank data here
];

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const SelectBankScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLetter, setSelectedLetter] = useState<string>('');

  // Filter banks based on search query or selected letter
  const filteredBanks = banks.filter(bank => {
    if (selectedLetter) {
      return bank.name.startsWith(selectedLetter);
    }
    return bank.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Type the 'item' as a 'Bank'
  const renderBank = ({ item }: { item: Bank }) => (
    <View style={styles.bankItem}>
      <Image source={{ uri: item.imageUri }} style={styles.bankIcon} />
      <Text style={styles.bankText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Bar with Left Arrow, Question Mark, and 3 Dots */}
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search banks"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/14736/14736868.png?ga=GA1.2.948396698.1726851555' }}
            style={styles.backarrowicon}
          />
        </TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/standard-general-linear-icon/help-129.png' }}
            style={styles.searchIcon}
          />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' }}
              style={styles.dotsIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Select Your Bank Header */}
      <Text style={styles.selectBankText}>Select your bank</Text>

      {/* Bank Image Section */}
      <View style={styles.AxisBankSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://assets.finsify.com/services/axisbank-logo.png' }}
            style={styles.icon}
          />
          <Text style={styles.AxisBankText}>Axis{'\n'}Bank</Text>
        </TouchableOpacity>
      </View>

      {/* All Banks Text */}
      <Text style={styles.allBanksText}>All Banks</Text>

      {/* Bank List */}
      <FlatList
        data={filteredBanks}
        renderItem={renderBank}
        keyExtractor={(item) => item.name}
        style={styles.bankList}
      />

      {/* A to Z Selection */}
      <View style={styles.alphabetList}>
        <ScrollView>
          {alphabet.map((letter) => (
            <TouchableOpacity key={letter} onPress={() => setSelectedLetter(letter)}>
              <Text style={[styles.alphabetLetter, selectedLetter === letter && styles.selectedLetter]}>
                {letter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
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
    paddingTop: 20,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  searchBar: {
    backgroundColor: '#222',
    paddingVertical: -6,
    width: 335,
    paddingHorizontal: 5,
    borderRadius: 33,
    borderColor: '#fff',
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    left: 20,
    top: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    left: 45,
  },
  backarrowicon:{
    width: 29,
    height: 29,
    tintColor: '#999',
    left: -220,
    top: -9,
  },
  searchIcon: {
    width: 27,
    height: 27,
    tintColor: '#999',
    top: -9,
    left: -4,
  },
  dotsIcon: {
    width: 25,
    height: 25,
    tintColor: '#888',
    top: -9,
    left: 9,
  },
  selectBankText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 15,
  },
  AxisBankSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  AxisBankText:{
    color: '#FFF',
    fontSize: 18,
  },
  bankImage: {
    width: 50,
    height: 50,
  },
  allBanksText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },
  bankList: {
    marginHorizontal: 15,
  },
  bankItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  bankIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  bankText: {
    fontSize: 16,
  },
  alphabetList: {
    position: 'absolute',
    right: 10,
    top: 100,
    bottom: 20,
    justifyContent: 'center',
  },
  alphabetLetter: {
    fontSize: 16,
    color: '#888',
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  selectedLetter: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default SelectBankScreen;