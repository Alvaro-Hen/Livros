import { cores } from '@/app/constants/cores';
import { livros } from '@/data/livros';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Perfil() {
  
  const livrosLidosCount = livros.filter(
    (livro) => livro.status.toLowerCase() === 'lido'
  ).length;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.containerAlinhado}>
      <View style={styles.cartaoUsuario}>
        <View style={styles.perfil}>
          <Image 
            source={require('../../../assets/images/817857.jpg')}
            style={styles.imagem} 
          />
          <View style={styles.arrobaContainer}>
            <Text style={styles.nome}>Alvaro Henrique</Text>
            <Text style={styles.arroba}>@alvaro_.henrique</Text>
          </View>
        </View>

        <Text style={styles.descricao}>
          Amante de livros de fantasia. Meta do ano: ler 24 livros
        </Text>

        <View style={styles.containerEstatisticas}>
          <View style={styles.estatistica}>
            <Text style={styles.numero}>1.250</Text>
            <Text style={styles.texto}>Seguidores</Text>
          </View>

          <View style={styles.estatistica}>
            <Text style={styles.numero}>340</Text>
            <Text style={styles.texto}>Seguindo</Text>
          </View>

          <View style={styles.estatistica}>
            <Text style={styles.numero}>{livrosLidosCount}</Text>
            <Text style={styles.texto}>Lidos</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.background,
  },
  containerAlinhado: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  cartaoUsuario: {
    backgroundColor: cores.area,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 16,
    padding: 18,
  },
  perfil: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 12,
  },
  imagem: {
    width: 68,
    height: 68,
    borderWidth: 2,
    borderColor: cores.primaria,
  },
  arrobaContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.texto,
  },
  arroba: {
    fontSize: 14,
    color: cores.primaria,
    marginTop: 2,
  },
  descricao: {
    fontSize: 14,
    lineHeight: 20,
    color: cores.texto,
    marginBottom: 18,
  },
  containerEstatisticas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: cores.background,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 12,
    paddingVertical: 12,
  },
  estatistica: {
    alignItems: 'center',
    flex: 1,
  },
  numero: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.primaria,
  },
  texto: {
    fontSize: 12,
    color: cores.secundaria,
  },
});