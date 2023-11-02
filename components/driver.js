/* import React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';

const DriversScreen = () => {
  return (
    <View>
      <Text>Drivers Screen</Text>
      <List.Item
    title="First Item"
    description="Item description"
   />
   <Text>Drivers Screen</Text>

    
    </View>
  );
};

export default DriversScreen; */

/* import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const DriverInquiryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmission = () => {
    // Perform form validation
    if (!name || !email || !phone) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Perform API call or submit form data
    // Example: sendFormData(name, email, phone);
    // You can customize this as per your requirements

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');

    // Show success message
    Alert.alert('Success', 'Your inquiry has been submitted successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Driver Inquiry Form</Text>
      <View style={styles.blueBox}>
        <Text style={styles.blueBoxText}>{name}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={text => setPhone(text)}
        keyboardType="phone-pad"
      />
      <Button title="Submit" onPress={handleSubmission} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  blueBox: {
    backgroundColor: '#3498db',
    width: '100%',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  blueBoxText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DriverInquiryForm; */

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Image } from 'react-native';

export default function App() {
  return (
    /* style={styles.container} */
    <View>
      <View style={styles.contentContainer}>
        <>
          <TouchableOpacity>
            <Text style={styles.button2Text}>Driver Inquiry</Text>
            

            <Image style={styles.inquiry1} source={require('../assets/inquiry1.png')} />

            <Text style={styles.subHeading}>           
            Welcome to the driver inquiry page. Please provide us with the following
             information to assist you further with your query.
            </Text>
          </TouchableOpacity>

          <View style={styles.container}>
            <Text style={styles.heading}>John Doe</Text>

            <TextInput
              style={styles.textInput}
              placeholder="Write something..."
              placeholderTextColor="gray"
              multiline
            />

            <Text></Text>

            <TouchableOpacity style={styles.button1}>
              <Text style={styles.button1Text}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  inquiry1: {
    width:'90%',
    height:'50%',
   
  marginLeft:'7%',
 
 
    
  
  },

  button2: {
    backgroundColor: '#2288dc',
    padding: 10,

    borderTopEndRadius: 0,
    borderBottomEndRadius: 60,

    borderWidth: 1,
    borderColor: '#2288dc',
    width: 410,
    height: 100,
  },
  button2Text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  textInput: {
    /*   backgroundColor: '#7ce4e3', */
  
    color:'black',
    backgroundColor: '#EBECF0',
    width: '90%',
    height: 200,
 
    borderRadius: 8,
    color: 'blue',
    textAlignVertical: 'top',
  },

  button1: {
    backgroundColor: '#2288dc',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2288dc',
    width: 370,
  },

  button1Text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:'-17%',
    
  },
  subHeading: {
    fontSize: 17,
    color: '#666',
    alignContent:'center',
    textAlign:'center',
    marginLeft:'1%',
  },
});
