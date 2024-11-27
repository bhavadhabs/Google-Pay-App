import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PayBillsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://static.thenounproject.com/png/12934-200.png' }}
            style={styles.leftArrowIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png' }}
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>Search billers</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' }}
            style={styles.dotsIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <Text style={styles.promoTitle}>Gift card from top shopping brands!</Text>
          <Text style={styles.promoSubtitle}>
            Shop for yourself and your loved ones now on Google Pay
          </Text>
          <TouchableOpacity>
            <Text style={styles.buyNowText}>Buy now</Text>
          </TouchableOpacity>
        </View>

        {/* Checklist Section */}
        <View style={styles.checklistSection}>
          <Text style={styles.checklistTitle}>Your checklist (3)</Text>

          {/* Checklist Item 1 */}
          <View style={styles.checklistItem}>
            <Image
              source={{
                uri: 'https://play-lh.googleusercontent.com/mn_8bXJbRJdE4BJlBjx66MvpT5ZH4Re7vsf8wtVCVaoyo2cuZ80c7FVdWMoECazGVQ',
              }}
              style={styles.itemIcon}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>Zomato payment</Text>
              <Text style={styles.itemSubtitle}>Zomato online Order</Text>
              <Text style={styles.itemStatus}>Booking window open</Text>
            </View>
            <Text style={styles.itemAmount}>₹150.20</Text>
          </View>

          {/* Checklist Item 2 */}
          <View style={styles.checklistItem}>
            <Image
              source={{
                uri: 'https://images.firstpost.com/wp-content/uploads/2013/10/BSNL_Logo_Wikimedia1.jpg',
              }}
              style={styles.itemIcon}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>Bsnl payment</Text>
              <Text style={styles.itemSubtitle}>Bsnl payment due</Text>
              <Text style={styles.itemStatus}>Booking window open</Text>
            </View>
            <Text style={styles.itemAmount}>₹260.50</Text>
          </View>

          {/* Checklist Item 3 */}
          <View style={styles.checklistItem}>
            <Image
              source={{
                uri: 'https://play-lh.googleusercontent.com/hr8L0Dg0M56qGo4tEZ4ZKh96mzQGhHegIMgTf-KAC0co_rIvqBPX2R8dA0471N6WOP0',
              }}
              style={styles.tamilIcon}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>Tamil Nadu Electricity (TNEB)</Text>
              <Text style={styles.itemSubtitle}>Electricity</Text>
              <Text style={styles.itemStatus}>No new bills</Text>
            </View>
          </View>

          {/* Add Bills Section */}
          <TouchableOpacity style={styles.addBillButton}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.freepik.com/512/6056/6056747.png?ga=GA1.1.1926264835.1732262597',
              }}
              style={styles.billIcon}
            />
            <Text style={styles.addBillText}>Add bills, recharges and more!</Text>
            <Text style={styles.billSubtext}>
              Mobile, electricity, DTH, LPG and more
            </Text>
            <Text style={styles.itemStatus2}>Add more bills</Text>
          </TouchableOpacity>
        </View>

        {/* Payment Categories Section */}
        <View style={styles.paymentCategoriesSection}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>Payment categories</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all &gt;</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoriesGrid}>
            {/* Mobile Recharge */}
            <TouchableOpacity style={styles.categoryItem}>
              <Image
                source={{ uri: 'https://cdn-icons-png.freepik.com/512/10725/10725976.png?ga=GA1.1.948396698.1726851555' }}
                style={styles.mobileIcon}
              />
              <Text style={styles.mobileText}>Mobile Recharge</Text>
            </TouchableOpacity>

            {/* Electricity */}
            <TouchableOpacity style={styles.categoryItem}>
              <Image
                source={{ uri: 'https://cdn-icons-png.freepik.com/512/8621/8621779.png?ga=GA1.1.1926264835.1732262597' }}
                style={styles.cityIcon}
              />
              <Text style={styles.cityText}>Electricity</Text>
            </TouchableOpacity>

            {/* DTH / Cable TV */}
            <TouchableOpacity style={styles.categoryItem}>
              <Image
                source={{ uri: 'https://cdn-icons-png.freepik.com/512/1061/1061328.png?ga=GA1.1.1926264835.1732262597' }}
                style={styles.dthIcon}
              />
              <Text style={styles.dthText}>DTH /{'\n'}Cable TV</Text>
            </TouchableOpacity>

            {/* Fastags */}
          <TouchableOpacity style={styles.categoryItem}>
            <Image
              source={{ uri: 'https://cdn-icons-png.freepik.com/512/11256/11256352.png?ga=GA1.1.1926264835.1732262597' }}
              style={styles.tagIcon}
            />
            <Text style={styles.tagText}>Fastags recharge</Text>
          </TouchableOpacity>

            {/* Google Play */}
            <TouchableOpacity style={styles.categoryItem}>
              <Image
                source={{ uri: 'https://cdn-icons-png.freepik.com/512/1532/1532483.png?ga=GA1.1.1926264835.1732262597' }}
                style={styles.playIcon}
              />
              <Text style={styles.tagText}>Google{'\n'}Play</Text>
            </TouchableOpacity>

            {/* Credit Cards */}
            <TouchableOpacity style={styles.categoryItem}>
              <Image
                source={{ uri: 'https://cdn-icons-png.freepik.com/512/5309/5309209.png?ga=GA1.1.1926264835.1732262597' }}
                style={styles.cardIcon}
              />
              <Text style={styles.cardText}>Credit{'\n'}Cards</Text>
            </TouchableOpacity>

            {/* Gas Cylinder Booking */}
          <TouchableOpacity style={styles.categoryItem}>
            <Image
              source={{ uri: 'https://cdn-icons-png.freepik.com/512/10483/10483432.png?ga=GA1.1.1926264835.1732262597' }}
              style={styles.gasIcon}
            />
            <Text style={styles.gasText}>Gas Cylinder Booking</Text>
          </TouchableOpacity>

          {/* Broadband / Landline */}
          <TouchableOpacity style={styles.categoryItem}>
            <Image
              source={{ uri: 'https://cdn-icons-png.freepik.com/512/5707/5707557.png?ga=GA1.1.1926264835.1732262597' }}
              style={styles.bandIcon}
            />
            <Text style={styles.bandText}>Broadband / Landline</Text>
          </TouchableOpacity>

          {/* Postpaid Mobile */}
          <TouchableOpacity style={styles.categoryItem}>
            <Image
              source={{ uri: 'https://cdn-icons-png.freepik.com/512/16195/16195196.png?ga=GA1.1.1926264835.1732262597' }}
              style={styles.paidIcon}
            />
            <Text style={styles.paidText}>Postpaid{'\n'}Mobile</Text>
          </TouchableOpacity>
          </View>
        </View>

        {/* Suggestions Section */}
        <View style={styles.suggestionsSection}>
          <Text style={styles.suggestionsTitle}>Suggestions for you</Text>
          <View style={styles.suggestionItem}>
            <Image
              source={{ uri: 'https://play-lh.googleusercontent.com/vn5N4HDC9YhIACOKNht8xrK3xk4xNmXmvFpNDHRIz5JN7NX5Pz5eUr8zEBVutTEegpo' }}
              style={styles.suggestionIcon}
            />
            <Text style={styles.suggestionText}>BSNL Prep...</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#121212',
  },
  leftArrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
  },
  searchBar: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
  },
  searchText: {
    color: '#AAA',
    fontSize: 16,
    marginLeft: 10,
  },
  dotsIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
  },
  promoBanner: {
    backgroundColor: '#1F1F1F',
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
  promoTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  promoSubtitle: {
    color: '#AAA',
    marginVertical: 5,
  },
  buyNowText: {
    color: '#6C99CB',
    fontWeight: 'bold',
  },
  checklistSection: {
    paddingHorizontal: 15,
  },
  checklistTitle: {
    color: '#FFF',
    fontSize: 18,
    marginVertical: 10,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  tamilIcon:{
    width: 58,
    height: 58,
    left: -7,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    color: '#FFF',
    fontSize: 16,
  },
  itemSubtitle: {
    color: '#AAA',
  },
  itemStatus: {
    color: '#6C99CB',
  },
  itemAmount: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addBillButton: {
    marginTop: 15,
  },
  addBillText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    left: 50,
    top: -45,
  },
  billSubtext: {
    color: '#AAA',
    fontSize: 14,
    left: 50,
    top: -45,
  },
  itemStatus2:{
    top: -45,
    left: 51,
    color: '#6C99CB',
  },
  paymentCategoriesSection: {
    marginTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#000',
    paddingBottom: 20,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  viewAllText: {
    fontSize: 14,
    color: '#1e88e5',
    fontWeight: '500',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#222', // Card background
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF', // Darker text
    textAlign: 'center',
  },
  suggestionsSection: {
    marginTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: '#000',
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#000',
    padding: 12,
    elevation: 1,
  },
  suggestionIcon: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
    marginRight: 12,
    borderRadius: 45,
    top: -7,
  },
  suggestionText: {
    fontSize: 12,
    color: '#FFF',
    fontFamily: 'times new-roman,sans-serif bold',
    fontWeight: '700',
    top: 35,
    left: -65,
  },
  billIcon:{
    width: 30,
    height: 30,
    tintColor: '#a3bcf5',
    left: 6,
    top: -5,
  },
  mobileIcon:{
    width: 35,
    height: 35,
    tintColor: '#a3bcf5',
    top: 4,
  },
  cityIcon:{
    width: 42,
    height: 42,
    tintColor: '#a3bcf5',
    top: 4,
  },
  dthIcon:{
    width: 36,
    height: 36,
    tintColor: '#a3bcf5',
    top: 4,
  },
  tagIcon:{
    width: 36,
    height: 36,
    tintColor: '#a3bcf5',
    top: 4,
  },
  playIcon:{
    width: 32,
    height: 32,
    tintColor: '#a3bcf5',
    top: 5,
    left: 6,
  },
  cardIcon:{
    width: 32,
    height: 32,
    tintColor: '#a3bcf5',
    top: 5,
    left: 2,
  },
  gasIcon:{
    width: 34,
    height: 34,
    tintColor: '#a3bcf5',
    top: 4,
  },
  bandIcon:{
    width: 34,
    height: 34,
    tintColor: '#a3bcf5',
    top: 4,
  },
  paidIcon:{
    width: 34,
    height: 34,
    tintColor: '#a3bcf5',
    top: 4,
  },
  mobileText:{
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'times new-roman, sans-serif',
    top: 8,
    left: 2,
  },
  cityText:{
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'times new-roman, sans-serif',
    top: 8,
    left: 2,
  },
  dthText:{
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'times new-roman, sans-serif',
    top: 8,
    left: 2,
  },
  tagText:{
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'times new-roman, sans-serif',
    top: 8,
    left: 2,
  },
  cardText:{
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'times new-roman, sans-serif',
    top: 8,
    left: 2,
  },
  gasText:{
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'times new-roman, sans-serif',
    top: 8,
    left: 2,
  },
  bandText:{
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'times new-roman, sans-serif',
    top: 8,
    left: 2,
  },
  paidText:{
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'times new-roman, sans-serif',
    top: 8,
    left: 2,
  },
});

export default PayBillsScreen;
