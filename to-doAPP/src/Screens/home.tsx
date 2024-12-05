import { View, Text, FlatList } from "react-native";
import { Styles } from "./style"; 
import { Header } from "../Components/Header/header";
import { Task } from "../Components/Task/task";
import { useState } from "react";
import { TaskDTO } from "../DTO/TaskDTO";

export function Home(){
    const [Tasks, setTask] = useState<TaskDTO[]>([
        {id: '1', isCompleted: false, title: 'TEST'},
        {id: '2', isCompleted: true, title: 'TEST'},
        {id: '3', isCompleted: true, title: 'TEST'}
    ])
    return (
    <View style={Styles.container}>
        <Header/>
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
         />


        </View>
    </View>
    )
}