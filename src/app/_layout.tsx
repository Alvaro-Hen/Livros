import { Stack } from 'expo-router';
import { cores } from './constants/cores';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />

      <Stack.Screen 
        name="inicio" 
        options={{ headerShown: false }} 
      />

      <Stack.Screen 
        name="[id]" 
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: cores.background},
          headerTintColor: cores.texto,
          headerBackTitle: 'Voltar',
        }} 
      />
    </Stack>
  );
}