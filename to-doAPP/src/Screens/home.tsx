import { View, Text } from "react-native";
import { Styles } from "./style"; 
import { Header } from "../Components/Header/header";

export function Home(){
    return (
    <View style={Styles.container}>
        <Header/>
    </View>
    )
}