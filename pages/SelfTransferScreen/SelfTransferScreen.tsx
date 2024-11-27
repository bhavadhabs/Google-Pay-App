import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SelfTransferScreen: undefined;
  SelectBankScreen: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'SelfTransferScreen'>;

const SelfTransferScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [isAccountListVisible, setAccountListVisible] = useState(true);
  const [isAccountToListVisible, setAccountToListVisible] = useState(true);
  const [selectedAccountFrom, setSelectedAccountFrom] = useState<string | null>(null);
  const [selectedAccountTo, setSelectedAccountTo] = useState<string | null>(null);

  const handleAddBankAccount = () => {
    navigation.navigate('SelectBankScreen');
  };

  const toggleAccountList = () => {
    setAccountListVisible(!isAccountListVisible);
  };

  const toggleAccountToList = () => {
    setAccountToListVisible(!isAccountToListVisible);
  };

  const bankAccounts = [
    { id: '1', name: 'ICICI Bank', accountType: 'Savings account', logoUri: 'https://play-lh.googleusercontent.com/3k0f2yWl15mhkyltVQoqwmfRcm6ywTDYOttNHusElScrqjxYHLK82oVnjt3wQJQyPw' },
    { id: '2', name: 'HDFC Bank', accountType: 'Savings account', logoUri: 'https://play-lh.googleusercontent.com/POGVZhNvSh05yA01H2VTlElv0Mw6r4R7hj9w7DaOvJVgiGoi0Fcawi02yITkyMT1zwqO' },
  ];

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

      {/* Self Transfer Title */}
      <Text style={styles.TitleText}>Self Transfer</Text>

      {/* Select Account to Transfer From */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select bank account to transfer from</Text>
        <TouchableOpacity onPress={toggleAccountList} style={styles.toggleIcon}>
          <Image
            source={{
              uri: isAccountListVisible
                ? 'https://cdn-icons-png.freepik.com/512/484/484020.png?ga=GA1.1.2104870483.1730698714'
                : 'https://cdn-icons-png.freepik.com/512/484/484020.png?ga=GA1.1.2104870483.1730698714',
            }}
            style={styles.toggleImage}
          />
        </TouchableOpacity>
        {isAccountListVisible && (
          <FlatList
            data={bankAccounts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.accountItem}
                onPress={() => setSelectedAccountFrom(item.id)}
              >
                <Image source={{ uri: item.logoUri }} style={styles.bankIcon} />
                <View>
                  <Text style={styles.accountName}>{item.name}</Text>
                  <Text style={styles.accountType}>{item.accountType}</Text>
                </View>
                <Image
                  source={{
                    uri:
                      selectedAccountFrom === item.id
                        ? 'https://cdn-icons-png.freepik.com/512/13146/13146934.png?ga=GA1.1.2104870483.1730698714'
                        : 'https://cdn-icons-png.freepik.com/512/13146/13146934.png?ga=GA1.1.2104870483.1730698714',
                  }}
                  style={styles.radioIcon}
                />
              </TouchableOpacity>
            )}
          />
        )}
        <TouchableOpacity style={styles.addBankAccountButton} onPress={handleAddBankAccount}>
          <Image
            source={{ uri: 'https://example.com/add_icon.png' }}
            style={styles.addBankIcon}
          />
          <Text style={styles.addBankText}>+ Add bank account</Text>
        </TouchableOpacity>
      </View>

      {/* Select Account to Transfer To */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select bank account to transfer to</Text>
        <TouchableOpacity onPress={toggleAccountToList} style={styles.toggleIcon}>
          <Image
            source={{
              uri: isAccountToListVisible
                ? 'https://cdn-icons-png.freepik.com/512/484/484017.png?ga=GA1.1.2104870483.1730698714'
                : 'https://cdn-icons-png.freepik.com/512/484/484017.png?ga=GA1.1.2104870483.1730698714',
            }}
            style={styles.toggleImage}
          />
        </TouchableOpacity>
        {isAccountToListVisible && (
          <FlatList
            data={bankAccounts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.accountItem}
                onPress={() => setSelectedAccountTo(item.id)}
              >
                <Image source={{ uri: item.logoUri }} style={styles.bankIcon} />
                <View>
                  <Text style={styles.accountName}>{item.name}</Text>
                  <Text style={styles.accountType}>{item.accountType}</Text>
                </View>
                <Image
                  source={{
                    uri:
                      selectedAccountTo === item.id
                        ? 'https://cdn-icons-png.freepik.com/512/13146/13146934.png?ga=GA1.1.2104870483.1730698714'
                        : 'https://cdn-icons-png.freepik.com/512/13146/13146934.png?ga=GA1.1.2104870483.1730698714',
                  }}
                  style={styles.radioIcon}
                />
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingHorizontal: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  leftarrowicon: {
    width: 25,
    height: 25,
    tintColor: '#999',
  },
  dotsButton: {
    padding: 10,
  },
  dotsIcon: {
    width: 25,
    height: 25,
    tintColor: '#999',
  },
  addBankIcon: {
    width: 20,
    height: 20,
    marginRight: 8, // Space between the icon and text
  },  
  TitleText: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 20,
    left: 10,
    top: -20,
  },
  section: {
    marginVertical: 10,
    top: -20,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#FFF',
    marginBottom: 10,
    left: 10,
  },
  toggleIcon: {
    width: 10,
    height: 10,
    position: 'absolute',
    right: 12,
    top: 5,
  },
  toggleImage: {
    width: 10,
    height: 10,
    tintColor: '#FFF',
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 10,
  },
  bankIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  accountName: {
    color: '#FFF',
    fontSize: 16,
  },
  accountType: {
    color: '#AAA',
    fontSize: 12,
  },
  radioIcon: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
    tintColor: '#5e89ed',
  },
  addBankAccountButton: {
    alignItems: 'center',
    marginVertical: 15,
  },
  addBankText: {
    color: '#759af0',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#5e89ed',
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 'auto',
    top: -14,
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SelfTransferScreen;
