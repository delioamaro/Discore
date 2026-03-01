import { View, Text } from "react-native"

import { CircleUserRound } from "lucide-react-native";

import { styles } from "./styles";

type Props = {
    title: string;
    album: string;
    cantor: string;
    data: string;
    nota: string;
}


export function MinhasAvaliacoes({title, data, nota, album, cantor} : Props) {
    return(
        <View style={styles.container}>
            <View style={styles.avaliacaoContainer}>
                <View style={styles.usuarioContainer}>
                    <CircleUserRound size={24} color="#F2F2F4"/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.albumContainer}>
                    <Text style={styles.titleAlbum}>{album}</Text>
                    <Text style={styles.titleCantor}>{cantor}</Text>
                </View>
            </View>
            <View style={styles.dataNota}>
                <Text style={styles.data}>{data}</Text>
                <Text style={styles.nota}>{nota}</Text>
            </View>
        </View>
    )
}