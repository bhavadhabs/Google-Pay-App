import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ExclusiveOffersScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Top Image Section */}
        <View style={styles.topImageContainer}>
          <Image
            source={{ uri: 'https://img.freepik.com/free-vector/remittance-money-transfer-relatives-flat-illustration_74855-16920.jpg?t=st=1732674753~exp=1732678353~hmac=f16d5f57445e70b3ec74c79e2327778d0e21563832302e69199850834ce8123b&w=996' }}
            style={styles.topImage}
          />
        </View>

        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconWrapper}>
            <Image
              source={{ uri: 'https://static.thenounproject.com/png/12934-200.png' }}
              style={styles.leftarrowicon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Exclusive Offers</Text>
          <TouchableOpacity style={styles.dotsContainer}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' }}
              style={styles.dotsicon}
            />
          </TouchableOpacity>
        </View>

        {/* Offers Section */}
        <View style={styles.offersContainer}>
          {/* Offer 1 */}
          <View style={styles.offerCard}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARdNeDJvG3KcANRtHDsW0uFFnHWwLpKtNlg&s' }}
              style={styles.offerImage1}
            />
            <View style={styles.offerDetails}>
              <Text style={styles.offerTitle}>Power Up</Text>
              <Text style={styles.offerSubtitle}>
                Earn up to ₹40 cashback offer with Sting
              </Text>
              <TouchableOpacity>
                <Text style={styles.getOfferButton}>Get offer</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Offer 2 */}
          <View style={styles.offerCard}>
            <Image
              source={{ uri: 'https://yt3.googleusercontent.com/ytc/AIdro_lNOtQjADN9-gKArduPnYGHk0hvIkLbx3VGoZyiJbiZgg=s900-c-k-c0x00ffffff-no-rj' }}
              style={styles.offerImage2}
            />
            <View style={styles.offerDetails}>
              <Text style={styles.offerTitle}>Snack Time</Text>
              <Text style={styles.offerSubtitle}>
                Earn 3 cashback offers on 5 Star and Fuse chocolates
              </Text>
              <TouchableOpacity>
                <Text style={styles.getOfferButton}>Get offer</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Offer 3 */}
          <View style={styles.offerCard}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7V5vIgyA6QIgPetBAk-V4JVgNFW6reDE1Jy1nIIg_nysAnzl6tTnqlTqRFPaQUf_PCg&usqp=CAU' }}
              style={styles.offerImage3}
            />
            <View style={styles.offerDetails}>
              <Text style={styles.offerTitle}>Have a Break</Text>
              <Text style={styles.offerSubtitle}>
                Have a KitKat and get a cashback offer
              </Text>
              <TouchableOpacity>
                <Text style={styles.getOfferButton}>Get offer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000', // Black background for the ScrollView
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
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
  leftarrowicon: {
    width: 20,
    height: 20,
    tintColor: '#000',
    top: -150,
    left: -5,
  },
  dotsContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    top: -155,
    left: 8,
  },
  dotsicon: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
  topImageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  topImage: {
    width: '120%',
    height: 150,
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '400',
    color: '#FFF',
    top: 20,
    left: -88,
  },
  offersContainer: {
    marginTop: 12,
  },
  offerCard: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    alignItems: 'center',
  },
  offerImage1: {
    width: 90,
    height: 120,
    borderRadius: 65,
    marginRight: 16,
  },
  offerImage2: {
    width: 90,
    height: 120,
    borderRadius: 65,
    marginRight: 16,
  },
  offerImage3: {
    width: 90,
    height: 120,
    borderRadius: 65,
    marginRight: 16,
  },
  offerDetails: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  offerSubtitle: {
    fontSize: 14,
    color: '#AAA',
    marginVertical: 4,
  },
  getOfferButton: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00BFFF',
  },
});

export default ExclusiveOffersScreen;
