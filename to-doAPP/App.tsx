import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Theme } from './src/DesignSystem/theme';
import { Home } from './src/Screens/home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_700Bold
  })

  return (
    <View style={styles.container}>
      {fontsLoaded ? <Home/> : <ActivityIndicator size={50}/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.base.gray600,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
