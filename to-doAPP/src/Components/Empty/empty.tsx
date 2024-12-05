import { View, Image, Text } from "react-native"; 
import { StyleEmpty } from "./style-empty";
import Clipboard from "../../Assets/clipboard.png";

export function Empty(){
    return (
        <View style={StyleEmpty.emptyContainer}>
            <Image source={Clipboard}
            style={StyleEmpty.image}/>
            <Text style={StyleEmpty.textBold}>Nenhuma tarefa cadastrada</Text>
            <Text style={[StyleEmpty.textBold, StyleEmpty.textRegular]}>Crie tarefas e organize seus afazeres</Text>
        </View>
    )
} 