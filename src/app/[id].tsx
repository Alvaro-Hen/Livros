import { livros } from "@/data/livros";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from 'react-native';
import { stylesBase, stylesId } from "./styles";

export default function DetalhesLivro(){
    const {id} = useLocalSearchParams();
    const livro = livros.find(
      l => l.id === Number(id)
    )

    if(!livro){
        return <Text style={stylesId.texto}>Livro nao encontrado</Text>
    }

    return(
        <ScrollView style={stylesBase.container} contentContainerStyle={stylesId.alinhamentoCentral}>
            <Stack.Screen options={{title: livro.nome, headerShown: true, headerTitleAlign: "center"}}/>
            <Image source={livro.imagem} style={stylesId.imagemGrande}></Image>
            <Text style={stylesId.titulo}>{livro.nome}</Text>
            <View style={stylesId.informacoes}>
              <Text style={stylesId.texto}>{livro.autor}</Text>
              <Text style={stylesId.texto}>|</Text>
              <Text style={stylesId.texto}>{livro.paginas} paginas</Text>
              <Text style={stylesId.texto}>|</Text>
              <Text style={stylesId.texto}>{livro.genero}</Text>
            </View>
            <View style={stylesBase.Area}>
              <Text style={stylesId.titulo}>Sinopse</Text>
              <Text style={stylesId.sinopseTexto}>Lorem ipsum 2</Text>
            </View>
        </ScrollView>
    )
}
