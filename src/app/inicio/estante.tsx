import { BarraAcoes } from '@/components/barraAcoes';
import { livros } from '@/data/livros';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { stylesBase, stylesGradeLivros } from '../styles';

export default function Home(){

  //Filtrando apenas por fantasia. Ter varios filtros é muito dificil kkkkkkk
  const [comFiltro, setComFiltro] = useState(false);

  const livrosMostrar = comFiltro ? livros.filter((livro) => livro.genero?.toLowerCase() === 'fantasia'): livros

  return(
  <ScrollView style={stylesBase.container}>
    <BarraAcoes 
        onPressFiltrar={() => setComFiltro(!comFiltro)}
        onPressAdicionar={() => alert('Adicionar')}
    />
    <View style={stylesGradeLivros.containerLivros}>
      {livrosMostrar.map((livro) => (                                        //Tentei so colocar o caminho mas nao tava indo. Tive que usar o pathname com a variavel
        <Pressable style={stylesGradeLivros.area} key={livro.id} onPress={() => router.push({pathname: '/[id]', params:{id: livro.id}})}> 
          <Image style={stylesGradeLivros.imagem} source={livro.imagem}/>
          <Text style={stylesGradeLivros.titulo}>{livro.nome}</Text>
        </Pressable>
      ))}
    </View>
  </ScrollView>
  )
}
