import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const RewardsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Top image */}

      {/* Top Section */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/271/271220.png', // Back arrow icon
            }}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.totalRewards}>₹0 total rewards</Text>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png', // Dots icon
            }}
            style={styles.dotsIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        <Text style={[styles.stepText, styles.activeStep]}>Start</Text>
        <Text style={styles.stepBox}>1</Text>
        <Text style={styles.stepBox}>2</Text>
        <Text style={styles.stepBox}>3</Text>
        <Text style={styles.stepBox}>4</Text>
      </View>

      {/* Sponsored Card */}
      <View style={styles.sponsoredCard}>
        <Text style={styles.sponsoredText}>Sponsored </Text>
        <Text style={styles.cardTitle}>Cashback ka king{'\n'}Sting®</Text>
        <Text style={styles.cardSubtitle}>Buy now</Text>
        <Image
          source={{
            uri: 'https://worldbranddesign.com/wp-content/uploads/2023/11/3-Sting-Red_Cambodia-Can-min.jpg', // Example image
          }}
          style={styles.sponsoredImage}
        />
      </View>
      {/* three dots */}
      <TouchableOpacity>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png', // Dots icon
            }}
            style={styles.threedotsIcon}
          />
        </TouchableOpacity>

      {/* Your Rewards Section */}
      <Text style={styles.rewardsHeader}>Your rewards</Text>
      <View style={styles.rewardCard}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.freepik.com/512/9198/9198432.png?ga=GA1.1.1926264835.1732262597', // Example reward card image
          }}
          style={styles.rewardImage}
        />
        <Text style={styles.rewardTimeLeft}>1d left</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  backArrow: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
  },
  totalRewards: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  dotsIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
  },
  threedotsIcon: {
    width: 10,
    height: 10,
    tintColor: '#FFF',
    top: -111,
    left: 75,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  stepText: {
    color: '#FFF',
    fontSize: 14,
  },
  activeStep: {
    fontWeight: 'bold',
    color: '#6C99CB',
  },
  stepBox: {
    backgroundColor: '#EEE',
    padding: 5,
    borderRadius: 10,
    width: 30,
    textAlign: 'center',
    color: '#222',
  },
  sponsoredCard: {
    backgroundColor: '#4E342E',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 10,
    width: '100%',
    height: '25%',
  },
  sponsoredText: {
    color: '#FFF',
    fontSize: 12,
    marginBottom: 5,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#FF5722',
    fontSize: 14,
    marginVertical: 5,
    top: 6,
  },
  sponsoredImage: {
    width: 70,
    height: 90,
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    top: -71,
    left: 16,
    borderRadius: 19,
  },
  rewardsHeader: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
    top: 30,
    left: 5,
  },
  rewardCard: {
    backgroundColor: '#F57F17',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    top: 30,
    width: '45%',
    height: '35%',
    left: 5,
  },
  rewardImage: {
    width: 80,
    height: 80,
  },
  rewardTimeLeft: {
    color: '#000',
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 5,
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default RewardsScreen;
