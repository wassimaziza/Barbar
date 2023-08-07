  import React, { useState } from 'react'
  import { View, Text, TextInput, Button, Alert } from 'react-native'
  import firebase from 'firebase/app'
  import 'firebase/auth'
  import axios from 'axios' 
  import { useNavigation } from '@react-navigation/native'


  const ClientRegister = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

  const handleRegistration = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      const client = firebase.auth().currentclient

      const response = await axios.post('http://localhost:3000/client/Add', {
        firstname,
        lastname,
        email,
        password,
        profile_pic: 'https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg',
        phone_number: '',
        location: '',
      })

      Alert.alert('Registration Successful', 'Welcome to Barbar, enjoy your visit ')
      navigation.navigate('ClientProfile', { client })
    } catch (error) {
      Alert.alert('Error', 'Impossible to create you profile as an error has occurred')
    }
  }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="First Name"
          value={firstname}
          onChangeText={setFirstname}
          style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Last Name"
          value={lastname}
          onChangeText={setLastname}
          style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        />
        <Button title="Register" onPress={handleRegistration} />
      </View>
    )
  }

  export default ClientRegister
