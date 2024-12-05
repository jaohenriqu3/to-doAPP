import { View, Image, TextInput, TouchableOpacity, Text } from "react-native"; 
import { StyleHeader } from "./style-header"; 
import Logo from '../../Assets/tasky.png'
import { Theme } from "../../DesignSystem/theme";
import { MaterialCommunityIcons } from '@expo/vector-icons'

type HeaderProps = {
    task: string;
    onChangeText: (task: string) => void; 
    onPress: () => void; 
}

export function Header({ task, onChangeText, onPress }: HeaderProps) {
    return(
        <View style={StyleHeader.headerContainer}>
            <Image source={Logo} />
            <View style={StyleHeader.form}>
                <TextInput style={StyleHeader.input} 
                placeholder="Adicione uma nova tarefa" 
                placeholderTextColor={Theme.colors.base.gray300}
                value={task} 
                onChangeText={onChangeText}
                />
                <TouchableOpacity style={StyleHeader.button} onPress={onPress} >
                    <MaterialCommunityIcons name="plus-circle-outline" 
                     size={24} color={Theme.colors.base.gray100} >
                    </MaterialCommunityIcons>
                </TouchableOpacity>
            </View>
        </View>
    )
}