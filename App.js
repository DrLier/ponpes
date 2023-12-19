import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import AboutScreen from './screens/aboutus';
import ReportScreen from './screens/report';
import GalleryScreen from './screens/gallery';
import DonasiScreen from './screens/donasi';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Ini akan menyembunyikan header di semua layar
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name='Gallery' component={GalleryScreen} />
        <Stack.Screen name='Donasi' component={DonasiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
