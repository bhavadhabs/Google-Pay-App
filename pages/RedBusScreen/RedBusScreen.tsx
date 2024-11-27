import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const RedBusScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/8637/8637512.png?ga=GA1.1.2104870483.1730698714' }} // Replace with the actual URI for the close icon
            style={styles.closeicon}
          />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://media.licdn.com/dms/image/D4D12AQGWd9kBYwYG-g/article-cover_image-shrink_600_2000/0/1689525229752?e=2147483647&v=beta&t=1bXFd51Sf39Q-VP9pqWgS5tnORUY_4LCVmq_U0aR8jk' }} // Replace with the redBus logo URI
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>redBus</Text>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' }} // Replace with actual URI for menu icon
            style={styles.menuicon}
          />
        </TouchableOpacity>
      </View>

      {/* Subtitle */}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>
          India's No. 1 bus booking site
        </Text>
        <Text style={styles.subtext}>
          Best Deals & Exclusive offers
        </Text>
      </View>

      {/* Search Bus Section */}
      <View style={styles.searchSection}>
        <View style={styles.inputContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/2050/2050411.png?ga=GA1.1.2104870483.1730698714' }} // Replace with the bus icon URI
            style={styles.busIcon}
          />
          <Text style={styles.inputLabel}>FROM  </Text>
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/2050/2050500.png?ga=GA1.1.2104870483.1730698714' }} // Replace with the bus icon URI
            style={styles.busIcon}
          />
          <Text style={styles.inputLabel}>TO  </Text>
        </View>
        <View style={styles.dateContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/8299/8299764.png?ga=GA1.1.2104870483.1730698714' }} // Replace with the bus icon URI
            style={styles.dateIcon}
          />
          <Text style={styles.inputLabel3}>4 NOV   </Text>
          <View style={styles.dateOptions}>
            <Text style={styles.dateText}>Today</Text>
            <Text style={styles.dateText}>Tomorrow</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>SEARCH BUSES</Text>
        </TouchableOpacity>
      </View>

      {/* Trending Offers Section */}
      <View style={styles.offersSection}>
        <Text style={styles.trendingOffersTitle}>TRENDING OFFERS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendingOffersScroll}>
          {/* Offer Card 1 */}
          <View style={[styles.offerCard, styles.offerCardBlue]}>
            <Text style={styles.offerBadge1}>  BUS  </Text>
            <Image
              source={{ uri: 'https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png' }}
              style={styles.offerImage1}
            />
            <Text style={styles.offerText1}>Save up to Rs 250 on {'\n'}bus tickets</Text>
            <Text style={styles.offerValidity1}>Valid till 30 Nov</Text>
            <View style={styles.offerCodeContainer1}>
              <Text style={styles.offerCodeText1}>  FIRST  </Text>
            </View>
            <Image
              source={{ uri: 'https://cdn-icons-png.freepik.com/512/17089/17089304.png?ga=GA1.1.2104870483.1730698714' }}
              style={styles.copy1}
            />
          </View>

          {/* Offer Card 2 */}
          <View style={[styles.offerCard, styles.offerCardGreen]}>
            <Text style={styles.offerBadge2}>  BUS   </Text>
            <Image
              source={{ uri: 'https://st.redbus.in/Images/INDOFFER/80X80/BUS300.png' }}
              style={styles.offerImage1}
            />
            <Text style={styles.offerText2}>Save up to Rs 300 on Karnataka, Tamil</Text>
            <Text style={styles.offerValidity2}>Valid till 30 Nov</Text>
            <View style={styles.offerCodeContainer2}>
              <Text style={styles.offerCodeText2}>CASH300</Text>
            </View>
            <Image
              source={{ uri: 'https://cdn-icons-png.freepik.com/512/17089/17089304.png?ga=GA1.1.2104870483.1730698714' }}
              style={styles.copy2}
            />
          </View>

          {/* Offer Card 3 */}
          <View style={[styles.offerCard, styles.offerCardRed]}>
            <Text style={styles.offerBadge3}>BUS  </Text>
            <Image
              source={{ uri: 'https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png' }}
              style={styles.offerImage1}
            />
            <Text style={styles.offerText3}>Save up to Rs 300 on {'\n'}AP, TS routes</Text>
            <Text style={styles.offerValidity3}>Valid till 30 Nov</Text>
            <View style={styles.offerCodeContainer3}>
              <Text style={styles.offerCodeText3}>SUPERHIT</Text>
            </View>
            <Image
              source={{ uri: 'https://cdn-icons-png.freepik.com/512/17089/17089304.png?ga=GA1.1.2104870483.1730698714' }}
              style={styles.copy3}
            />
            {/* Government Buses Section */}
            <View style={styles.governmentBusesSection}>
              <Text style={styles.sectionTitle}>GOVERNMENT BUSES</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.busesScroll}>
                {/* Kerala RTC Card */}
                <View style={styles.busCard}>
                  <Image
                    source={{ uri: 'https://files.oaiusercontent.com/file-e0X73pnWwdPx2deitabOOeN2?se=2024-11-09T10%3A07%3A54Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dimage.png&sig=L5oDa4%2BBWzSg0fbuoRvLKCrI%2BvwUcS9hywnRwIG8dSI%3D' }}
                    style={styles.busImage}
                  />
                  <Text style={styles.busName}>KERALA RTC</Text>
                  <Text style={styles.busRating}>⭐ 3.85</Text>
                  <Text style={styles.busDetails}>940 services including Swift, AC MultiAxle and more</Text>
                  <Text style={styles.partnerInfo}>Official booking partner of KSRTC</Text>
                </View>

                {/* APSRTC Card */}
                <View style={styles.busCard}>
                  <Image
                    source={{ uri: 'https://path_to_APSRTC_image' }}
                    style={styles.busImage}
                  />
                  <Text style={styles.busName}>APSRTC</Text>
                  <Text style={styles.busRating}>⭐ 3.85</Text>
                  <Text style={styles.busDetails}>1539 services including Garuda, Garuda Plus and more</Text>
                  <Text style={styles.partnerInfo}>Official booking partner of APSRTC</Text>
                </View>

                {/* TSRTC Card */}
                <View style={styles.busCard}>
                  <Image
                    source={{ uri: 'https://path_to_TSRTC_image' }}
                    style={styles.busImage}
                  />
                  <Text style={styles.busName}>TSRTC</Text>
                  <Text style={styles.busRating}>⭐ 3.85</Text>
                  <Text style={styles.busDetails}>1458 services including Rajadhani, Vajra and more</Text>
                  <Text style={styles.partnerInfo}>Official booking partner of TSRTC</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D32F2F', // redBus header color
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  closeButton: {
    padding: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 8,
    backgroundColor: '#000',
    borderBottomWidth: 6,
    borderRadius: 20,
    left: -50,
    shadowColor: '#000',
  },
  headerTitle: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    left: -50,
  },
  menuButton: {
    padding: 10,
  },
  menuicon: {
    width: 20,
    height: 20,
    tintColor: '#FFF'
  },
  closeicon: {
    width: 13,
    height: 13,
    tintColor: '#FFF'
  },
  subtitleContainer: {
    backgroundColor: '#FFF8E1',
    paddingVertical: 10,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  subtext: {
    fontSize: 14,
    color: '#757575',
  },
  searchSection: {
    backgroundColor: '#FFF',
    margin: 15,
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  dateIcon: {
    width: 20,
    height: 20,
    tintColor: '#757575',
    left: 2,
  },
  busIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#757575',
  },
  inputLabel: {
    fontSize: 16,
    color: '#757575',
  },
  inputLabel3: {
    fontSize: 16,
    color: '#757575',
    left: -10,
  },
  dateOptions: {
    flexDirection: 'row',
  },
  dateText: {
    fontSize: 16,
    color: '#1E88E5',
    marginLeft: 15,
  },
  searchButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 13,
  },
  searchButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  offersSection: {
    padding: 15,
  },
  offersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  viewOffers: {
    fontSize: 14,
    color: '#1E88E5',
    alignSelf: 'flex-end',
    marginTop: -18,
    marginBottom: 10,
  },
  trendingOffersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  trendingOffersScroll: {
    flexDirection: 'row',
  },
  offerCard: {
    width: 200,
    height: 120,
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  offerCardBlue: {
    backgroundColor: '#1976D2',
  },
  offerCardGreen: {
    backgroundColor: '#388E3C',
  },
  offerCardRed: {
    backgroundColor: '#D32F2F',
  },
  offerBadge1: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFF',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
    fontSize: 8,
    alignSelf: 'flex-start',
    marginBottom: 5,
    left: 50,
  },
  offerText1: {
    fontSize: 11,
    color: '#FFF',
    fontFamily: 'Montserrat',
    fontWeight: '700',
    marginBottom: 5,
    top: -54,
    left: 52,
  },
  offerValidity1: {
    fontSize: 9,
    fontFamily: 'Montserrat',
    color: '#FFF',
    marginBottom: 5,
    top: -56,
    left: 53,
  },
  offerImage1: {
    width: 50,
    height: 50,
    borderRadius: 40,
    top: -15,
    left: -5,
  },
  offerCodeContainer1: {
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  offerCodeText1: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFF',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 8,
    fontSize: 8,
    marginBottom: 5,
    top: -60,
    left: 43,
  },
  copy1: {
    width: 15,
    height: 15,
    top: -87,
    left: 104,
    tintColor: '#FFF',
  },
  offerBadge2: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFF',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
    fontSize: 8,
    alignSelf: 'flex-start',
    marginBottom: 5,
    left: 50,
  },
  offerText2: {
    fontSize: 11,
    color: '#FFF',
    fontFamily: 'Montserrat',
    fontWeight: '700',
    marginBottom: 5,
    top: -54,
    left: 52,
  },
  offerValidity2: {
    fontSize: 9,
    fontFamily: 'Montserrat',
    color: '#FFF',
    marginBottom: 5,
    top: -56,
    left: 53,
  },
  offerImage2: {
    width: 50,
    height: 50,
    borderRadius: 40,
    top: -15,
    left: -5,
  },
  offerCodeContainer2: {
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  offerCodeText2: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFF',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 8,
    fontSize: 8,
    marginBottom: 5,
    top: -60,
    left: 43,
  },
  copy2: {
    width: 15,
    height: 15,
    top: -87,
    left: 104,
    tintColor: '#FFF',
  },
  offerBadge3: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFF',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
    fontSize: 8,
    alignSelf: 'flex-start',
    marginBottom: 5,
    left: 50,
  },
  offerText3: {
    fontSize: 11,
    color: '#FFF',
    fontFamily: 'Montserrat',
    fontWeight: '700',
    marginBottom: 5,
    top: -54,
    left: 52,
  },
  offerValidity3: {
    fontSize: 9,
    fontFamily: 'Montserrat',
    color: '#FFF',
    marginBottom: 5,
    top: -56,
    left: 53,
  },
  offerImage3: {
    width: 50,
    height: 50,
    borderRadius: 40,
    top: -15,
    left: -5,
  },
  offerCodeContainer3: {
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  offerCodeText3: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFF',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 8,
    fontSize: 8,
    marginBottom: 5,
    top: -60,
    left: 43,
  },
  copy3: {
    width: 15,
    height: 15,
    top: -87,
    left: 104,
    tintColor: '#FFF',
  },
  governmentBusesSection: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  busesScroll: {
    flexDirection: 'row',
  },
  busCard: {
    width: 220,
    padding: 12,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  busImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 8,
  },
  busName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  busRating: {
    fontSize: 14,
    color: '#4CAF50',
    marginBottom: 4,
  },
  busDetails: {
    fontSize: 12,
    color: '#555',
    marginBottom: 6,
  },
  partnerInfo: {
    fontSize: 10,
    color: '#888',
  },
});

export default RedBusScreen;
