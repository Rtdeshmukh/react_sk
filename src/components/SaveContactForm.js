// // SaveContactForm.js
// import React, { useState } from "react";
// import { View, Text, TextInput, Button, Alert, Platform } from "react-native";
// import Contacts from "react-native-contacts";
// import { PermissionsAndroid } from "react-native";

// const SaveContactForm = () => {
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [website, setWebsite] = useState("");
//   const [contactSaved, setContactSaved] = useState(false);

//   // Request permission for Android
//   const requestContactPermission = async () => {
//     if (Platform.OS === "android") {
//       const permission = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
//         {
//           title: "Contacts Permission",
//           message: "This app needs access to your contacts.",
//           buttonPositive: "Allow",
//         }
//       );
//       if (permission === PermissionsAndroid.RESULTS.GRANTED) {
//         openNativeContactsApp();
//       } else {
//         Alert.alert("Permission denied", "Unable to access contacts");
//       }
//     } else {
//       openNativeContactsApp(); // iOS automatically handles permissions
//     }
//   };

//   // Open native contacts app to add a new contact with dynamic data
//   const openNativeContactsApp = () => {
//     const newContact = {
//       displayName: name, // Use the dynamic name from the state
//       phoneNumbers: [{ label: "mobile", number: phoneNumber }], // Use the dynamic phone number
//       emailAddresses: [{ label: "work", email: email }], // Use the dynamic email
//       urlAddresses: [{ label: "website", url: website }], // Use the dynamic website
//     };

//     // Android only: opening the contacts app with a new contact
//     if (Platform.OS === "android") {
//       Contacts.openContactForm(newContact)
//         .then(() => {
//           setContactSaved(true);
//           Alert.alert("Success", "Contact saved successfully!");
//         })
//         .catch((error) => {
//           Alert.alert("Error", "Failed to open contact form");
//         });
//     } else {
//       // iOS uses a different API to open the contact form directly
//       Contacts.openContactForm(newContact);
//     }
//   };

//   return (
//     <View>
//       <Text>Enter Contact Details:</Text>

//       {/* Input fields for contact details */}
//       <TextInput
//         placeholder="Enter Name"
//         value={name}
//         onChangeText={setName}
//         style={{ borderBottomWidth: 1, marginBottom: 10 }}
//       />
//       <TextInput
//         placeholder="Enter Phone Number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//         keyboardType="phone-pad"
//         style={{ borderBottomWidth: 1, marginBottom: 10 }}
//       />
//       <TextInput
//         placeholder="Enter Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         style={{ borderBottomWidth: 1, marginBottom: 10 }}
//       />
//       <TextInput
//         placeholder="Enter Website URL"
//         value={website}
//         onChangeText={setWebsite}
//         keyboardType="url"
//         style={{ borderBottomWidth: 1, marginBottom: 20 }}
//       />

//       {/* Button to trigger saving the contact */}
//       {!contactSaved ? (
//         <Button title="Save Contact" onPress={requestContactPermission} />
//       ) : (
//         <Text>Contact Saved!</Text>
//       )}
//     </View>
//   );
// };

// export default SaveContactForm;
