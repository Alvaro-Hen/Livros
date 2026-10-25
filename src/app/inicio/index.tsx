import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { cores } from '../constants/cores';

export default function Home(){
  return(
  <ScrollView style={styles.container}>
    <View style={styles.containerLivros}>
      <View style={styles.area}>
        <Text style={styles.titulo}>Mistborn</Text>
        <Image source={require("../../../assets/images/91U6rc7u0yL._AC_UF1000,1000_QL80_.jpg")} style={styles.imagem}/>
      </View>
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
    justifyContent: 'center',    
    gap: 16,                     
  },
  area: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  imagem: {
    width: 140,                  
    height: 210,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});
