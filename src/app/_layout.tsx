import { Stack } from 'expo-router';
import { colors } from './constants/cores';

export default function RootLayout() {
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
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.texto,
          headerBackTitle: 'Voltar',
        }} 
      />
    </Stack>
  );
}