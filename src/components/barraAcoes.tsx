import { cores } from '@/app/constants/cores';
import Feather from "@expo/vector-icons/Feather";
import { Pressable, StyleSheet, View } from 'react-native';

interface BarraAcaoProps{
    onPressFiltrar: () => void;
    onPressAdicionar: () => void;
}

export function BarraAcoes({onPressFiltrar, onPressAdicionar}: BarraAcaoProps){
    return(
        <View style={style.container}>
            <Pressable 
            style={style.botao}
            onPress={onPressFiltrar}
            >
                <Feather name="filter" size={15}/>
            </Pressable>
            
            <Pressable
            style={style.botao}
            onPress={onPressAdicionar}
            >
                <Feather name="plus" size={15}/>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 5,
    paddingHorizontal: 24,
    paddingTop: 5
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.primaria,
    borderWidth: 1,
    borderColor: cores.borda,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
})