import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PlayStoreScreen = () => {
    const navigation = useNavigation();
    const [showLinkAccount, setShowLinkAccount] = useState(false);

    const toggleLinkAccount = () => {
        setShowLinkAccount(!showLinkAccount);
    };

    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={{ uri: 'https://static.thenounproject.com/png/12934-200.png' }}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Image
                        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/022/484/501/small_2x/google-play-store-icon-logo-symbol-free-png.png' }}
                        style={styles.logoIcon}
                    />
                    <Text style={styles.title}>Google Play Recharge C...</Text>
                </View>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' }}
                        style={styles.dotsIcon}
                    />
                </TouchableOpacity>
            </View>

            {/* Main Content */}
            <TouchableOpacity onPress={toggleLinkAccount}>
            <View style={styles.noAccountsContainer}>
                <Text style={styles.noAccountsText}>No accounts linked</Text>
                    <Image
                        source={{
                            uri: showLinkAccount
                                ? 'https://cdn-icons-png.flaticon.com/512/32/32323.png' // Up arrow URI
                                : 'https://cdn-icons-png.flaticon.com/512/32/32195.png', // Down arrow URI
                        }}
                        style={styles.arrowIcon}
                    />
            </View>
            </TouchableOpacity>

            {showLinkAccount && (
                <View style={styles.linkAccountContainer}>
                    <Text style={styles.linkAccountText}>Link account</Text>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.freepik.com/512/11488/11488428.png?ga=GA1.1.1926264835.1732262597',
                        }}
                        style={styles.plusIcon}
                    />
                </View>
            )}

            {/* Logo */}
            <View style={styles.mainContent}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/022/484/501/small_2x/google-play-store-icon-logo-symbol-free-png.png' }}
                        style={styles.mainLogo}
                    />
                </TouchableOpacity>
                <Text style={styles.jioPrepaidText}>Google Play Recharge Code</Text>
                <Text style={styles.linkDescription}>No payments made. Go ahead and purchase{'\n'}your first Google Play recharge code.
                </Text>
                <TouchableOpacity style={styles.linkButton}>
                    <Text style={styles.linkButtonText}>Buy</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Black background
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#000',
    },
    backIcon: {
        width: 24,
        height: 24,
        tintColor: '#fff',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoIcon: {
        width: 32,
        height: 32,
        marginRight: 10,
        borderRadius: 35,
    },
    title: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    dotsIcon: {
        width: 24,
        height: 24,
        tintColor: '#fff',
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainLogo: {
        width: 80,
        height: 80,
        marginBottom: 20,
        borderRadius: 35
    },
    jioPrepaidText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    linkDescription: {
        color: '#fff',
        fontSize: 12.2,
        textAlign: 'center',
        marginHorizontal: 40,
        marginBottom: 20,
    },
    noAccountsText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 20,
        top: 25,
        left: -65,
    },
    noAccountsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    arrowIcon: {
        width: 12,
        height: 12,
        tintColor: '#fff', // Ensures the arrow matches the design color
        top: 18,
        left: 90,
    },
    plusIcon: {
        width: 20,
        height: 20,
        tintColor: '#fff',
        borderRadius: 35,
        left: -140,
        top: -5,
    },
    linkAccountContainer: {
        alignItems: 'center',
        marginTop: -12,
    },
    linkAccountText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        top: 17,
        left: -60,
    },
    linkButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    linkButtonText: {
        color: '#a3bcf5',
        fontSize: 14,
        fontWeight: 'bold',
        left: -5,
        top: -18,
    },
});

export default PlayStoreScreen;
