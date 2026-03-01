import { View, Text } from "react-native"

import { CircleUserRound } from "lucide-react-native";

import { styles } from "./styles";

type Props = {
    title: string;
    data: string;
    nota: string;
}


export function Avaliacao ({title, data, nota} : Props) {
    return(
        <View style={styles.container}>
            <View style={styles.avaliacaoContainer}>
                <CircleUserRound size={24} color="#F2F2F4"/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.data}>{data}</Text>
            </View>
            <View>
                <Text style={styles.nota}>{nota}</Text>
            </View>
        </View>
    )
}