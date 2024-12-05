import { View, Text, FlatList } from "react-native";
import { Styles } from "./style"; 
import { Header } from "../Components/Header/header";
import { Task } from "../Components/Task/task";
import { useState } from "react";
import { TaskDTO } from "../DTO/TaskDTO";
import { Empty } from "../Components/Empty/empty";

export function Home(){
    const [Tasks, setTask] = useState<TaskDTO[]>([
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
            ListEmptyComponent={<Empty/>}
         />

        </View>
    </View>
    )
}