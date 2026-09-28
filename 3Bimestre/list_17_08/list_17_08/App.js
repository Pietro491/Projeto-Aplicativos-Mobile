import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";

export default function App() {

  const jogadores = [
    {
      nome: "Lionel Messi",
      bolas: 8,
      pais: "🇦🇷 Argentina"
    },
    {
      nome: "Cristiano Ronaldo",
      bolas: 5,
      pais: "🇵🇹 Portugal"
    },
    {
      nome: "Michel Platini",
      bolas: 3,
      pais: "🇫🇷 França"
    },
    {
      nome: "Johan Cruyff",
      bolas: 3,
      pais: "🇳🇱 Holanda"
    },
    {
      nome: "Marco van Basten",
      bolas: 3,
      pais: "🇳🇱 Holanda"
    },
    {
      nome: "Franz Beckenbauer",
      bolas: 2,
      pais: "🇩🇪 Alemanha"
    },
    {
      nome: "Ronaldo Nazário",
      bolas: 2,
      pais: "🇧🇷 Brasil"
    }
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        🏆 BOLA DE OURO
      </Text>

      <Text style={styles.subtitulo}>
        Jogadores com mais prêmios
      </Text>

      <ScrollView style={styles.lista}>

        {jogadores.map((jogador, index) => (

          <View style={styles.card} key={jogador.nome}>

            <View style={styles.numero}>
              <Text style={styles.numeroTexto}>
                {index + 1}
              </Text>
            </View>

            <View style={styles.informacoes}>

              <Text style={styles.nome}>
                {jogador.nome}
              </Text>

              <Text style={styles.pais}>
                {jogador.pais}
              </Text>

            </View>

            <View style={styles.bolas}>

              <Text style={styles.quantidade}>
                {jogador.bolas}
              </Text>

              <Text style={styles.textoBola}>
                🏆
              </Text>

            </View>

          </View>

        ))}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#075E24",
    paddingTop: 60,
    paddingHorizontal: 20
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 5
  },

  subtitulo: {
    fontSize: 16,
    color: "#D8F3DC",
    textAlign: "center",
    marginBottom: 25
  },

  lista: {
    width: "100%"
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",

    elevation: 5
  },

  numero: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#075E24",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12
  },

  numeroTexto: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  },

  informacoes: {
    flex: 1
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222"
  },

  pais: {
    fontSize: 14,
    color: "#666",
    marginTop: 4
  },

  bolas: {
    alignItems: "center",
    marginLeft: 10
  },

  quantidade: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#075E24"
  },

  textoBola: {
    fontSize: 20
  }

});