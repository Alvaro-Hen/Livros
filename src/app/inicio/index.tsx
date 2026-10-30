import { Image, ScrollView, Text, View } from 'react-native';
import { stylesBase, stylesGradeLivros } from '../styles';

export default function Home(){
  return(
  <ScrollView style={stylesBase.container}>
    <View style={stylesGradeLivros.containerLivros}>
      <View style={stylesGradeLivros.area}>
        <Text style={stylesBase.titulo}>Mistborn</Text>
        <Image source={require("../../../assets/images/91U6rc7u0yL._AC_UF1000,1000_QL80_.jpg")} style={stylesGradeLivros.imagem}/>
      </View>
    </View>
  </ScrollView>
  )
}
