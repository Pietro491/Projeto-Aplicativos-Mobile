import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const personagens = [
  {
    id: '1',
    nome: 'Gojo',
    anime: 'Jujutsu Kaisen',
  },
  {
    id: '2',
    nome: 'Naruto',
    anime: 'Naruto',
  },
  {
    id: '3',
    nome: 'Luffy',
    anime: 'One Piece',
  },
  {
    id: '4',
    nome: 'Goku',
    anime: 'Dragon Ball',
  },
];

// Função para mostrar cada personagem
function mostrarPersonagem({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text>{item.anime}</Text>
    </View>
  );
}

// Tela inicial
function Inicio({ navigation }) {

  function irParaLista() {
    navigation.navigate('Personagens');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Meu App de Anime
      </Text>

      <Text style={styles.texto}>
        Bem-vindo!
      </Text>

      <Button
        title="Ver personagens"
        onPress={irParaLista}
      />
    </View>
  );
}

// Tela da lista
function Personagens() {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Personagens
      </Text>

      <FlatList
        data={personagens}
        keyExtractor={(item) => item.id}
        renderItem={mostrarPersonagem}
      />

    </View>
  );
}

// Navegação
export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Inicio"
          component={Inicio}
        />

        <Stack.Screen
          name="Personagens"
          component={Personagens}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  texto: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#eeeeee',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});