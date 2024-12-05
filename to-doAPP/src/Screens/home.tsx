import { View, Text, FlatList } from "react-native";
import { useState } from "react";

import { Styles } from "./style"; 
import { Header } from "../Components/Header/header";
import { Task } from "../Components/Task/task";
import { TaskDTO } from "../DTO/TaskDTO";
import { Empty } from "../Components/Empty/empty";
import { uuid } from "../Utils/uuid";

export function Home(){
    //States 
    const [Tasks, setTask] = useState<TaskDTO[]>([])
    const [NewTask, setNewTask] = useState('')

    function handleTaskAdd(){ 
        if(NewTask !== '' && NewTask.length >= 5)
        setTask((Tasks) => [
            ...Tasks,
            {id: uuid(), isCompleted: false, title: NewTask.trim()},
         ])
         
         setNewTask('')
    }

    return (
    <View style={Styles.container}>
        <Header task={NewTask} 
        onChangeText={setNewTask} 
        onPress={handleTaskAdd}/>
        <View style={Styles.tasksContainer}> 
            <View style={Styles.info}>
                <View style={Styles.row}>
                    <Text style={Styles.tasksCreated}>Criadas</Text>
                    <View style={Styles.counterContainer}>
                        <Text>0</Text>
                    </View>
                </View>
                <View style={Styles.row}>
                    <Text style={Styles.tasksDone}>Concluidas</Text>
                    <View style={Styles.counterContainer}>
                        <Text>0</Text>
                    </View>
                </View>
            </View>

            <FlatList
            data={Tasks}
            keyExtractor={(Tasks) => Tasks.id!}
            renderItem={({ item }) => (
            <Task
            key={item.id}
            isCompleted={item.isCompleted}
            title={item.title}
            />
            )}
            ListEmptyComponent={<Empty/>}
         />

        </View>
    </View>
    )
}