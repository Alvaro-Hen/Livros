import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs, router } from "expo-router";
import { Button } from 'react-native';
import { colors } from '../constants/cores';

export default function InicioLayout(){
    return(
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Inicio",
                    headerTintColor: colors.primaria,
                    headerStyle: {backgroundColor: colors.background},
                    tabBarIcon: () => <Feather name="home" size={24} color="black" />,
                    headerTitleAlign: 'center',
                    headerRight: () => <Button 
                    title='sair'
                    color={colors.primaria}
                    onPress={() => router.replace('/')}
                    ></Button>
                }}
            />

            <Tabs.Screen
                name="estante"
                options={{
                    title: "Estante",
                    tabBarIcon: () => <Ionicons name="library" size={24} color="black" />
                }}
            />

            <Tabs.Screen
                name="perfil"
                options={{
                    title: "Perfil",
                    tabBarIcon: () => <Feather name="user" size={24} color="black" />
                }}
            />
        </Tabs>
    )
}