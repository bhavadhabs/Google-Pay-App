# Google Pay App
Google Pay App Clone built with React Native that replicates key features of the Google Pay platform, such as user authentication, payment transfers, and account management.

# Installation
Step 1: Setting Up the React Native Environment
Before you begin, ensure that you've completed the React Native - Environment Setup up to the "Creating a New Application" step. You can follow the setup guide here:
React Native Environment Setup
Install Node.js:
Download and install Node.js from the official site: Node.js.
Install a package manager:
Install either Yarn or npm (npm comes with Node.js).
Install JDK:
React Native requires the Java Development Kit (JDK). Follow the installation steps for JDK 11 or higher.
Android Studio:
Follow the Android setup guide to configure Android Studio and its dependencies for building Android apps.
After completing the environment setup, proceed to create a new React Native app.

# Introduction
This is a Google Pay Clone built using React Native. The app provides a similar experience to the original platform, offering user authentication, payment transfers, and account management features. It also uses TypeScript for better code maintainability and React Navigation for seamless screen transitions.

# Features
User Authentication:
Login/Sign-up and OTP request page
GPay Page:
Created Searched bar with profile id, QR Code scanner, Pay contacts, Pay number, Bank Transfer, UPI ID, Self Transfer, Pay Bills, Mobile Recharge, People Section, Business Section ( RedBus, Fibre Loans, Makemytip, Google PlayStore), Bill Section( Mobile recharge, Electricity, Dth/Cable, Credit Cards), Offers & Rewards Section( Offers, Rewards, Referrals), Invite Section, Manage Money Section ( CIBIL Score, Transaction History, Check bank balance)
TypeScript:
For improved code quality and maintainability.
Modals:
Display informational modals, such as "Verify Phone Number" or "Add Bank Account."

# Creating a New Application
After setting up the environment, you can create a new React Native application using the following steps:
Open a terminal and run:
npx react-native init GPayApp
After creating your app, you can proceed with installing dependencies:
npm install
Start Metro bundler:
npm start
npm run android

# Technologies Used:
React Native:
For building cross-platform mobile applications.
TypeScript:
For improved code quality and maintainability.
React Navigation:
For smooth navigation between screens.
React Native Modal:
For showing modal dialogs.
React ScrollView:
For smooth horizontal and vertical scrolling across the page, use the ScrollView component to enable seamless scrolling in both directions.

# App Structure
├── login/                  # Contains all screens and components related to user login and otp authentication
├── ScanQrcode/             # QR Code scanning functionality for payments and transfers
├── PayContacts/            # Allows users to pay contacts from their phonebook or selected contacts
├── PayNumber/              # Allows users to make payments using phone numbers
├── BankTransfer/           # Section for transferring funds between bank accounts
├── UPIID/                  # Section for managing UPI ID and UPI-based transactions
├── SelfTransfer/           # Self transfer section for transferring money between the user's own accounts
├── PayBills/               # Section for paying various utility bills
├── MobileRecharge/         # Mobile recharge section for recharging prepaid phones
├── RedBus/                 # Integration with RedBus for bus bookings
├── FibreLoans/             # Integration with Fibre Loans for loan-related transactions
├── Makemytrip/             # Integration with Makemytrip for booking travel and accommodations
├── GooglePlayStore/        # Section for browsing and managing Google Play Store transactions
├── Electricity/            # Subsection under PayBills for paying electricity bills
├── DthCable/               # Subsection under PayBills for paying DTH or cable bills
├── CreditCards/            # Section for managing and paying credit card bills
├── types/                  # TypeScript type definitions and interfaces
│   ├── User.ts             # User-related types and interfaces
│   ├── Payment.ts          # Types for payments, transfers, and related data
│   ├── Bill.ts             # Types for bills and payments
│   └── Transaction.ts      # Types for transaction history, status, etc.
├── App.tsx                 # Entry point of the app, initializing React Native components and navigation
├── tsconfig.json           # TypeScript configuration for compiling TypeScript code
└── package.json            # Project dependencies and scripts for building, running, and managing the app

