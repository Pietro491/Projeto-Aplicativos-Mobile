import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import {
  NavigationContainer
} from "@react-navigation/native";

import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();


// =========================
// TELA INICIAL
// =========================

function Inicio({ navigation }) {

  return (

    <View style={styles.container}>

      <Text style={styles.emoji}>
        ⚽
      </Text>

      <Text style={styles.titulo}>
        FUTEBOL
      </Text>

      <Text style={styles.subtitulo}>
        Bem-vindo ao aplicativo de futebol!
      </Text>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Bola de Ouro")}
      >

        <Text style={styles.textoBotao}>
          🏆 Bola de Ouro
        </Text>

      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Jogadores")}
      >

        <Text style={styles.textoBotao}>
          👤 Jogadores
        </Text>

      </TouchableOpacity>

    </View>

  );
}


// =========================
// TELA BOLA DE OURO
// =========================

function BolaDeOuro({ navigation }) {

  return (

    <View style={styles.container}>

      <Text style={styles.emoji}>
        🏆
      </Text>

      <Text style={styles.titulo}>
        BOLA DE OURO
      </Text>

      <Text style={styles.texto}>
        Lionel Messi - 8 🏆
      </Text>

      <Text style={styles.texto}>
        Cristiano Ronaldo - 5 🏆
      </Text>

      <Text style={styles.texto}>
        Michel Platini - 3 🏆
      </Text>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Jogadores")}
      >

        <Text style={styles.textoBotao}>
          Ver jogadores
        </Text>

      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => navigation.navigate("Início")}
      >

        <Text style={styles.textoBotaoSecundario}>
          Voltar para início
        </Text>

      </TouchableOpacity>

    </View>

  );
}


// =========================
// TELA JOGADORES
// =========================

function Jogadores({ navigation }) {

  return (

    <View style={styles.container}>

      <Text style={styles.emoji}>
        👤
      </Text>

      <Text style={styles.titulo}>
        JOGADORES
      </Text>

      <Text style={styles.texto}>
        ⚽ Lionel Messi
      </Text>

      <Text style={styles.texto}>
        ⚽ Cristiano Ronaldo
      </Text>

      <Text style={styles.texto}>
        ⚽ Neymar
      </Text>

      <Text style={styles.texto}>
        ⚽ Vinícius Júnior
      </Text>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Bola de Ouro")}
      >

        <Text style={styles.textoBotao}>
          Ver Bola de Ouro
        </Text>

      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => navigation.navigate("Início")}
      >

        <Text style={styles.textoBotaoSecundario}>
          Voltar para início
        </Text>

      </TouchableOpacity>

    </View>

  );
}


// =========================
// NAVEGAÇÃO
// =========================

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Início"
          component={Inicio}
          options={{
            title: "⚽ Futebol"
          }}
        />

        <Stack.Screen
          name="Bola de Ouro"
          component={BolaDeOuro}
          options={{
            title: "🏆 Bola de Ouro"
          }}
        />

        <Stack.Screen
          name="Jogadores"
          component={Jogadores}
          options={{
            title: "👤 Jogadores"
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}


// =========================
// CSS / ESTILOS
// =========================

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#075E24",

    justifyContent: "center",

    alignItems: "center",

    padding: 25

  },


  emoji: {

    fontSize: 70,

    marginBottom: 15

  },


  titulo: {

    fontSize: 30,

    fontWeight: "bold",

    color: "#FFFFFF",

    marginBottom: 10

  },


  subtitulo: {

    fontSize: 17,

    color: "#D8F3DC",

    textAlign: "center",

    marginBottom: 30

  },


  texto: {

    backgroundColor: "#FFFFFF",

    width: "100%",

    padding: 15,

    borderRadius: 10,

    marginBottom: 10,

    fontSize: 18,

    fontWeight: "bold",

    color: "#222"

  },


  botao: {

    backgroundColor: "#FFFFFF",

    width: "100%",

    padding: 15,

    borderRadius: 10,

    alignItems: "center",

    marginTop: 15

  },


  textoBotao: {

    color: "#075E24",

    fontSize: 17,

    fontWeight: "bold"

  },


  botaoSecundario: {

    backgroundColor: "#064A1C",

    width: "100%",

    padding: 15,

    borderRadius: 10,

    alignItems: "center",

    marginTop: 10

  },


  textoBotaoSecundario: {

    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "bold"

  }

});