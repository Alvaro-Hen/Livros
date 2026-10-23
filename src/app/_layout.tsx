import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function layout(){
    return(
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Inicio",
                    tabBarIcon: () => <Feather name="home" size={24} color="black" />
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