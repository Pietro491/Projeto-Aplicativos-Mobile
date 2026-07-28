import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  TextInput, 
  Button 
} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Portal de Tecnologia
        </Text>

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png'
          }}
          style={styles.imagem}
        />

        <Text style={styles.subtitulo}>
          As novidades do mundo da tecnologia
        </Text>

        <Text style={styles.texto}>
          A tecnologia está mudando a forma como estudamos,
          trabalhamos e nos comunicamos.
        </Text>


        <View style={styles.card}>

          <Text style={styles.cardTitulo}>
            iPhone 29: O futuro da tecnologia móvel
          </Text>

          <Text style={styles.cardTexto}>
           O iPhone 29 seria um celular futurista com inteligência artificial avançada, câmera em alta qualidade, 
           bateria de longa duração e uma tela inovadora. Ele ajudaria os usuários em tarefas do dia a dia,
          trazendo mais segurança, velocidade e tecnologia para a vida das pessoas.

          </Text>

        </View>


        <View style={styles.card}>

          <Text style={styles.cardTitulo}>
            Envie sua opinião
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu comentário..."
          />

          <Button
            title="Publicar comentário"
            onPress={() => alert("Comentário publicado!")}
          />

        </View>


        <Text style={styles.final}>
          © 2026 Portal de Tecnologia
        </Text>


      </View>

      <StatusBar style="auto" />

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    padding: 20,
  },


  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#1a1a1a',
  },


  imagem: {
    width: 180,
    height: 180,
    margin: 25,
  },


  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },


  texto: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 20,
  },


  card: {
    backgroundColor: '#ffffff',
    width: '95%',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },


  cardTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },


  cardTexto: {
    fontSize: 16,
    marginBottom: 15,
  },


  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },


  final: {
    fontSize: 15,
    marginTop: 20,
    color: '#555',
  }

});