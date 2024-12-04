import { View, Text } from "react-native";
import { Styles } from "./style"; 

export function Home(){
    return (
    <View style={Styles.container}>
        <Text style={Styles.title}>Home Screen</Text>
    </View>
    )
}