import { BarraAcoes } from '@/components/barraAcoes';
import { livros } from '@/data/livros';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { cores } from '../constants/cores';

export default function Home(){

  //Filtrando apenas por fantasia. Ter varios filtros é muito dificil kkkkkkk
  const [comFiltro, setComFiltro] = useState(false);

  const livrosMostrar = comFiltro ? livros.filter((livro) => livro.genero?.toLowerCase() === 'fantasia'): livros

  return(
  <ScrollView style={styles.container}>
    <BarraAcoes 
        onPressFiltrar={() => setComFiltro(!comFiltro)}
        onPressAdicionar={() => alert('Adicionar')}
    />
    <View style={styles.containerLivros}>
      {livrosMostrar.map((livro) => (                                        //Tentei so colocar o caminho mas nao tava indo. Tive que usar o pathname com a variavel
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
    backgroundColor: cores.background,
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
    color: cores.texto,
    marginBottom: 8,
  },
  imagem: {
    width: 140,                  
    height: 210,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});