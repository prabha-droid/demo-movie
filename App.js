import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/navigation/mainStack';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}