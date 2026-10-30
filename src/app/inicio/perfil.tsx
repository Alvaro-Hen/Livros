import { livros } from '@/data/livros';
import { Image, ScrollView, Text, View } from 'react-native';
import { stylesBase, stylesPerfil } from '../styles';

export default function Perfil() {
  
  const livrosLidosCount = livros.filter(
    (livro) => livro.status.toLowerCase() === 'lido'
  ).length;

  return (
    <ScrollView style={stylesBase.container} contentContainerStyle={stylesBase.containerAlinhado}>
      <View style={[stylesBase.Area, stylesPerfil.cartaoUsuario]}>
        <View style={stylesPerfil.topoPerfil}>
          <Image 
            source={require('../../../assets/images/817857.jpg')}
            style={stylesPerfil.avatar} 
          />
          <View style={stylesPerfil.arrobaContainer}> 
            <Text style={stylesBase.titulo}>Alvaro Henrique</Text>
            <Text style={stylesPerfil.arroba}>@alvaro_.henrique</Text>
          </View>
        </View>

        <Text style={stylesPerfil.descricao}>
          Amante de livros de fantasia. Meta do ano: ler 24 livros
        </Text>

        <View style={stylesPerfil.containerEstatisticas}>
          <View style={stylesPerfil.estatisticaItem}>
            <Text style={stylesPerfil.numeroEstatistica}>1.250</Text>
            <Text style={stylesPerfil.textoEstatistica}>Seguidores</Text>
          </View>

          <View style={stylesPerfil.estatisticaItem}>
            <Text style={stylesPerfil.numeroEstatistica}>340</Text>
            <Text style={stylesPerfil.textoEstatistica}>Seguindo</Text>
          </View>

          <View style={stylesPerfil.estatisticaItem}>
            <Text style={stylesPerfil.numeroEstatistica}>{livrosLidosCount}</Text>
            <Text style={stylesPerfil.textoEstatistica}>Lidos</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}