# Frameworks used:
React Native:
A popular framework for building cross-platform mobile applications using JavaScript and React.
TypeScript:
A statically typed superset of JavaScript that improves the maintainability and scalability of the codebase.
React Navigation:
A library for managing navigation and screen transitions in React Native applications, providing a seamless user experience across different app screens.
React Camra:
A powerful library for creating high-performance animations and transitions, enabling smooth UI interactions.
React Camera: 
A powerful library that allows for accessing the device's camera, handling both front and rear cameras for taking photos or scanning QR codes. It can be used for QR code scanning in your app or capturing images for various features like profile picture upload or scanning payment QR codes.
React Screens:
A library for optimizing the performance of React Native apps by managing the navigation stack efficiently. It provides a more optimized and customizable screen management solution than React Navigation's default implementation. It is typically used alongside React Navigation to ensure smooth transitions and prevent memory leaks.
React SVG:
A library that allows you to use Scalable Vector Graphics (SVG) in your React Native application. React Native SVG provides a set of components for rendering SVG images, enabling you to use vector graphics in your app for icons, illustrations, and other UI elements. It helps improve the performance and scalability of graphic assets compared to bitmap images.

# Libraries used:
React Native Modal:
A component for displaying modal dialogs, which allows users to view information without navigating away from the current screen.
React Native Vector Icons:
A customizable set of icons for React Native, allowing you to use pre-built icons or create your own to enhance the app's UI with clean and scalable vector icons.
React Native Gesture Handler:
A library to handle gestures such as taps, swipes, and pan gestures in a more efficient and customizable way, working well alongside React Reanimated for complex animations.
React Native Safe Area Context:
A library that helps to manage the safe area insets on both iOS and Android devices, ensuring that your app's content is displayed correctly without overlapping system UI elements like the notch, status bar, or home indicator.
React Screens:
A library for optimizing the performance of React Native apps by managing the navigation stack efficiently. It provides a more optimized and customizable screen management solution than React Navigation's default implementation. It is typically used alongside React Navigation to ensure smooth transitions and prevent memory leaks.
React SVG:
A library that allows you to use Scalable Vector Graphics (SVG) in your React Native application. React Native SVG provides a set of components for rendering SVG images, enabling you to use vector graphics in your app for icons, illustrations, and other UI elements. It helps improve the performance and scalability of graphic assets compared to bitmap images.

# Features
User Authentication:
Sign-in and sign-up functionality, enabling users to log in and manage their profiles.
Home Screen Layout:
Displays Searched bar with profile id, QR Code scanner, Pay contacts, Pay number, Bank Transfer, UPI ID, Self Transfer, Pay Bills, Mobile Recharge, People Section, Business Section ( RedBus, Fibre Loans,
Makemytip, Google PlayStore), Bill Section( Mobile recharge, Electricity, Dth/Cable, Credit Cards), Offers & Rewards Section( Offers, Rewards, Referrals), Invite Section, Manage Money Section ( CIBIL Score, Transaction History, Check bank balance)
Modals:
Informational modals to display content details and provide insights into the app's features.
Navigation:
Smooth, stack-based navigation across different screens like Home, Profile, and Payment using React Navigation.

# Screenshots
Sig-in:
![1](https://github.com/user-attachments/assets/6681444f-353e-4b16-8579-5237a1348567)
Otp page:
![2](https://github.com/user-attachments/assets/ddbc7526-733f-440b-8bb6-81baa0928517)
Gpay Main Page:
![3](https://github.com/user-attachments/assets/e22406dc-290a-4271-82d9-f57922d094e2)
![4](https://github.com/user-attachments/assets/6633880e-b870-4ae5-ae59-80e545721d3c)
![5](https://github.com/user-attachments/assets/5676201b-b1fe-49db-9f20-1ebc6c20493f)
