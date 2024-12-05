import { View, TouchableOpacity, Text } from "react-native"
import { StyleTask } from "./style-task" 
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Theme } from "../../DesignSystem/theme"

import { TaskDTO } from "../../DTO/TaskDTO"

export function Task( {title, isCompleted} : TaskDTO ){
    return (
        <View style={StyleTask.taskContainer}>
            <TouchableOpacity>
                <MaterialCommunityIcons 
                name={
                    isCompleted
                     ? "checkbox-marked-circle-outline" 
                     : "checkbox-blank-circle-outline"
                }
                size={22} 
                color={
                    isCompleted
                    ?Theme.colors.brand.purple
                    :Theme.colors.brand.blue } 
                />
            </TouchableOpacity>

            <View style={StyleTask.textContainer}>
                <Text style={ isCompleted 
                ? StyleTask.textDone
                : StyleTask.textCreated}>{title}</Text>
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