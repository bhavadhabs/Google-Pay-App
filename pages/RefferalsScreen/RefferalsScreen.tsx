import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const InviteFriendsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={{ uri: 'https://static.thenounproject.com/png/12934-200.png' }} // Left arrow icon URI
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' }} // Three dots icon URI
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Invite friends to Google Pay</Text>
        <Text style={styles.subtitle}>
          Invite friends to Google Pay and get ₹200 when your friends send their first payment. They get ₹21!
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See Offer</Text>
        </TouchableOpacity>

        {/* User Image & Profile */}
        <View style={styles.userProfile}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/5722/5722979.png?ga=GA1.1.1926264835.1732262597' }} // Profile picture image URI
            style={styles.arrowImage}
          />
          <Text style={styles.johnName}>John Doe{'\n'} pp1fcL</Text>
        </View>

        {/* User Image & Profile */}
        <View style={styles.userProfile}>
          <Image
            source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png' }} // Profile picture image URI
            style={styles.userImage}
          />
          <Text style={styles.userName}>Stefan{'\n'}+91 12345678</Text>
        </View>

        {/* User Image & Profile */}
        <View style={styles.userProfile}>
          <Image
            source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-2.png' }} // Profile picture image URI
            style={styles.userImage}
          />
          <Text style={styles.userName}>Caroline{'\n'}+91 12345678</Text>
        </View>
        
        {/* User Image & Profile */}
        <View style={styles.userProfile}>
          <Image
            source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-3.png' }} // Profile picture image URI
            style={styles.userImage}
          />
          <Text style={styles.userName}>Hendry{'\n'}+91 12345678</Text>
        </View>

        {/* User Image & Profile */}
        <View style={styles.userProfile}>
          <Image
            source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-4.png' }} // Profile picture image URI
            style={styles.userImage}
          />
          <Text style={styles.userName}>Anna{'\n'}+91 12345678</Text>
        </View>

        {/* User Image & Profile */}
        <View style={styles.userProfile}>
          <Image
            source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-6.png' }} // Profile picture image URI
            style={styles.userImage}
          />
          <Text style={styles.userName}>Annie{'\n'}+91 12345678</Text>
        </View>

        {/* User Image & Profile */}
        <View style={styles.userProfile}>
          <Image
            source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-7.png' }} // Profile picture image URI
            style={styles.userImage}
          />
          <Text style={styles.userName}>David{'\n'}+91 12345678</Text>
        </View>

        {/* User Image & Profile */}
        <View style={styles.userProfile}>
          <Image
            source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-8.png' }} // Profile picture image URI
            style={styles.userImage}
          />
          <Text style={styles.userName}>Marcel{'\n'}+91 12345678</Text>
        </View>

        {/* Share Button */}
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.sharebuttonText}>Share</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.invitebuttonText}>Invite</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.invitebuttonText}>Invite</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.invitebuttonText}>Invite</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.invitebuttonText}>Invite</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.invitebuttonText}>Invite</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.invitebuttonText}>Invite</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.invitebuttonText}>Invite</Text>
        </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconWrapper: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFF',
  },
  content: {
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '400',
    color: '#FFF',
    marginBottom: 10,
    left: 18,
    top: -18,
  },
  subtitle: {
    fontSize: 17,
    color: '#CCC',
    marginBottom: 20,
    left: 20,
    top: -19,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#004d80',
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 45,
    width: '30%',
    top: -20,
    left: 20,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#FFF',
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    top: -20,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 16,
    tintColor: '#BBB',
    left: 10,
    top: 38,
  },
  arrowImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 16,
    tintColor: '#BBB',
    left: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFF',
    left: 20,
    top: 38,
  },
  johnName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFF',
    left: 20,
    top: 6,
  },
  shareButton: {
    backgroundColor: '#004d80',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 45,
    alignItems: 'center',
    marginBottom: 20,
    width: '23%',
    left: 264,
    top: -500,
  },
  sharebuttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFF',
  },
  invitebuttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFF',
  },
  moreOffers: {
    marginTop: 20,
  },
  offerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#111',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  inviteButton: {
    backgroundColor: '#004d80',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 45,
    alignItems: 'center',
    marginBottom: 20,
    width: '23%',
    left: 264,
    top: -460,
  },
});

export default InviteFriendsScreen;
