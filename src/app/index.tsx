import { router } from 'expo-router';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../app/constants/cores';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <View style={styles.inputs}>
        <Text style={styles.texto}>Usuário</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite seu usuário" 
        />
      </View>

      <View style={styles.inputs}>
        <Text style={styles.texto}>Senha</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite sua senha"
        />
      </View>

      <View style={styles.botao}>
        <Button 
          title="Entrar" 
          color={colors.primaria}
          onPress={() => router.replace('/inicio')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    backgroundColor: colors.background,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.texto,
    marginBottom: 36,
  },
  inputs: {
    marginBottom: 18,
  },
  texto: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.texto,
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.area,
    borderWidth: 1,
    borderColor: colors.borda,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.texto,
  },
  botao: {
    marginTop: 14,
  },
});