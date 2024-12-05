import { View, Text, FlatList, Alert, TextInput} from "react-native";
import { useState, useRef } from "react";

import { Styles } from "./style"; 
import { Header } from "../Components/Header/header";
import { Task } from "../Components/Task/task";
import { TaskDTO } from "../DTO/TaskDTO";
import { Empty } from "../Components/Empty/empty";
import { uuid } from "../Utils/uuid";

export function Home(){
    //States 
    const [Tasks, setTasks] = useState<TaskDTO[]>([])
    const [NewTask, setNewTask] = useState('') 
    const newTaskInputRef = useRef<TextInput>(null)

    function handleTaskAdd(){ 
        if(NewTask !== '' && NewTask.length >= 5)
        setTasks((Tasks) => [
            ...Tasks,
            {id: uuid(), isCompleted: false, title: NewTask.trim()},
         ])

         setNewTask('')

         newTaskInputRef.current?.blur()
    } 
    
    function handleTaskDone(id: string) {
        setTasks((Task) => Task.map((Task) => {
            Task.id === id ? (Task.isCompleted =! Task.isCompleted) : null 
            return Task
        } 
    ))}

    function handleTaskDeleted(id: string) {
		Alert.alert('Excluir tarefa', 'Desejar excluir essa tarefa?', [
			{
				text: 'Sim',
				style: 'default',
				onPress: () =>
					setTasks((tasks) => tasks.filter((task) => task.id !== id)),
			},
			{
				text: 'Não',
				style: 'cancel',
			},
		])
	} 

    const totalTasksCreated = Tasks.length
	const totalTasksCompleted = Tasks.filter(
		({ isCompleted }) => isCompleted,
	).length

    return (
    <View style={Styles.container}>
        <Header
        inputRef={newTaskInputRef}
        task={NewTask} 
        onChangeText={setNewTask} 
        onPress={handleTaskAdd}/>
        <View style={Styles.tasksContainer}> 
            <View style={Styles.info}>
                <View style={Styles.row}>
                    <Text style={Styles.tasksCreated}>Criadas</Text>
                    <View style={Styles.counterContainer}>
                        <Text>{totalTasksCreated}</Text>
                    </View>
                </View>
                <View style={Styles.row}>
                    <Text style={Styles.tasksDone}>Concluidas</Text>
                    <View style={Styles.counterContainer}>
                        <Text>{totalTasksCompleted}</Text>
                    </View>
                </View>
            </View>

            <FlatList
            data={Tasks}
            keyExtractor={(Tasks) => Tasks.id}
            renderItem={({ item }) => (
            <Task
            key={item.id}
            onTaskDone={() => handleTaskDone(item.id)}
            onTaskDeleted={() => handleTaskDeleted(item.id)}
            {...item}
            />
            )}
            ListEmptyComponent={<Empty/>}
         />

        </View>
    </View>
    )
}