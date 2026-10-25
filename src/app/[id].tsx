import { cores } from "@/app/constants/cores";
import { livros } from "@/data/livros";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function DetalhesLivro(){
    const {id} = useLocalSearchParams();
    const livro = livros.find(
      l => l.id === Number(id)
    )

    if(!livro){
        return <Text style={styles.texto}>Livro nao encontrado</Text>
    }

    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.containerAlinhado}>
            <Stack.Screen options={{title: livro.nome, headerShown: true, headerTitleAlign: "center"}}/>
            <Image source={livro.imagem} style={styles.Imagem}></Image>
            <Text style={styles.titulo}>{livro.nome}</Text>
            <View style={styles.informacoes}>
              <Text style={styles.texto}>{livro.autor}</Text>
              <Text style={styles.texto}>|</Text>
              <Text style={styles.texto}>{livro.paginas} paginas</Text>
              <Text style={styles.texto}>|</Text>
              <Text style={styles.texto}>{livro.genero}</Text>
            </View>
            <View style={styles.sinopse}>
              <Text style={styles.titulo}>Sinopse</Text>
              <Text style={styles.texto}>Lorem ipsum 2</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.background,
  },
  containerAlinhado: {
    alignItems: 'center',
    padding: 24,
  },
  Imagem: {
    width: 180,
    height: 270,
    borderRadius: 10,
    backgroundColor: cores.area,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: cores.texto,
    textAlign: 'center',
    marginBottom: 6,
  },
  informacoes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  texto: {
    fontSize: 14,
    color: cores.texto2,
  },
  sinopse: {
    width: '100%',
    backgroundColor: cores.area,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 8,
    padding: 16,
  },
});