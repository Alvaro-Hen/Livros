import { livros } from '@/data/livros';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/cores';

export default function Home(){
  return(
  <ScrollView style={styles.container}>
    <View style={styles.containerLivros}>
      {livros.map((livro) => (
        <Pressable style={styles.area} key={livro.id} onPress={() => router.push({pathname: '/[id]', params:{id: livro.id}})}>
          <Image style={styles.imagem} source={livro.imagem}/>
          <Text style={styles.titulo}>{livro.nome}</Text>
        </Pressable>
      ))}
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerLivros: {
    flexDirection: 'row',      
    flexWrap: 'wrap',            
    justifyContent: 'space-around',    
    rowGap: 24,                     
  },
  area: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.texto,
    marginBottom: 8,
  },
  imagem: {
    width: 140,                  
    height: 210,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});