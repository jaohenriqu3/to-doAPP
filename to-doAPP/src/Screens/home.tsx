import { View, Text } from "react-native";
import { Styles } from "./style"; 
import { Header } from "../Components/Header/header";

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
        </View>
    </View>
    )
}