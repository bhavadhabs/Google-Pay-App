import React from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const ScanQRCodeScreen = ({ navigation }: any) => {

    const handleQRCodeScan = () => {
        Alert.alert('QR Code Scanned');
        navigation.goBack(); // Navigate back after scanning
    };

    const handleScanFromPhoto = () => {
        Alert.alert('Scan from Photo', 'Feature not implemented yet.');
    };

    return (
        <View style={styles.container}>
            {/* Top Buttons */}
            <View style={styles.topButtonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={{ uri: 'https://cdn-icons-png.freepik.com/512/8438/8438629.png' }} style={styles.xbuttonImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/956/956956.png' }} style={styles.torchbuttonImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/QR_icon.svg/1024px-QR_icon.svg.png' }} style={styles.scanbuttonImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/61/61140.png' }} style={styles.dotsbuttonImage} />
                </TouchableOpacity>
            </View>

            {/* QR Code Scanner */}
            <QRCodeScanner
                onRead={handleQRCodeScan}
                cameraStyle={styles.camera}
                showMarker={false}
                bottomContent={
                    <View style={styles.bottomContent}>
                        <TouchableOpacity onPress={handleScanFromPhoto} style={styles.scanFromPhotoButton}>
                            <View style={styles.galleryContainer}>
                                <Image 
                                    source={{ uri: 'https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png' }} 
                                    style={styles.galleryImage} 
                                />
                                <Text style={styles.scanFromPhotoText}>Upload from gallery    </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
            />

            {/* Image in the middle */}
            <View style={styles.middleImageContainer}>
                <Image source={{ uri: 'https://cdn-icons-png.freepik.com/512/9970/9970297.png' }} style={styles.middleImage} />
            </View>
            <View style={styles.scanTextContainer}>
                <Text style={styles.scanText}>Scan QR Code  </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    topButtonsContainer: {
        position: 'absolute',
        top: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        zIndex: 1, // Ensure the buttons are above other content
    },
    button: {
        padding: 10,
    },
    xbuttonImage: {
        width: 28,
        height: 28,
    },
    torchbuttonImage: {
        width: 27,
        height: 27,
        left: 110,
        top: -7,
    },
    scanbuttonImage: {
        width: 25,
        height: 25,
        left: 65,
        top: -3,
    },
    dotsbuttonImage: {
        width: 20,
        height: 20,
        left: 20,
    },
    camera: {
        height: '100%',
        width: '100%',
    },
    scanTextContainer: {
        position: 'absolute',
        top: 100, // Position this below the top buttons
        width: '100%',
        alignItems: 'center',
        zIndex: 0, // Ensure it's below the top buttons
    },
    scanText: {
        fontSize: 14,
        color: '#000',
        padding: 16,
        top: 40,
        left: 7,
    },
    bottomContent: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        alignItems: 'center',
    },
    scanFromPhotoButton: {
        marginTop: 20,
        padding: 9,
        width: 240,
        backgroundColor: '#FFF',
        borderRadius: 30,
        height: 40,
        top: 20,
        left: 6,
    },
    scanFromPhotoText: {
        color: '#000',
        fontSize: 16,
        top: -18,
        left: 40,
    },
    galleryContainer:{
        position: 'absolute',
        alignContent: 'center',
    },
    galleryImage: {
        width: 25,
        height: 25,
        top: 7,
        left: 9,
    },
    middleImageContainer: {
        position: 'absolute',
        top: '45%', // Adjust this to place the image in the middle
        alignItems: 'center',
    },
    middleImage: {
        width: 250,
        height: 250,
        top: -100,
        left: 5,
    },
});

export default ScanQRCodeScreen;
