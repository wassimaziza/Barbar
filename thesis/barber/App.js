import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClientProfile from './screens/Client screens/ClientProfile';
import ClientHome from './screens/Client screens/ClientHome';
import ClientBooking from './screens/Client screens/ClientBooking';
import ClientShop from './screens/Client screens/ClientShop';
import ClientLikes from './screens/Client screens/ClientLikes';
import BarberProfile from './screens/Barber screens/BarberProfile';
import BarberHome from './screens/Barber screens/BarberHome';
import BarberBooking from './screens/Barber screens/BarberBooking';
import BarberPoints from './screens/Barber screens/BarberPoints';
import BarberLikes from './screens/Barber screens/BarberLikes';




const Tab = createBottomTabNavigator()

export default function App() {

  const [loggedIn,setLoggedIn] =useState(false)

  const getUser = () =>{
    return loggedIn ? 'client' : 'barber'
  }
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={getUser()}>
        { loggedIn ? (
          <>
        <Tab.Screen name='Home' component={ClientHome} />
        <Tab.Screen name='Likes' component={ClientLikes} />
        <Tab.Screen name='Booking' component={ClientBooking} />
        <Tab.Screen name='Shop' component={ClientShop} />
        <Tab.Screen name='Profile' component={ClientProfile} />
        </>
        ) :(
          <>
          <Tab.Screen name='Home' component={BarberHome} />
          <Tab.Screen name='Likes' component={BarberLikes} />
          <Tab.Screen name='Booking' component={BarberBooking} />
          <Tab.Screen name='Points' component={BarberPoints} />
          <Tab.Screen name='Profile' component={BarberProfile} />
          </>
        )
}
      </Tab.Navigator>
    </NavigationContainer>
  )
        ;



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


 }
