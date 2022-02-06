import Application from './src/index';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Application />
      </NavigationContainer>
    </>

  );
}
