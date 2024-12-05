import { View, TouchableOpacity, Text } from "react-native"
import { StyleTask } from "./style-task" 
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Theme } from "../../DesignSystem/theme"

import { TaskDTO } from "../../DTO/TaskDTO"

type TasksProps = TaskDTO & {
    onTaskDone: (id: string) => void 
    onTaskDeleted: (id: string) => void 

}

export function Task({
    id,
    title,
    isCompleted,
    onTaskDone,
    onTaskDeleted} : TasksProps ) {
    return (
        <View style={StyleTask.taskContainer}>
            <TouchableOpacity onPress={() => onTaskDone(id)}>
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

            <TouchableOpacity onPress={() => onTaskDeleted(id)}>
                <MaterialCommunityIcons 
                name="trash-can-outline" 
                size={20} 
                color={Theme.colors.base.gray300}
                />
            </TouchableOpacity>
        </View>
    )
}