import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { Theme } from './src/DesignSystem/theme';
import { Home } from './src/Screens/home';
import { Loading } from './src/Components/Loading/loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_700Bold
  })

  return (
    <>
      {fontsLoaded ? <Home/> : <Loading/>}
      <StatusBar barStyle='light-content'
      backgroundColor='transparent' translucent/>
    </>
  );
}


