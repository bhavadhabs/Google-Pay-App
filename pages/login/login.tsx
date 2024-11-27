import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, FlatList, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../Types/types';

const LoginScreen: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [showLanguagePage, setShowLanguagePage] = useState(false);
    const [showCountryPage, setShowCountryPage] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showOptionsMenu, setShowOptionsMenu] = useState(false);
    const [showOtpPage, setShowOtpPage] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to hold individual OTP digits
    const [timer, setTimer] = useState(30); // Countdown timer state
    const [isTimerActive, setIsTimerActive] = useState(false); // Timer active state

    const languages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada'];
    const countries = ['India', 'Singapore', 'United States'];
    const navigation = useNavigation<LoginScreenNavigationProp>();

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isTimerActive && timer > 0) {
            interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsTimerActive(false);
        }

        return () => clearInterval(interval);
    }, [isTimerActive, timer]);

    const handleContinue = () => {
        const validPhoneNumber = '12345678';

        if (!phoneNumber) {
            Alert.alert('Error', 'Please enter your phone number');
            return;
        }

        if (phoneNumber !== validPhoneNumber) {
            Alert.alert('Error', 'Please enter a valid number');
            return;
        }

        setShowOtpPage(true); // Show OTP verification page
    };

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
        setShowLanguagePage(false);
    };

    const handleCountrySelect = (country: string) => {
        setSelectedCountry(country);
        setShowCountryPage(false);
    };

    const handleVerifyOtp = () => {
        const validOtp = '123456';
        const enteredOtp = otp.join('');
    
        if (enteredOtp.length < 6) {
            Alert.alert('Error', 'Please enter the OTP');
            return;
        }
    
        if (enteredOtp !== validOtp) {
            Alert.alert('Error', 'Please enter a valid OTP');
            return;
        }
        navigation.navigate('Gpay');
    };

    const handleOtpChange = (digit: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = digit;
        setOtp(newOtp);  
    };

    const handleRequestNewOtp = () => {
        setTimer(30);
        setIsTimerActive(true);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            {showOtpPage ? (
                <View style={styles.otpContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headerIcon} onPress={() => setShowOtpPage(false)}>
                            <Image
                                source={{ uri: 'https://cdn0.iconfinder.com/data/icons/arrows-11/100/arrow-3-512.png' }} // Left arrow icon
                                style={styles.leftarrowIconImage}
                            />
                        </TouchableOpacity>
                        <Text style={styles.otpTitle}>Verify your phone{'\n'} number</Text>
                        <TouchableOpacity style={styles.headerIcon} onPress={() => setShowOptionsMenu(!showOptionsMenu)}>
                            <Image
                                source={{ uri: 'https://static.thenounproject.com/png/3636116-200.png' }} // More icon
                                style={styles.headerIconImage}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Conditionally render the options menu */}
                    {showOptionsMenu && (
                        <View style={styles.otpoptionsMenu}>
                            <TouchableOpacity style={styles.optionItem} onPress={() => Alert.alert('Help', 'Get Help')}>
                                <Text style={styles.optionText}>Get Help</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionItem} onPress={() => Alert.alert('Feedback', 'Send Feedback')}>
                                <Text style={styles.optionText}>Send Feedback</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    <Text style={styles.otpSubtitle}>
                        Enter the OTP sent to
                         +91 {phoneNumber}
                    </Text>

                    <View style={styles.otpInputContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                style={styles.otpInput}
                                value={digit}
                                onChangeText={(text) => handleOtpChange(text, index)}
                                keyboardType="number-pad"
                                maxLength={1}
                                placeholder="____ ____ ____ ____ ____ ____"
                            />
                        ))}
                    </View>

                    <View style={styles.troubleContainer}>
                        <Text style={styles.troubleText}>Having trouble?</Text>
                        <TouchableOpacity
                            style={styles.requestNewOtpButton}
                            onPress={handleRequestNewOtp}
                            disabled={isTimerActive}
                        >
                            <Text style={styles.requestNewOtpText}>
                                Request a new OTP in {formatTime(timer)}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
                        <Text style={styles.verifyButtonText}>Verify</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                showLanguagePage ? (
                    <View style={styles.pageContainer}>
                        <Text style={styles.pageTitle}>Select Language</Text>
                        <FlatList
                            data={languages}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.pageItem} onPress={() => handleLanguageSelect(item)}>
                                    <Text style={styles.pageItemText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item}
                        />
                        <Pressable style={styles.backButton} onPress={() => setShowLanguagePage(false)}>
                            <Text style={styles.backButtonText}>Done</Text>
                        </Pressable>
                    </View>
                ) : showCountryPage ? (
                    <View style={styles.pageContainer}>
                        <Text style={styles.pageTitle}>Select Country</Text>
                        <FlatList
                            data={countries}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.pageItem} onPress={() => handleCountrySelect(item)}>
                                    <Text style={styles.pageItemText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item}
                        />
                        <Pressable style={styles.backButton} onPress={() => setShowCountryPage(false)}>
                            <Text style={styles.backButtonText}>Done</Text>
                        </Pressable>
                    </View>
                ) : (
                    <View style={styles.mainContent}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity style={styles.languageContainer} onPress={() => setShowLanguagePage(true)}>
                                <Image
                                    source={{ uri: 'https://cdn2.iconfinder.com/data/icons/basic-thin-line-color/21/18-512.png' }}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttonText}>{selectedLanguage}</Text>
                                <Image
                                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5800/5800629.png' }}
                                    style={styles.decrementicon}
                                />
                            </TouchableOpacity>

                            <View style={styles.countryOptionContainer}>
                                <TouchableOpacity style={styles.countryContainer} onPress={() => setShowCountryPage(true)}>
                                    <Image
                                        source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/13/14/15/india-162319_640.png' }}
                                        style={styles.countryIcon}
                                    />
                                    <Image
                                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5800/5800629.png' }}
                                        style={styles.decrement2icon}
                                    />
                                    <Text style={styles.INText}>{selectedCountry || 'IN'}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.moreOptionsButton} onPress={() => setShowOptionsMenu(!showOptionsMenu)}>
                                    <Image
                                        source={{ uri: 'https://static.thenounproject.com/png/3636116-200.png' }} // More icon
                                        style={styles.moreIcon}
                                    />
                                </TouchableOpacity>

                                {showOptionsMenu && (
                                    <View style={styles.optionsMenu}>
                                        <TouchableOpacity style={styles.optionItem} onPress={() => Alert.alert('Help', 'Get Help')}>
                                            <Text style={styles.optionText}>Get Help</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.optionItem} onPress={() => Alert.alert('Feedback', 'Send Feedback')}>
                                            <Text style={styles.optionText}>Send Feedback</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        </View>

                        <Image
                            source={{ uri: 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png' }}
                            style={styles.logo}
                            resizeMode="contain"
                        />

                        <Text style={styles.welcomeText}>
                            Welcome to{'\n'}Google Pay
                        </Text>

                        <Text style={styles.enterPhoneText}>Enter your phone number</Text>

                        <View style={styles.phoneContainer}>
                            <View style={styles.phoneInnerContainer}>
                                <Image
                                    source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/13/14/15/india-162319_640.png' }}
                                    style={styles.flagIcon}
                                />                              
                                <TextInput
                                    style={styles.input}
                                    placeholder="+91 0000 0000"
                                    placeholderTextColor="#FFF"
                                    keyboardType="phone-pad"
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                />
                            </View>
                        </View>

                        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                            <Text style={styles.continueButtonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                )
            )}
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 80,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '98%',
        paddingHorizontal: 20,
        marginBottom: 20,
        left: 40,
    },
    languageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: '#111',
        left: 60,
        top: -110,
    },
    countryOptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: '#111',
        left: 17,
        top: -110,
    },
    buttonText: {
        fontSize: 13,
        fontFamily: 'Amazon Ember, Amazon Arabic Ember, Arial, sans',
        color: '#FFF',
        fontWeight: 'bold',
        marginLeft: 10,
        left: -5,
    },
    INText: {
        fontFamily: 'Amazon Ember, Amazon Arabic Ember, Arial, sans',
        color: '#FFF',
        fontSize: 13,
        fontWeight: 'bold',
        left: -10,
    },
    icon: {
        width: 20,
        height: 20,
    },
    countryIcon: {
        width: 20,
        height: 20,
        left: -5,
    },
    decrementicon: {
        width: 10,
        height: 10,
        marginLeft: 5,
        left: -3,
        top: 1,
    },
    decrement2icon: {
        width: 10,
        height: 10,
        marginLeft: 5,
        left: 24,
        top: 1,
    },
    moreOptionsButton: {
        padding: 10,
        marginLeft: 10,
        top: -110,
    },
    moreIcon: {
        width: 20,
        height: 20,
        tintColor: '#999',
    },
    optionsMenu: {
        position: 'absolute',
        top: -110, // Adjust this value to control vertical position
        right: 25, // Adjust this value to control horizontal position
        backgroundColor: '#222',
        borderRadius: 8,
        shadowColor: '#222',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0,
        shadowRadius: 8,
        elevation: 5,
        padding: 16,
        width: 180,
        alignItems: 'center',
    },
    otpoptionsMenu: {
        position: 'absolute',
        top: -10, // Adjust this value to control vertical position
        right: 40, // Adjust this value to control horizontal position
        backgroundColor: '#222',
        borderRadius: 8,
        shadowColor: '#222',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 7,
        shadowRadius: 8,
        elevation: 5,
        padding: 10,
        width: 170,
        alignItems: 'center',
    },
    optionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
        width: '100%',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        color: '#FFF',
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 30,
        left: -100,
        top: -110,
    },
    welcomeText: {
        fontSize: 32,
        textAlign: 'center',
        fontFamily: 'Amazon Ember, Amazon Arabic Ember, Arial, sans',
        color: '#FFF',
        fontWeight: '600',
        marginBottom: 30,
        left: -45,
        top: -140,
    },
    enterPhoneText: {
        fontSize: 17,
        fontFamily: 'Amazon Ember, Amazon Arabic Ember, Arial, sans',
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 30,
        top: -140,
        left: -30,
    },
    phoneContainer: {
        width: '93%',
        paddingVertical: 10,
        top: -140,
    },
    phoneInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: '#222',
        width: '100%',
    },
    flagIcon: {
        width: 28,
        height: 28,
        marginRight: 10,
    },
    countryCode: {
        fontSize: 18,
        color: '#FFF',
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 25,
        color: '#FFF',
    },
    continueButton: {
        backgroundColor: '#222',
        paddingVertical: 8,
        paddingHorizontal: 2,
        borderRadius: 25,
        width: 320,
        alignItems: 'center',
        marginTop: 20,
        top: 60,
    },
    continueButtonText: {
        color: '#777',
        fontSize: 18,
        fontFamily: 'Amazon Ember, Amazon Arabic Ember, Arial, sans',
        fontWeight: 'bold',
    },
    pageContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#111',
        paddingTop: 50,
    },
    pageTitle: {
        fontSize: 24,
        color: '#FFF',
        fontFamily: 'Amazon Ember, Amazon Arabic Ember, Arial, sans',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    pageItem: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 0,
        borderBottomColor: '#444',
    },
    pageItemText: {
        fontSize: 18,
        color: '#FFF',
    },
    backButton: {
        marginTop: 20,
        paddingVertical: 15,
        backgroundColor: '#FFF',
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    backButtonText: {
        color: '#111',
        fontSize: 18,
        fontWeight: 'bold',
    },
    otpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
        paddingHorizontal: 40,
        top: 40,
    },
    otpInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: -60,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginBottom: 30,
    },
    headerIcon: {
        padding: 10,
    },
    headerIconImage: {
        width: 18,
        height: 18,
        top: -252,
        left: 20,
        tintColor: 'rgb(241, 241, 241)',
    },
    leftarrowIconImage: {
        width: 20,
        height: 20,
        top: -250,
        tintColor: 'rgb(241, 241, 241)',
        left: -30,
    },
    otpTitle: {
        fontSize: 26,
        color: '#FFF',
        top: -160,
        left: -53,
    },
    otpSubtitle: {
        fontSize: 16,
        color: '#FFF',
        marginVertical: 20,
        top: -190,
        left: -15,
    },
    otpInput: {
        width: 50, // Adjust width as needed
        height: 80, // Adjust height as needed
        fontSize: 30, // Adjust font size for the underscore height
        textAlign: 'center',
        top: -20,
    },
    troubleContainer: {
        alignItems: 'center',
        marginTop: 16,
    },
    troubleText: {
        fontSize: 14,
        color: '#999',
        marginBottom: 8,
        top: -90,
        left: -95,
    },
    requestNewOtpButton: {
        backgroundColor: 'transparent',
    },
    requestNewOtpText: {
        fontSize: 14,
        color: '#999',
        top: -90,
        left: -55,
    },
    verifyButton: {
        backgroundColor: '#222',
        paddingVertical: 6,
        paddingHorizontal: 40,
        borderRadius: 25,
        width: '80%',
        alignItems: 'center',
        top: 150,
    },
    verifyButtonText: {
        color: '#666',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
