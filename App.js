import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import HomeStackNavigation from './src/navigations/Navigation'

export default function App() {
  return (
    <NavigationContainer >
      <HomeStackNavigation />
    </NavigationContainer>
  );
}
