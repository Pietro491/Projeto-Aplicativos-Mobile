import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
<ScrollView style={styles.fundo}>
      <View>
        <Text>Catalogo de Plantas</Text>
      </View>
      <View>
        <Button onPress={() => {setIsHungry(false);}} title={'Babosa'}>

        </Button>

        <Button onPress={() => {setIsHungry(false);}} title={'Abacatero'}>

        </Button>

        <Button onPress={() => {setIsHungry(false);}} title={'Rosa'}>

        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
