import { router } from 'expo-router';
import { Button, Text, TextInput, View } from 'react-native';
import { cores } from '../app/constants/cores';
import { stylesBase, stylesLogin } from './styles';

export default function Login() {
  return (
    <View style={stylesLogin.container}>
      <Text style={stylesBase.titulo}>Login</Text>

      <View style={stylesLogin.inputs}>
        <Text style={stylesLogin.texto}>Usuário</Text>
        <TextInput 
          style={stylesLogin.input}
          placeholder="Digite seu usuário" 
        />
      </View>

      <View style={stylesLogin.inputs}>
        <Text style={stylesLogin.texto}>Senha</Text>
        <TextInput 
          style={stylesLogin.input}
          placeholder="Digite sua senha"
        />
      </View>

      <View style={stylesLogin.botao}>
        <Button 
          title="Entrar" 
          color={cores.primaria}
          onPress={() => router.replace('/inicio')} 
        />
      </View>
    </View>
  );
}