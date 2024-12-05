import { View, Text } from "react-native";
import { Styles } from "./style"; 

import { Header } from "../Components/Header/header";
import { Task } from "../Components/Task/task";

export function Home(){
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
            <Task title="Exemple" isCompleted ={false} />
            <Task title="Exemple" isCompleted />
            <Task title="Exemple" isCompleted />
        </View>
    </View>
    )
}