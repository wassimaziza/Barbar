import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={home} />
        <Tab.Screen name='Likes' component={likes} />
        <Tab.Screen name='Booking' component={booking} />
        <Tab.Screen name='Shop' component={shop} />
        <Tab.Screen name='Profile' component={profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
}
