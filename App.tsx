import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/login/login';
import GPayMainPage from './pages/GPay/GPayMainPage';
import ScanQRCodeScreen from './pages/ScanQRCodeScreen/ScanQRCodeScreen';
import PayContactScreen from './pages/PayContactScreen/PayContactScreen';
import PhnoScreen from './pages/PhnoScreen/PhnoScreen';
import BankTransferScreen from './pages/BankTransfer/BankTransferScreen';
import PayUpiScreen from './pages/PayUpiScreen/PayUpiScreen';
import SelfTransferScreen from './pages/SelfTransferScreen/SelfTransferScreen';
import PayBillsScreen from './pages/PayBillsScreen/PayBillsScreen';
import SelectBankScreen from './pages/SelectBankScreen/SelectBankScreen';
import PeopleScreen from './pages/PeopleScreen/PeopleScreen';
import RedBusScreen from './pages/RedBusScreen/RedBusScreen';
import CardScreen from './pages/CardScreen/CardScreen';
import MobileRechargeScreen from './pages/MobileRechargeScreen/MobileRechargeScreen';
import RewardsScreen from './pages/RewardsScreen/RewardsScreen';
import OffersScreen from './pages/OffersScreen/OffersScreen';
import FibreLoanScreen from './pages/FibreLoansScreen/FibreLoansScreen';
import MRScreen from './pages/MRScreen/MRScreen';
import JioScreen from './pages/JioScreen/JioScreen';
import AirtelScreen from './pages/AirtelScreen/AirtelScreen';
import ViScreen from './pages/ViScreen/ViScreen';
import BSNLScreen from './pages/BSNLScreen/BSNLScreen';
import MumbaiScreen from './pages/MumbaiScreen/MumbaiScreen';
import DelhiScreen from './pages/DelhiScreen/DelhiScreen';
import MakemytripScreen from './pages/MakemytripScreen/MakemytripScreen';
import ElectricityScreen from './pages/ElectricityScreen/ElectricityScreen';
import TNEBScreen from './pages/TNEBScreen/TNEBScreen';
import DthScreen from './pages/DthScreen/DthScreen';
import PlayStoreScreen from './pages/PlayStoreScreen/PlayStoreScreen';
import AdaniScreen from './pages/AdaniScreen/AdaniScreen';
import AjmerScreen from './pages/AjmerScreen/AjmerScreen';
import ArunachalScreen from './pages/ArunachalScreen/ArunachalScreen';
import AndhraScreen from './pages/AndhraScreen/AndhraScreen';
import AssamScreen from './pages/AssamScreen/AssamScreen';
import BesomiScreen from './pages/BesomiScreen/BesomiScreen';
import TataScreen from './pages/TataScreen/TataScreen';
import AirtelTvScreen from './pages/AirtelTvScreen/AirtelTvScreen';
import D2HScreen from './pages/D2HScreen/D2HScreen';
import SunScreen from './pages/SunScreen/SunScreen';
import DishScreen from './pages/DishScreen/DishScreen';
import ReferralsScreen from './pages/RefferalsScreen/RefferalsScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Gpay" component={GPayMainPage} options={{ headerShown: false }} />
        <Stack.Screen name="ScanQRCodeScreen" component={ScanQRCodeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PayContactScreen" component={PayContactScreen} options={{ headerShown: false}} />
        <Stack.Screen name="PhnoScreen" component={PhnoScreen} options={{ headerShown: false}} />
        <Stack.Screen name="BankTransferScreen" component={BankTransferScreen} options={{ headerShown: false}} />
        <Stack.Screen name="PayUpiScreen" component={PayUpiScreen} options={{ headerShown: false}} />
        <Stack.Screen name="SelfTransferScreen" component={SelfTransferScreen} options={{ headerShown: false}} />
        <Stack.Screen name="PayBillsScreen" component={PayBillsScreen} options={{ headerShown: false}} />
        <Stack.Screen name="PeopleScreen" component={PeopleScreen} options={{ headerShown: false}} />
        <Stack.Screen name="SelectBankScreen" component={SelectBankScreen} options={{ headerShown: false}} />
        <Stack.Screen name="RedBusScreen" component={RedBusScreen} options={{ headerShown: false}} />
        <Stack.Screen name="MobileRechargeScreen" component={MobileRechargeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="RewardsScreen" component={RewardsScreen} options={{ headerShown: false}} />
        <Stack.Screen name="OffersScreen" component={OffersScreen} options={{ headerShown: false}} />
        <Stack.Screen name="FibreLoansScreen" component={FibreLoanScreen} options={{ headerShown: false}} />
        <Stack.Screen name="MRScreen" component={MRScreen} options={{ headerShown: false}} />
        <Stack.Screen name="JioScreen" component={JioScreen} options={{ headerShown: false}} />
        <Stack.Screen name="AirtelScreen" component={AirtelScreen} options={{ headerShown: false}} />
        <Stack.Screen name="ViScreen" component={ViScreen} options={{ headerShown: false}} />
        <Stack.Screen name="BSNLScreen" component={BSNLScreen} options={{ headerShown: false}} />
        <Stack.Screen name="MumbaiScreen" component={MumbaiScreen} options={{ headerShown: false}} />
        <Stack.Screen name="DelhiScreen" component={DelhiScreen} options={{ headerShown: false}} />
        <Stack.Screen name="MakemytripScreen" component={MakemytripScreen} options={{ headerShown: false}} />
        <Stack.Screen name="ElectricityScreen" component={ElectricityScreen} options={{ headerShown: false}} />
        <Stack.Screen name="TNEBScreen" component={TNEBScreen} options={{ headerShown: false}} />
        <Stack.Screen name="DthScreen" component={DthScreen} options={{ headerShown: false}} />
        <Stack.Screen name="PlayStoreScreen" component={PlayStoreScreen} options={{ headerShown: false}} />
        <Stack.Screen name="AdaniScreen" component={AdaniScreen} options={{ headerShown: false}} />
        <Stack.Screen name="AjmerScreen" component={AjmerScreen} options={{ headerShown: false}} />
        <Stack.Screen name="AndhraScreen" component={AndhraScreen} options={{ headerShown: false}} />
        <Stack.Screen name="ArunachalScreen" component={ArunachalScreen} options={{ headerShown: false}} />
        <Stack.Screen name="AssamScreen" component={AssamScreen} options={{ headerShown: false}} />
        <Stack.Screen name="BesomiScreen" component={BesomiScreen} options={{ headerShown: false}} />
        <Stack.Screen name="TataScreen" component={TataScreen} options={{ headerShown: false}} />
        <Stack.Screen name="AirtelTvScreen" component={AirtelTvScreen} options={{ headerShown: false}} />
        <Stack.Screen name="D2HScreen" component={D2HScreen} options={{ headerShown: false}} />
        <Stack.Screen name="SunScreen" component={SunScreen} options={{ headerShown: false}} />
        <Stack.Screen name="DishScreen" component={DishScreen} options={{ headerShown: false}} />
        <Stack.Screen name="CardScreen" component={CardScreen} options={{ headerShown: false}} />
        <Stack.Screen name="ReferralsScreen" component={ReferralsScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
