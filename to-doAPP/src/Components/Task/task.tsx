import { View, TouchableOpacity, Text } from "react-native"
import { StyleTask } from "./style-task" 
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Theme } from "../../DesignSystem/theme"

export function Task(){
    return (
        <View style={StyleTask.taskContainer}>
            <TouchableOpacity>
                <MaterialCommunityIcons 
                name="checkbox-marked-circle-outline" 
                size={22} 
                color={Theme.colors.brand.purple}
                />
            </TouchableOpacity>

            <View style={StyleTask.textContainer}>
                <Text style={StyleTask.textDone}>Task exemple</Text>
            </View>

            <TouchableOpacity>
                <MaterialCommunityIcons 
                name="trash-can-outline" 
                size={20} 
                color={Theme.colors.base.gray300}
                />
            </TouchableOpacity>


            
        </View>
    )
}