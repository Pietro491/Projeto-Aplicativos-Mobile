import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

export default function App() {

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin() {

    if (usuario === "torcedor" && senha === "futebol123") {

      Alert.alert(
        "Login realizado! ⚽",
        "Bem-vindo ao mundo do futebol!"
      );

    } else {

      Alert.alert(
        "Erro ❌",
        "Usuário ou senha incorretos!"
      );

    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.caixa}>

        <Text style={styles.bola}>⚽</Text>

        <Text style={styles.titulo}>
          FUTEBOL LOGIN
        </Text>

        <Text style={styles.subtitulo}>
          Entre para acompanhar seu time!
        </Text>

        <Text style={styles.label}>
          Usuário
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          placeholderTextColor="#777"
          value={usuario}
          onChangeText={setUsuario}
        />

        <Text style={styles.label}>
          Senha
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#777"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={fazerLogin}
        >
          <Text style={styles.textoBotao}>
            ENTRAR ⚽
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#075E24",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  caixa: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 20,
    elevation: 10
  },

  bola: {
    fontSize: 60,
    textAlign: "center",
    marginBottom: 10
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#075E24",
    marginBottom: 8
  },

  subtitulo: {
    textAlign: "center",
    color: "#666",
    marginBottom: 25
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    fontSize: 16
  },

  botao: {
    backgroundColor: "#075E24",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold"
  }

});