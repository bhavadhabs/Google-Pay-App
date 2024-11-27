import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import { RootStackParamList } from '../Types/types';

const GPayMainPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleScanImagePress = () => {
        console.log('QRScanner');
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            {/* Search Bar */}
            <View style={styles.searchBar}>
                <Image
                    source={{ uri: 'https://www.pngall.com/wp-content/uploads/8/Magnifying-Glass-Search-PNG-Clipart.png' }} // Replace with actual image URI
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by name or number"
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                />
            </View>

            {/* Mail Account Design */}
            <View style={styles.mailAccount}>
                <Image
                    source={{ uri: 'https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png' }}
                    style={styles.mailProfileImage}
                />
            </View>

            {/* Start with your Bank */}
            <View style={styles.bankSection}>
                {/* Add the image before the text */}
                <Image
                    source={{ uri: 'https://www.lyra.com/in/wp-content/uploads/sites/8/2018/12/All-about-benefits-of-digital-payment.png' }}
                    style={styles.bankImage}
                />
                <Text style={styles.title}>Start with your Bank</Text>
                <Text style={styles.subtitle}>Send and receive money securely</Text>
                <TouchableOpacity style={styles.blueButton}>
                    <Text style={styles.buttonText}>Add bank account</Text>
                </TouchableOpacity>
            </View>

            {/* Scan QR Code Image */}
            <View style={styles.scanSection}>
                <Text style={styles.scanText}>
                    Scan any{'\n'}QR code
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('ScanQRCodeScreen')}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/5618/5618239.png?ga=GA1.1.948396698.1726851555' }}
                        style={styles.scanImage}
                    />
                </TouchableOpacity>
            </View>

            {/* Pay Contacts */}
            <View style={styles.paycontactSection}>
                <Text style={styles.paycontactText}>
                    Pay{'\n'}contacts
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('PayContactScreen')}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/5082/5082215.png?ga=GA1.1.948396698.1726851555' }}
                        style={styles.paycontactsImage}
                    />
                </TouchableOpacity>
            </View>

            {/* Pay Phno */}
            <View style={styles.payphnoSection}>
                <Text style={styles.payphnoText}>
                    Pay Phone{'\n'}number
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('PhnoScreen')}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/3690/3690680.png?ga=GA1.1.948396698.1726851555' }}
                        style={styles.payphnoImage}
                    />
                </TouchableOpacity>
            </View>

            {/* Bank Transfer */}
            <View style={styles.transferSection}>
                <Text style={styles.transferText}>
                    Bank{'\n'}transfer
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('BankTransferScreen')}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/1172/1172631.png?ga=GA1.1.948396698.1726851555' }}
                        style={styles.transferImage}
                    />
                </TouchableOpacity>
            </View>

            {/* Pay UPI ID */}
            <View style={styles.UPISection}>
                <Text style={styles.UPIText}>
                    Pay UPI ID{'\n'}or number
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('PayUpiScreen')}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/10152/10152135.png?ga=GA1.1.948396698.1726851555' }}
                        style={styles.UPIImage}
                    />
                </TouchableOpacity>
            </View>

            {/* Self Transfer */}
            <View style={styles.selfSection}>
                <Text style={styles.selfText}>
                    Self{'\n'}transfer
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SelfTransferScreen')}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/10479/10479887.png?ga=GA1.1.948396698.1726851555' }}
                        style={styles.selfImage}
                    />
                </TouchableOpacity>
            </View>

            {/* Pay Bills */}
            <View style={styles.paybillsSection}>
                <Text style={styles.paybillsText}>
                    Pay{'\n'}bills
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('PayBillsScreen')}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/9048/9048536.png?ga=GA1.1.948396698.1726851555' }}
                        style={styles.paybillsImage}
                    />
                </TouchableOpacity>
            </View>

            {/* Mobile Recharge */}
            <View style={styles.mobileSection}>
                <Text style={styles.mobileText}>
                    Mobile{'\n'}recharge
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('MobileRechargeScreen')}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/10725/10725976.png?ga=GA1.1.948396698.1726851555' }}
                        style={styles.mobileImage}
                    />
                </TouchableOpacity>
            </View>

            {/* People Section */}
            <View style={styles.section}>
                <Text style={styles.peopleTitle}>People</Text>
                <TouchableOpacity onPress={() => navigation.navigate('PeopleScreen')}>
                    <View style={styles.profileContainer}>
                        <Image
                            source={{ uri: 'https://png.pngtree.com/png-vector/20230823/ourmid/pngtree-two-men-sitting-at-a-table-and-using-a-phone-vector-png-image_6866294.png' }}
                            style={styles.profileImage}
                        />
                    </View>
                </TouchableOpacity>

                {/* Add the additional text */}
                <Text style={styles.recentlyPaidText}>
                    People you've recently paid will{'\n'}show up here.{' '}
                    <Text style={styles.findPeopleText}>Find people to pay</Text>
                </Text>
            </View>

            {/* Business Section */}
            <View style={styles.section}>
                <Text style={styles.businessTitle}>Businesses</Text>
                <View style={styles.businessContainer}>

                    {/* RedBus */}
                    <TouchableOpacity style={styles.redItemContainer} onPress={() => navigation.navigate('RedBusScreen')}>
                        <Image
                            source={{ uri: 'https://play-lh.googleusercontent.com/bNSDmFT0WsnRZupS4f2IT8_LuTWdrH29nda_OXOz9hs4Aq0PmY4eDs4Vk-dNccEilUWo' }}
                            style={styles.redImage}
                        />
                        <Text style={styles.redItem}>  RedBus  </Text>
                    </TouchableOpacity>

                    {/* Prefr Loans */}
                    <TouchableOpacity style={styles.loansItemContainer} onPress={() => navigation.navigate('FibreLoansScreen')}>
                        <Image
                            source={{ uri: 'https://play-lh.googleusercontent.com/v6sMuZF4v7FlveHMFxW6S_0wQW93Y3LAya0YDo4cpMt7DsAEPyl3qCtewV7F5MUPqffz' }}
                            style={styles.loansImage}
                        />
                        <Text style={styles.loansItem}>  Fibre Loans  </Text>
                    </TouchableOpacity>

                    {/* Makemytrip */}
                    <TouchableOpacity style={styles.tripItemContainer} onPress={() => navigation.navigate('MakemytripScreen')}>
                        <Image
                            source={{ uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgweDzZN5-Bm-Li4B2GxA00UItOrGNGQysOxNskAZTArwHAHWPgXd0ONB9k4xW1C4lBNiRyb_Hk1GYUDNWd1AqXU4fX_pOjNPEpo44q66Ezb1zmZR3eZH-bvMtZ6_TZ_OVk330i1RI4BfGDkVEH2xq7jembnvUWDSAuuwGlhSjT6oZmf07tIFgSoh0DmJo/s336/images%20(1).jpeg' }}
                            style={styles.tripImage}
                        />
                        <Text style={styles.tripItem}>Makemytrip </Text>
                    </TouchableOpacity>

                    {/* PlayStore */}
                    <TouchableOpacity style={styles.playItemContainer} onPress={() => navigation.navigate('PlayStoreScreen')}>
                        <Image
                            source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/022/484/501/small_2x/google-play-store-icon-logo-symbol-free-png.png' }}
                            style={styles.playImage}
                        />
                        <Text style={styles.playItem}>PlayStore </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Bill & Recharges Section */}
            <View style={styles.section}>
                <Text style={styles.billTitle}>Bill & Recharges</Text>
                <Text style={styles.billinfo}>Get reminders and pay on time</Text>

                {/* Adding text and images for various categories */}
                <View style={styles.rechargeContainer}>
                    <View style={styles.rechargeItem}>
                    <TouchableOpacity style={styles.playItemContainer} onPress={() => navigation.navigate('MobileRechargeScreen')}>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.freepik.com/512/7732/7732382.png?uid=R162883148&ga=GA1.1.1883688145.1726044862' }}
                                style={styles.rechargeCategoryIcon}
                            />
                        <Text style={styles.rechargeCategoryText}>Mobile{'\n'} recharge </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.electricityItem}>
                    <TouchableOpacity style={styles.playItemContainer} onPress={() => navigation.navigate('ElectricityScreen')}>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.freepik.com/512/17548/17548627.png?uid=R162883148&ga=GA1.1.1883688145.1726044862' }}
                            style={styles.electricityCategoryIcon}
                        />
                        <Text style={styles.electricityCategoryText}>Electricity</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.DTHItem}>
                    <TouchableOpacity style={styles.playItemContainer} onPress={() => navigation.navigate('DthScreen')}>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.freepik.com/512/17548/17548957.png?uid=R162883148&ga=GA1.1.1883688145.1726044862' }}
                            style={styles.DTHCategoryIcon}
                        />
                        <Text style={styles.DTHCategoryText}>DTH/Cable{'\n'}TV</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.EMIItem}>
                    <TouchableOpacity style={styles.playItemContainer} onPress={() => navigation.navigate('CardScreen')}>
                        <Image
                            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/014/031/900/original/save-money-icons-design-in-blue-circle-png.png' }}
                            style={styles.EMICategoryIcon}
                        />
                        <Text style={styles.EMICategoryText}>Credit{'\n'}Cards</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate('PayBillsScreen')}>
                    <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
            </View>

            {/* Offers & Rewards Section */}
            <View style={styles.section}>
                <Text style={styles.offerTitle}>Offers & rewards</Text>
                <View style={styles.offerContainer}>
                    <View style={styles.rewardItemContainer}>
                    <TouchableOpacity style={styles.playItemContainer} onPress={() => navigation.navigate('RewardsScreen')}>
                        <Image
                            source={{ uri: 'https://img.freepik.com/premium-vector/golden-cup-trophy-symbol-team-support_1334819-25890.jpg?w=1060' }}
                            style={styles.rewardImage}
                        />
                        <Text style={styles.rewardItem}>Rewards </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.offersItemContainer}>
                    <TouchableOpacity style={styles.offersItemContainer} onPress={() => navigation.navigate('OffersScreen')}>
                        <Image
                            source={{ uri: 'https://img.freepik.com/premium-vector/price-tag-clip-art-vector-design_1221743-11286.jpg' }}
                            style={styles.offersImage}
                        />
                        <Text style={styles.offersItem}>Offers</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.referralsItemContainer}>
                    <TouchableOpacity style={styles.playItemContainer} onPress={() => navigation.navigate('ReferralsScreen')}>
                        <Image
                            source={{ uri: 'https://img.freepik.com/premium-vector/modern-flat-color-incoming-call-notification-design_1316704-37763.jpg?w=1060' }}
                            style={styles.referralsImage}
                        />
                        <Text style={styles.referralsItem}>Referrals</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Invite Friends Section */}
            <View style={styles.inviteSection}>
                <View style={styles.inviteContent}>
                    <Text style={styles.inviteText}>Get your free CIBIL score{'\n'}instantly!</Text>
                    <Text style={styles.secureText}>Secure and no spam calls</Text>
                    <TouchableOpacity>
                        <Text style={styles.inviteButton}>Check now</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    source={{ uri: 'https://img.freepik.com/free-vector/credit-assessment-concept-illustration_114360-7282.jpg?t=st=1727077951~exp=1727081551~hmac=c77df6e25753fb1f2b609adffe516021aadec67288f940496c6d687a1a60b6d6&w=740' }}
                    style={styles.inviteImage}
                />
            </View>

            {/* Manage Your Money Section */}
            <View style={styles.moneySection}>
                <Text style={styles.moneyTitle}>Manage your money</Text>
                <View style={styles.moneyOption}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/11734/11734354.png?uid=R162883148&ga=GA1.1.1883688145.1726044862' }}
                        style={styles.moneyIcon1}
                    />
                    <Text style={styles.moneyText}>Check your CIBIL score for free</Text>
                    <Text style={styles.arrowIcon1}>›</Text>
                </View>
                <View style={styles.moneyOption}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/11753/11753401.png?uid=R162883148&ga=GA1.1.1883688145.1726044862' }}
                        style={styles.moneyIcon2}
                    />
                    <Text style={styles.moneyText}>See transaction history</Text>
                    <Text style={styles.arrowIcon2}>›</Text>
                </View>
                <View style={styles.moneyOption}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/3433/3433826.png?uid=R162883148&ga=GA1.1.1883688145.1726044862' }}
                        style={styles.moneyIcon3}
                    />
                    <Text style={styles.moneyText}>Check bank balance</Text>
                    <Text style={styles.arrowIcon3}>›</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = 
StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#111',
    },
    searchBar: {
        backgroundColor: '#333',
        paddingVertical: -6,
        width: 306,
        color: '#FFF',
        borderWidth: 1,
        paddingHorizontal: 5,
        borderRadius: 27,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        left: -5,
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: '#111',
        left: 18,
    },
    searchIcon: {
        width: 15,
        height: 15,
        marginRight: 10,
        left: 20,
    },
    mailAccount: {
        alignItems: 'center',
        marginBottom: 30,
    },
    mailProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 35,
        top: -65,
        left: 155,
        backgroundColor: '#e1e1e1',
    },
    bankSection: {
        marginBottom: 25,
    },
    bankImage: {
        width: '160%',
        height: 210,
        left: -70,
        top: -80,
        marginBottom: 10,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 15,
        top: -260,
        left: 64,
    },
    subtitle: {
        fontSize: 15,
        color: '#000',
        marginBottom: 15,
        top: -275,
        left: 64,
    },
    blueButton: {
        backgroundColor: '#88b4e7',
        width: 240,
        height: -100,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 25,
        top: -280,
        left: 55,
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scanText: {
        fontSize: 14,
        color: '#FFF',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
        top: -190,
        left: -128,
    },
    scanSection: {
        marginBottom: 30,
        alignItems: 'center',
        left: -5,
        top: 5,
        paddingHorizontal: 10,
    },
    scanImage: {
        width: 28,
        height: 28,
        top: -273,
        left: -129,
        tintColor: '#759af0',
    },
    paycontactSection: {
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        left: -8,
        top: 5,
        paddingHorizontal: 10,
    },
    paycontactText: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        justifyContent: 'center',
        top: -298,
        left: -32,
    },
    paycontactsImage: {
        width: 30,
        height: 30,
        top: -384,
        left: -33,
        tintColor: '#759af0',
    },
    payphnoSection: {
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        left: -12,
        top: 8,
    },
    payphnoText: {
        fontSize: 13.5,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        justifyContent: 'center',
        top: -412,
        left: 65,
    },
    payphnoImage: {
        width: 33,
        height: 33,
        top: -498,
        left: 65,
        tintColor: '#759af0',
    },
    transferSection: {
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        left: -7,
        top: -7,
    },
    transferText: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        justifyContent: 'center',
        top: -512,
        left: 150,
    },
    transferImage: {
        width: 32,
        height: 32,
        top: -599,
        left: 149,
        tintColor: '#759af0',
    },
    UPISection: {
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        left: -5,
        top: -19,
    },
    UPIText: {
        fontSize: 13,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        justifyContent: 'center',
        top: -523,
        left: -124,
    },
    UPIImage: {
        width: 32,
        height: 32,
        top: -608,
        left: -127,
        tintColor: '#759af0',
    },
    selfSection: {
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        left: -15,
        top: -25,
    },
    selfText: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        justifyContent: 'center',
        top: -630,
        left: -20,
    },
    selfImage: {
        width: 34,
        height: 34,
        top: -719,
        left: -16,
        tintColor: '#759af0',
    },
    paybillsSection: {
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        left: -14,
        top: -32,
    },
    paybillsText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 15,
        textAlign: 'center',
        justifyContent: 'center',
        top: -740,
        left: 69,
    },
    paybillsImage: {
        width: 34,
        height: 34,
        top: -829,
        left: 68,
        tintColor: '#759af0',
    },
    mobileSection: {
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        top: -59,
        left: -12,
    },
    mobileText: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        justifyContent: 'center',
        top: -830,
        left: 155,
    },
    mobileImage: {
        width: 34,
        height: 34,
        top: -918,
        left: 155,
        tintColor: '#759af0',
    },
    recentlyPaidText: {
        marginTop: 10,
        fontSize: 16,
        color: '#FFF',
        fontWeight: '500',
        textAlign: 'justify',
        top: -990,
        left: 110,
    },
    findPeopleText: {
        color: '#8cabf2',
        fontWeight: '700',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: -870,
        left: 10,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 15,
        backgroundColor: '#e1e1e1',
        top: -50,
        left: 6,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif, times new roman',
        marginBottom: 10,
        top: -890,
    },
    peopleTitle: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: '900',
        fontFamily: 'Arial, sans-serif, times new roman',
        marginBottom: 10,
        top: -930,
        left: 20,
    },
    businessTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
        fontFamily: 'Arial, sans-serif, times new roman',
        marginBottom: 10,
        top: -970,
        left: 20,
    },
    billTitle: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 10,
        top: -960,
        left: 25,
    },
    billiconContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
    },
    billicon: {
        width: 45,
        height: 45,
        marginRight: 15,
        marginBottom: 10,
        backgroundColor: '#e1e1e1',
    },
    billinfo: {
        fontSize: 17,
        color: '#FFF',
        top: -970,
        left: 27,
    },
    offerTitle: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 10,
        top: -995,
        left: 35,
    },
    moneyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        top: -955,
        left: 10,
    },
    businessContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    redItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        top: -900,
        left: -2,
    },
    redImage: {
        width: 55,
        height: 55,
        borderRadius: 30,
        top: -68,
        left: 14,
    },
    redItem: {
        fontSize: 13,
        color: '#FFF',
        top: -30,
        left: -40,
    },
    loansItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        top: -898,
        left: -38,
    },
    loansImage: {
        width: 56,
        height: 56,
        borderRadius: 30,
        top: -70,
        left: 28,
    },
    loansItem: {
        fontSize: 12,
        color: '#FFF',
        top: -31,
        left: -40,
    },
    tripItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        top: -900,
        left: -30,
    },
    tripImage: {
        width: 55,
        height: 55,
        borderRadius: 30,
        top: -69,
        left: -20,
    },
    tripItem: {
        fontSize: 12,
        color: '#FFF',
        top: -29,
        left: -78,
    },
    playItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        top: -900,
        left: -30,
    },
    playImage: {
        width: 55,
        height: 55,
        borderRadius: 30,
        top: -70,
        left: -55,
    },
    playItem: {
        fontSize: 12,
        color: '#FFF',
        top: -28,
        left: -108,
    },
    offerprofileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: -870,
    },
    offerprofileImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 15,
        backgroundColor: '#e1e1e1',
    },
    rechargeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'justify',
        justifyContent: 'center',
        marginVertical: 10,
        top: -780,
        left: -5,
    },
    rechargeItem: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    rechargeCategoryIcon: {
        width: 55,
        height: 55,
        marginRight: 10,
        borderRadius: 60,
        top: 720,
        left: 20,
    },
    rechargeCategoryText: {
        fontSize: 12,
        color: '#FFF',
        textAlign: 'center',
        justifyContent: 'center',
        top: 768,
        left: -44,
    },
    electricityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'justify',
        width: '48%',
        marginBottom: 10,
        left: -1,
    },
    electricityCategoryIcon: {
        width: 55,
        height: 55,
        marginRight: 10,
        top: 720,
        left: -10,
    },
    electricityCategoryText: {
        fontSize: 12,
        color: '#FFF',
        top: 763,
        left: -73,
    },
    DTHItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '48%',
        marginBottom: 10,
        left: 1,
    },
    DTHCategoryIcon: {
        width: 55,
        height: 55,
        marginRight: 10,
        top: 648,
        left: 229,
    },
    DTHCategoryText: {
        fontSize: 12,
        color: '#FFF',
        textAlign: 'center',
        top: 696,
        left: 162,
    },
    EMIItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '48%',
        marginBottom: 10,
        left: 4,
    },
    EMICategoryIcon: {
        width: 55,
        height: 55,
        marginRight: 10,
        top: 646,
        left: 145,
    },
    EMICategoryText: {
        fontSize: 12,
        color: '#FFF',
        textAlign: 'center',
        top: 696,
        left: 89,
    },
    viewAllButton: {
        borderColor: '#888',
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 8,
        width: 140,
        height: 45,
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: 'transparent',
        top: -1008,
        left: 110,
    },
    viewAllText: {
        color: '#88b4e7',
        fontSize: 19,
        fontWeight: 'bold',
    },
    offerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        top: -899,
        left: -9,
    },
    rewardItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        flexBasis: '48%',
    },
    offersItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        flexBasis: '48%',
    },
    referralsItemContainer: {
        alignItems: 'center',
        marginBottom: 15,
        flexBasis: '48%',
    },
    rewardImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 5,
        top: 810,
        left: 68,
    },
    offersImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 5,
        top: -88,
        left: -48,
    },
    referralsImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 5,
        top: 718,
        left: 232,
    },
    rewardItem: {
        fontSize: 12,
        color: '#FFF',
        top: 855,
        left: 16,
    },
    offersItem: {
        fontSize: 12,
        color: '#FFF',
        top: -45,
        left: -93,
    },
    referralsItem: {
        fontSize: 12,
        color: '#FFF',
        top: 760,
        left: 179,
    },
    inviteSection: {
        flexDirection: 'row',
        backgroundColor: '#1c1c1c',
        borderRadius: 15,
        padding: 28,
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        top: -1090,
        left: 5,
    },
    inviteContent: {
        flex: 2,
    },
    inviteText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#999',
        marginBottom: 5,
        top: -12,
        left: -9,
    },
    secureText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#999',
        top: -9,
        left: -8,
    },
    inviteButton: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#a8c0f6',
        left: -6,
        top: 8,
    },
    inviteImage: {
        width: 65,
        height: 65,
        borderRadius: 10,
        top: 32,
        left: 27,
    },
    moneySection: {
        backgroundColor: '#111',
        borderRadius: 10,
        padding: 16,
        marginTop: 15,
        paddingBottom: 25,
        top: -130,
        left: -8,
    },
    moneyOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginBottom: 10,
    },
    moneyIcon1: {
        width: 20,
        height: 20,
        marginRight: 10,
        top: -930,
        left: 10,
        tintColor: '#a8c0f6',
    },
    moneyIcon2: {
        width: 20,
        height: 20,
        marginRight: 10,
        top: -928,
        left: 10,
        tintColor: '#a8c0f6',
    },
    moneyIcon3: {
        width: 21,
        height: 21,
        marginRight: 10,
        top: -930,
        left: 10,
        tintColor: '#a8c0f6',
    },
    moneyText: {
        flex: 1,
        fontSize: 16,
        color: '#fff',
        top: -930,
        left: 15,
    },
    arrowIcon1: {
        fontSize: 20,
        color: '#bbb',
        top: -930,
    },
    arrowIcon2: {
        fontSize: 20,
        color: '#bbb',
        top: -930,
    },
    arrowIcon3: {
        fontSize: 20,
        color: '#bbb',
        top: -932,
    },
    icon: {
        width: 45,
        height: 45,
        marginRight: 15,
        marginBottom: 10,
        backgroundColor: '#e1e1e1',
    },
});

export default GPayMainPage;