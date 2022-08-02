import { StatusBar, SafeAreaView, StyleSheet, Text} from 'react-native';
import Basket from './src/screens/Basket';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Basket/>
    </SafeAreaView>
  );
}
