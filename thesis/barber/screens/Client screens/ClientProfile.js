import React,{useState} from "react";
import { View, Text, TextInput, Button, Alert } from 'react-native'
import firebase from 'firebase/app'
import 'firebase/auth';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native'


const ProfileScreen = () => {
    const route = useRoute();
    const user = route.params.user
  
    const [firstname, setFirstname] = useState(user.displayName.split(' ')[0])
    const [lastname, setLastname] = useState(user.displayName.split(' ')[1])
    const [email, setEmail] = useState(user.email)
  
    const navigation = useNavigation()
  
    const handleUpdate = async () => {
      try {
        await user.updateProfile({
          displayName: `${firstname} ${lastname}`,
        })
        const response = await axios.post('http://localhost:3000/client/updateProfile', {
          firstname,
          lastname,
          email,
          profile_pic: '',
          phone_number: '', 
          location: '', 
        })
  
        Alert.alert('Profile Updated', 'Update well done.')
      } catch (error) {
        Alert.alert('Error', 'An error occurred while updating your profile.')
      }
    }
  
    const handleDelete = async () => {
      try {
        await user.delete()
        const response = await axios.post('http://localhost:3000/client/deleteAccount')
        Alert.alert('Account Deleted', 'Your account has been deleted successfully.')
        navigation.navigate('ClientRegister') 
      } catch (error) {
        Alert.alert('Error', 'An error occurred while deleting your account.')
      }
    }
  
    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Profile Details</Text>
        <TextInput
          placeholder="First Name"
          value={firstname}
          onChangeText={setFirstname}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lastname}
          onChangeText={setLastname}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button title="Update Profile" onPress={handleUpdate} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Delete profile" onPress={handleDelete} />
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: 300,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    buttonContainer: {
      marginTop: 10,
      width: 200,
    },
  })
  
  export default ProfileScreen