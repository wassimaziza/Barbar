import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClientProfile from './Client screens/ClientProfile';
import ClientHome from './Client screens/ClientHome';
import ClientBooking from './Client screens/ClientBooking';
import ClientShop from './Client screens/ClientShop';
import ClientLikes from './Client screens/ClientLikes';




const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={ClientHome} />
        <Tab.Screen name='Likes' component={ClientLikes} />
        <Tab.Screen name='Booking' component={ClientBooking} />
        <Tab.Screen name='Shop' component={ClientShop} />
        <Tab.Screen name='Profile' component={ClientProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


 }
