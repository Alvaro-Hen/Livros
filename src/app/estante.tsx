import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Home(){
  return(
  <ScrollView style={styles.container}>
    <View style={styles.booksWrapper}>
      <View style={styles.card}>
        <Text style={styles.title}>Mistborn</Text>
        <Image source={require("../../assets/images/91U6rc7u0yL._AC_UF1000,1000_QL80_.jpg")} style={styles.coverImage}/>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Memorias do Subsolo</Text>
        <Image source={require("../../assets/images/81B8n0OCzTL._AC_UF1000,1000_QL80_.jpg")} style={styles.coverImage}/>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Marina</Text>
        <Image source={require("../../assets/images/71k-t4AMIRL._AC_UF1000,1000_QL80_.jpg")} style={styles.coverImage}/>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Jantar Secreto</Text>
        <Image source={require("../../assets/images/jantar-secreto_2025-02-18_11-29-38_0_147.jpg")} style={styles.coverImage}/>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Ordem Vermelha</Text>
        <Image source={require("../../assets/images/9157OBqrOuL._UF1000,1000_QL80_.jpg")} style={styles.coverImage}/>
      </View>
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  booksWrapper: {
    flexDirection: 'row',      
    flexWrap: 'wrap',            
    justifyContent: 'center',    
    gap: 16,                     
  },
  card: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  coverImage: {
    width: 140,                  
    height: 210,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});