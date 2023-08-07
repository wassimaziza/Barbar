import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import axios from 'axios' 
import firebase from 'firebase/app';
import 'firebase/auth'



const ClientBooking = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleBooking = async () => {
    try {
      const user = firebase.auth().currentUser
      if (!user) {
        return Alert.alert('Authentication Required', 'You must be logged in to book.')
      }
      const response = await axios.post("http://localhost:3000/booking/addBooking", {
        date,
        time,
        barber_id: barber_id, 
      })

      Alert.alert('Booking Successful', 'congrats!, booking has been added successfully.')
      setDate('')
      setTime('')
    } catch (error) {
      Alert.alert('Error', 'Error while processing your booking.')
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Time"
        value={time}
        onChangeText={setTime}
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Book" onPress={handleBooking} />
    </View>
  )
}

export default ClientBooking
